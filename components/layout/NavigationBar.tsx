"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationConfig } from "@/config/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-900 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg
              className="h-7 w-7 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <span className="text-lg font-semibold text-gray-900 dark:text-slate-100 tracking-tight">
              CineHub
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted
                           hover:text-gray-900 dark:hover:text-slate-100
                           hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop right — theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://github.com/Engraya/cinehub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
            >
              GitHub
            </a>
            <Link href="/explore">
              <span className="inline-flex items-center px-4 py-2 rounded-lg
                               bg-accent text-white text-sm font-semibold
                               hover:bg-accent-hover transition-colors shadow-sm cursor-pointer">
                Browse Movies
              </span>
            </Link>
          </div>

          {/* Mobile right — theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="p-2 rounded-md text-muted hover:text-gray-900 dark:hover:text-slate-100
                         hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white dark:bg-slate-900 animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navigationConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-medium
                           text-gray-700 dark:text-slate-300
                           hover:text-gray-900 dark:hover:text-slate-100
                           hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link href="/explore" onClick={() => setMobileOpen(false)}>
                <span className="block w-full px-4 py-2.5 rounded-lg bg-accent text-white
                                 text-sm font-semibold text-center cursor-pointer
                                 hover:bg-accent-hover transition-colors">
                  Browse Movies
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
