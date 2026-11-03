"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AlignmentAnalysis, TargetRole, UploadedResume } from "../api/types";
import { PREDEFINED_ROLES } from "../api/mockData";
import { analysisService } from "../api/analysisService";

interface AnalysisContextType {
  resume: UploadedResume | null;
  setResume: (resume: UploadedResume | null) => void;
  selectedRoleId: string;
  setSelectedRoleId: (id: string) => void;
  customJobDescription: string;
  setCustomJobDescription: (jd: string) => void;
  analysis: AlignmentAnalysis | null;
  isAnalyzing: boolean;
  runAnalysis: (targetRoleId?: string) => Promise<AlignmentAnalysis>;
  activeRole: TargetRole | undefined;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: React.ReactNode }) {
  const [resume, setResume] = useState<UploadedResume | null>(() => {
    if (typeof window !== "undefined") {
      return {
        file: null,
        name: "Devon_Vance_Resume_2026.pdf",
        size: 245000,
        type: "application/pdf",
      };
    }
    return null;
  });

  const [selectedRoleId, setSelectedRoleId] = useState<string>("software-engineer");
  const [customJobDescription, setCustomJobDescription] = useState<string>("");
  const [analysis, setAnalysis] = useState<AlignmentAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  // Auto-initialize default analysis report on first mount if not present
  useEffect(() => {
    let isMounted = true;
    if (!analysis) {
      analysisService
        .analyze({
          file: resume || { name: "Devon_Vance_Resume_2026.pdf", size: 245000 },
          roleId: selectedRoleId,
        })
        .then((res) => {
          if (isMounted) setAnalysis(res);
        })
        .catch(console.error);
    }
    return () => {
      isMounted = false;
    };
  }, [selectedRoleId]);

  const activeRole = PREDEFINED_ROLES.find((r) => r.id === selectedRoleId) || PREDEFINED_ROLES[0];

  const runAnalysis = async (targetRoleId?: string): Promise<AlignmentAnalysis> => {
    setIsAnalyzing(true);
    const roleToUse = targetRoleId || selectedRoleId;
    try {
      const result = await analysisService.analyze({
        file: resume || { name: "Candidate_Resume.pdf", size: 200000 },
        roleId: roleToUse,
        customJobDescription: customJobDescription || undefined,
      });
      setAnalysis(result);
      setIsAnalyzing(false);
      return result;
    } catch (err) {
      setIsAnalyzing(false);
      throw err;
    }
  };

  return (
    <AnalysisContext.Provider
      value={{
        resume,
        setResume,
        selectedRoleId,
        setSelectedRoleId,
        customJobDescription,
        setCustomJobDescription,
        analysis,
        isAnalyzing,
        runAnalysis,
        activeRole,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error("useAnalysis must be used within an AnalysisProvider");
  }
  return context;
}
