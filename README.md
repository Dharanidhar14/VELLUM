# VELLUM &mdash; Career Intelligence Platform

> _"Your next chapter, thoughtfully prepared."_

**VELLUM** is an editorial-grade career intelligence platform that assists students, emerging engineers, and analysts in understanding their resume strengths, identifying verifiable skill gaps, evaluating job compatibility, and establishing actionable employability roadmaps.

Unlike generic AI resume checkers with neon gradients, arbitrary ATS percentage scores, or synthetic flattery, VELLUM is designed with an authentic publication-quality editorial visual identity, evidence-grounded diagnostics, and structured pedagogical roadmaps.

---

## Visual Identity & Design System

VELLUM's visual identity draws inspiration from classical architectural typography, vellum drafting paper, and restrained editorial layout design.

### Color Palette

| Token | HEX | Role |
|---|---|---|
| **Warm Ivory** | `#F5F1E8` | Base paper background canvas |
| **Charcoal** | `#252820` | High-contrast typography, primary buttons, structural hairline borders |
| **Sage Green** | `#647763` | Positive alignment indicators, verified badges, action accents |
| **Muted Sand** | `#D8CBB5` | Secondary paper surfaces, metric cards, tonal dividers |

### Typography

- **Headings:** `Bodoni Moda` (Classic editorial serif with optical sizing)
- **Body & Interface:** `Inter` (Precise, accessible sans-serif)
- **Metadata & Technical:** `IBM Plex Mono` (Monospaced alignment indices, step markers, and technical labels)

### Texture & Ornamentation

- Micro-subtle paper grain overlay via SVG fractal noise.
- Fine geometric line illustrations (nested concentric arches, technical crosshairs, and quadrant glyphs).
- Hairline borders (`border border-vellum-charcoal/15`) with sharp, clean geometry.

---

## Application Structure & Pages

1. **Editorial Landing Page (`/`):**
   - Wordmark, navigation, and colophon.
   - Hero narrative: *"Your next chapter, thoughtfully prepared."*
   - Geometric concentric arches vector artwork.
   - 4-step methodology: `01 Understand your profile`, `02 Explore your opportunities`, `03 Identify your skill gaps`, `04 Build your next step`.
   - Restrained live product preview.

2. **Resume Ingestion (`/upload`):**
   - Dedicated drag-and-drop file upload zone.
   - Validation for PDF and DOCX formats (max 10MB).
   - Document hierarchy parsing state.
   - Active file metadata card with replace and remove functionality.
   - Editorial privacy reassurance pledge.

3. **Target Calibration (`/roles`):**
   - Dual-mode target selection:
     1. Predefined benchmark roles (Software Engineer, Python Developer, ML Engineer, Data Analyst, Data Scientist, Frontend Developer, Backend Developer).
     2. Custom job description input with character counter and sample requisition loader.
   - Domain category filtering and instant search.

4. **Analysis Dashboard (`/analysis`):**
   - Overall alignment score with quantitative benchmark scale.
   - Editorial diagnostic summary narrative.
   - Demonstrated vs. Partial vs. Missing skills breakdown.
   - Section diagnostics across Education, Experience tenure, and Project portfolio.
   - Top high-impact remediation opportunities.

5. **Detailed Skill Assessment (`/skills`):**
   - Individual expandable audit rows for every required competency.
   - Verifiable resume evidence citations and quotes.
   - Importance weighting (Critical, High, Recommended).
   - Diagnostic gap analysis and recommended corrective actions.
   - Interactive filtering by domain and status.

6. **Strategic Development Plan (`/plan`):**
   - 3-phase, 6-week progressive roadmap.
   - Authoritative primary literature, documentation, and reference books.
   - Concrete portfolio projects with verifiable deliverable criteria.
   - Print-ready curriculum view.

---

## Technical Stack & Architecture

- **Framework:** Next.js (App Router, Static Site Generation / Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom editorial tokens
- **Icons:** Lucide Icons
- **State Management:** React Context (`AnalysisContext`)
- **Service Layer:** `analysisService.ts` &mdash; typed REST abstraction ready for plug-and-play connection to a Python FastAPI backend via `NEXT_PUBLIC_API_URL`.

---

## Getting Started

### Prerequisites
- Node.js 18.x or 20.x+ (Tested on Node.js v26 LTS)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Dharanidhar14/VELLUM.git
cd VELLUM

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## Backend Integration Note

The frontend features a dedicated, typed service layer located at `lib/api/analysisService.ts`. When the Python FastAPI backend is running, set the environment variable:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

The frontend will seamlessly send `multipart/form-data` uploads to `/api/analyze` and retrieve dynamic role benchmarks from `/api/roles`.
