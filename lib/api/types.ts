export type SkillStatus = "demonstrated" | "partial" | "missing";

export interface SkillAssessment {
  id: string;
  name: string;
  category: "Technical" | "Architecture & Systems" | "Tooling & Cloud" | "Practices & Soft Skills";
  status: SkillStatus;
  importance: "Critical" | "High" | "Recommended";
  evidence: string | null;
  resumeQuote?: string;
  gapExplanation: string;
  recommendedAction: string;
}

export interface LearningResource {
  title: string;
  type: "Documentation" | "Book" | "Course" | "Interactive Guide";
  authorOrPlatform: string;
  url?: string;
  duration: string;
}

export interface PracticeProject {
  title: string;
  description: string;
  deliverable: string;
  skillsPracticed: string[];
  complexity: "Foundational" | "Intermediate" | "Advanced";
}

export interface DevelopmentPlanPhase {
  phase: number;
  phaseLabel: string;
  timeframe: string;
  focus: string;
  rationale: string;
  skills: {
    skillName: string;
    whyItMatters: string;
    resources: LearningResource[];
    project: PracticeProject;
  }[];
}

export interface TargetRole {
  id: string;
  title: string;
  category: "Engineering" | "Data & AI" | "Product & Systems";
  experienceLevel: "Entry-Level" | "Associate / Junior" | "Mid-Level";
  summary: string;
  coreRequirements: string[];
  recommendedPreparation: string;
}

export interface AlignmentAnalysis {
  id: string;
  targetRole: TargetRole;
  resumeFileName: string;
  analyzedAt: string;
  overallScore: number;
  verdict: "Strong Foundation" | "Promising Alignment" | "Requires Targeted Preparation";
  editorialSummary: string;
  
  matchedCount: number;
  partialCount: number;
  missingCount: number;
  
  skills: SkillAssessment[];
  
  educationAlignment: {
    status: "aligned" | "partially-aligned" | "not-specified";
    credentialFound: string;
    targetExpectation: string;
    commentary: string;
  };
  
  experienceAlignment: {
    status: "growing" | "entry-aligned" | "gap-identified";
    yearsDemonstrated: string;
    targetExpectation: string;
    commentary: string;
  };
  
  projectRelevance: {
    projectsEvaluated: number;
    relevantCount: number;
    highlightedStrengths: string[];
    gapObservations: string[];
  };
  
  improvementOpportunities: {
    id: string;
    priority: "High Priority" | "Medium Priority" | "Strategic Polish";
    area: string;
    impact: string;
    actionSummary: string;
  }[];
  
  developmentPlan: DevelopmentPlanPhase[];
}

export interface UploadedResume {
  file: File | null;
  name: string;
  size: number;
  type: string;
  lastModified?: number;
}
