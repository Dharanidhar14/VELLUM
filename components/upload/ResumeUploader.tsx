"use client";

import React, { useState, useRef } from "react";
import { Upload, FileText, CheckCircle2, AlertCircle, RefreshCw, Trash2, ArrowRight } from "lucide-react";
import { useAnalysis } from "@/lib/context/AnalysisContext";
import { formatBytes, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export function ResumeUploader() {
  const { resume, setResume } = useAnalysis();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
  ];
  const maxBytes = 10 * 1024 * 1024; // 10 MB

  const validateAndProcessFile = (file: File) => {
    setErrorMessage(null);

    // Validate extension / MIME
    const isPdfOrDoc =
      allowedTypes.includes(file.type) ||
      file.name.endsWith(".pdf") ||
      file.name.endsWith(".docx") ||
      file.name.endsWith(".doc");

    if (!isPdfOrDoc) {
      setErrorMessage(
        "Invalid file format. Please upload a PDF (.pdf) or Microsoft Word document (.docx)."
      );
      return;
    }

    if (file.size > maxBytes) {
      setErrorMessage(
        `File size exceeds 10MB limit (selected file is ${formatBytes(file.size)}).`
      );
      return;
    }

    // Simulate realistic upload/parsing progression
    setUploadProgress(15);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev === null) return null;
        if (prev >= 100) {
          clearInterval(interval);
          setResume({
            file,
            name: file.name,
            size: file.size,
            type: file.type || "application/pdf",
            lastModified: file.lastModified,
          });
          return null;
        }
        return prev + 25;
      });
    }, 120);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    setResume(null);
    setUploadProgress(null);
    setErrorMessage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx,.doc"
        className="hidden"
        onChange={handleFileInputChange}
      />

      {/* Validation Error Alert */}
      {errorMessage && (
        <div className="p-4 bg-[#fdf3e7] border border-[#e4b986] text-[#92541a] flex items-start gap-3 animate-in fade-in">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <div className="font-mono text-xs space-y-1">
            <span className="font-semibold block uppercase">Validation Error</span>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Uploading progress bar */}
      {uploadProgress !== null && (
        <div className="border border-vellum-charcoal/20 bg-vellum-ivory p-6 space-y-3">
          <div className="flex justify-between items-center font-mono text-xs text-vellum-charcoal">
            <span className="flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-vellum-sage" />
              Parsing Document Hierarchy...
            </span>
            <span className="font-semibold">{uploadProgress}%</span>
          </div>
          <div className="w-full h-1.5 bg-vellum-sand/40 overflow-hidden">
            <div
              className="h-full bg-vellum-charcoal transition-all duration-150"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Upload area or Selected file preview */}
      {!resume ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "cursor-pointer border border-dashed transition-all duration-200 p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4 group",
            isDragging
              ? "border-vellum-charcoal bg-vellum-sand/40 scale-[0.99]"
              : "border-vellum-charcoal/30 bg-vellum-ivory hover:border-vellum-charcoal hover:bg-vellum-sand/15"
          )}
        >
          <div className="w-12 h-12 rounded-none border border-vellum-charcoal/30 flex items-center justify-center bg-vellum-sand/20 group-hover:border-vellum-charcoal transition-colors">
            <Upload className="w-5 h-5 text-vellum-charcoal/80 group-hover:scale-110 transition-transform" />
          </div>

          <div className="space-y-1.5">
            <p className="font-serif text-xl sm:text-2xl font-normal text-vellum-charcoal">
              Select or drop your resume file
            </p>
            <p className="font-mono text-xs text-vellum-charcoal-muted">
              Click to browse files or drag directly onto this surface
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] text-vellum-charcoal-light uppercase tracking-wider">
            <span className="px-2 py-0.5 border border-vellum-charcoal/15 bg-vellum-ivory">
              PDF Document (.pdf)
            </span>
            <span className="px-2 py-0.5 border border-vellum-charcoal/15 bg-vellum-ivory">
              Word Document (.docx)
            </span>
            <span>Max 10 MB</span>
          </div>
        </div>
      ) : (
        /* Selected Resume Card */
        <div className="border border-vellum-charcoal/20 bg-vellum-ivory p-6 sm:p-8 space-y-6 shadow-editorial">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-vellum-charcoal/15 gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 border border-vellum-charcoal/20 bg-vellum-sand/30 shrink-0">
                <FileText className="w-6 h-6 text-vellum-charcoal" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-vellum-charcoal-muted">
                    Active Document
                  </span>
                  <Badge variant="sage" dot>
                    Ready for analysis
                  </Badge>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-vellum-charcoal break-all">
                  {resume.name}
                </h3>
                <div className="flex items-center gap-3 font-mono text-xs text-vellum-charcoal-light">
                  <span>{formatBytes(resume.size)}</span>
                  <span>&middot;</span>
                  <span>{resume.type || "Document"}</span>
                  <span>&middot;</span>
                  <span>Validated Structure</span>
                </div>
              </div>
            </div>

            {/* Replace / Remove Actions */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Replace
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleRemove}
                className="gap-1.5 text-red-800 border-red-800/30 hover:border-red-800 hover:bg-red-50"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Remove
              </Button>
            </div>
          </div>

          {/* Next Step Action Banner */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-vellum-charcoal font-semibold block">
                Next: Select Target Role
              </span>
              <p className="font-sans text-xs text-vellum-charcoal-muted">
                Calibrate this document against industry engineering baselines or custom job descriptions.
              </p>
            </div>
            <Button href="/roles" variant="primary" size="md" withArrow>
              Continue to Role Selection
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
