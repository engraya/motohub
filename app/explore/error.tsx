"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ExploreErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ExploreError({ error, reset }: ExploreErrorProps) {
  useEffect(() => {
    console.error("[ExploreError]", error);
  }, [error]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-md mx-auto text-center">

        {/* Error icon */}
        <div className="w-14 h-14 mx-auto rounded-full bg-red-50 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Failed to load titles
        </h2>
        <p className="text-sm text-muted mb-1 max-w-sm mx-auto">
          We couldn&apos;t reach TMDB. This is usually temporary.
        </p>
        {error.digest && (
          <p className="text-xs text-gray-400 mb-6">Error ID: {error.digest}</p>
        )}

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={reset}
            className="px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold
                       hover:bg-accent-hover transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-4 py-2.5 rounded-lg border border-border text-gray-700 text-sm
                       font-semibold hover:bg-gray-50 transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
