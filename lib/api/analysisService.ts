import { AlignmentAnalysis, TargetRole } from "./types";
import { PREDEFINED_ROLES, getMockAnalysis } from "./mockData";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

/**
 * Service layer for VELLUM Career Intelligence analysis.
 * Uses mock data by default; easily swapped to real FastAPI REST endpoints
 * by setting NEXT_PUBLIC_API_URL.
 */
export const analysisService = {
  /**
   * Fetch all predefined target roles.
   */
  async getRoles(): Promise<TargetRole[]> {
    if (API_BASE_URL) {
      try {
        const res = await fetch(`${API_BASE_URL}/api/roles`);
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn("Backend API unavailable, falling back to local roles catalog:", err);
      }
    }
    return PREDEFINED_ROLES;
  },

  /**
   * Fetch a specific role by ID.
   */
  async getRoleById(roleId: string): Promise<TargetRole | undefined> {
    const roles = await this.getRoles();
    return roles.find((r) => r.id === roleId);
  },

  /**
   * Analyze an uploaded resume against a target role or custom job description.
   */
  async analyze(params: {
    file: File | { name: string; size: number };
    roleId?: string;
    customJobDescription?: string;
  }): Promise<AlignmentAnalysis> {
    const { file, roleId = "software-engineer", customJobDescription } = params;

    if (API_BASE_URL) {
      try {
        const formData = new FormData();
        if ("type" in file && file instanceof File) {
          formData.append("resume", file);
        }
        if (roleId) formData.append("role_id", roleId);
        if (customJobDescription) formData.append("custom_jd", customJobDescription);

        const res = await fetch(`${API_BASE_URL}/api/analyze`, {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn("FastAPI endpoint unavailable, using typed mock intelligence engine:", err);
      }
    }

    // Simulate network latency for realistic UX state transitions
    await new Promise((resolve) => setTimeout(resolve, 800));
    return getMockAnalysis(roleId, file.name);
  },
};
