"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { buildSearchUrl, removeSearchParam } from "@/lib/utils/url";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Enter a movie or TV show title.");
      return;
    }
    setError("");
    const next = new URLSearchParams(searchParams.toString());
    next.set("query", query.trim());
    next.delete("page");
    router.push(`${pathname}?${next.toString()}`);
  };

  const handleClear = () => {
    setQuery("");
    setError("");
    router.push(removeSearchParam(pathname, searchParams, "query"));
  };

  return (
    <div>
      <form onSubmit={handleSearch} noValidate>
        <div
          className="flex h-14 items-center overflow-hidden rounded-2xl border border-border
                     bg-white shadow-card transition-all duration-200
                     focus-within:border-accent focus-within:shadow-[0_0_0_3px_rgb(37_99_235/0.10)]
                     dark:bg-slate-800 dark:focus-within:shadow-[0_0_0_3px_rgb(37_99_235/0.20)]"
        >
          {/* Film icon */}
          <div className="flex shrink-0 items-center pl-4 pr-3 text-gray-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); if (error) setError(""); }}
            placeholder="Search movies, TV shows..."
            aria-label="Search movies or TV shows"
            className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 placeholder:text-gray-400
                       focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
          />

          {/* Clear */}
          {query && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              className="mr-1 shrink-0 rounded-lg p-1.5 text-gray-400 transition-colors
                         hover:bg-gray-100 hover:text-gray-600
                         dark:hover:bg-slate-700 dark:hover:text-slate-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Search button */}
          <button
            type="submit"
            className="flex h-full shrink-0 items-center gap-2 bg-accent px-5 text-sm
                       font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.65 16.65 7.5 7.5 0 0016.65 16.65z" />
            </svg>
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>

        {error && (
          <p role="alert" aria-live="polite" className="mt-2 flex items-center gap-1.5 text-xs text-danger">
            <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
