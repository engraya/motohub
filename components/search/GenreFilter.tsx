"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { genreOptions } from "@/constants";
import { buildSearchUrl } from "@/lib/utils/url";

export default function GenreFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const urlValue = searchParams.get("genre");
  const currentValue = urlValue ?? "";
  const isActive = !!urlValue && urlValue !== "";
  const selectedTitle =
    genreOptions.find((o) => o.value === currentValue)?.title ?? genreOptions[0].title;

  const filtered =
    query === ""
      ? genreOptions
      : genreOptions.filter((o) => o.title.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 10);
  }, [isOpen]);

  const handleSelect = (value: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(buildSearchUrl(pathname, searchParams, "genre", value));
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className={[
          "w-full flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium",
          "transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
          isActive
            ? "border-accent bg-blue-50 text-accent dark:bg-blue-950/40 dark:border-accent"
            : "border-border bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-700",
        ].join(" ")}
      >
        <span className="truncate">{selectedTitle}</span>
        <svg
          className={`h-4 w-4 shrink-0 transition-transform duration-150 ${
            isActive ? "text-accent" : "text-muted"
          } ${isOpen ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="animate-slide-down absolute left-0 top-full z-50 mt-1.5 w-60
                     rounded-xl border border-border bg-white shadow-card-hover dark:bg-slate-800"
        >
          {/* Search input */}
          <div className="p-2 border-b border-border">
            <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 dark:bg-slate-700/80">
              <svg className="h-3.5 w-3.5 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.65 16.65 7.5 7.5 0 0016.65 16.65z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search genres…"
                className="w-full bg-transparent py-2 text-sm text-gray-900 placeholder:text-gray-400
                           focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Options */}
          <ul className="max-h-52 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-sm text-muted">No genres found.</li>
            ) : (
              filtered.map((option) => {
                const isSelected = option.value === currentValue;
                return (
                  <li key={option.value}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => handleSelect(option.value)}
                      className={[
                        "flex w-full items-center justify-between px-4 py-2.5 text-sm",
                        "transition-colors hover:bg-gray-50 dark:hover:bg-slate-700",
                        isSelected
                          ? "font-semibold text-accent"
                          : "font-normal text-gray-900 dark:text-slate-100",
                      ].join(" ")}
                    >
                      <span>{option.title}</span>
                      {isSelected && (
                        <svg className="h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
