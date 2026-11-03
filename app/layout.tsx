import type { Metadata } from "next";
import { Bodoni_Moda, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AnalysisProvider } from "@/lib/context/AnalysisContext";
import { PaperTexture } from "@/components/artwork/PaperTexture";
import { Header } from "@/components/layout/Header";
import { WorkflowNavigation } from "@/components/layout/WorkflowNavigation";
import { Footer } from "@/components/layout/Footer";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELLUM — Career Intelligence Platform",
  description: "Your next chapter, thoughtfully prepared. Understand your resume strengths, identify skill gaps, and prepare for the opportunities you actually want.",
  keywords: ["career intelligence", "resume evaluation", "skill gap analysis", "engineering career roadmap"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-vellum-ivory text-vellum-charcoal antialiased flex flex-col selection:bg-vellum-charcoal selection:text-vellum-ivory">
        <AnalysisProvider>
          {/* Subtle tactile paper grain overlay */}
          <PaperTexture />
          
          {/* Primary editorial navigation */}
          <Header />
          
          {/* Multi-step workflow navigation */}
          <WorkflowNavigation />

          {/* Main content viewport */}
          <main className="flex-1 w-full flex flex-col">{children}</main>

          {/* Editorial colophon footer */}
          <Footer />
        </AnalysisProvider>
      </body>
    </html>
  );
}
