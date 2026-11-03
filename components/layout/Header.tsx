"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/#how-it-works", label: "How it works" },
    { href: "/roles", label: "Roles" },
    { href: "/analysis", label: "Dashboard" },
    { href: "/skills", label: "Skill Matrix" },
    { href: "/plan", label: "Roadmap" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-vellum-ivory/95 backdrop-blur-sm border-b border-vellum-charcoal/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand wordmark */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="group flex items-baseline gap-1 focus:outline-none"
          >
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-vellum-charcoal group-hover:text-vellum-charcoal/80 transition-colors">
              vellum
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-vellum-sage translate-y-[-2px] group-hover:scale-125 transition-transform" />
          </Link>
          <span className="hidden md:inline-block font-mono text-[11px] text-vellum-charcoal-light tracking-widest uppercase border-l border-vellum-charcoal/20 pl-4 py-0.5">
            Career Intelligence
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono text-xs uppercase tracking-wider transition-colors py-1 relative",
                  isActive
                    ? "text-vellum-charcoal font-semibold border-b border-vellum-charcoal"
                    : "text-vellum-charcoal-muted hover:text-vellum-charcoal"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            href="/analysis"
            variant="ghost"
            size="sm"
            className="text-vellum-charcoal-muted hover:text-vellum-charcoal"
          >
            Sign in
          </Button>
          <Button
            href="/upload"
            variant="primary"
            size="sm"
            withArrow
          >
            Analyse Resume
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            href="/upload"
            variant="primary"
            size="sm"
            className="text-[10px] px-2.5 py-1"
          >
            Analyse
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-vellum-charcoal hover:bg-vellum-sand/30 border border-vellum-charcoal/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-vellum-charcoal/20 bg-vellum-ivory px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-wider text-vellum-charcoal py-2 px-3 border border-vellum-charcoal/10 hover:bg-vellum-sand/20 flex justify-between items-center"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-vellum-charcoal-muted" />
              </Link>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <Button
              href="/upload"
              variant="primary"
              size="md"
              withArrow
              className="w-full justify-between"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
