"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { CustomFilterProps } from "@/types/ui";
import { buildSearchUrl } from "@/lib/utils/url";

export default function CustomFilter({ title, options, paramKey }: CustomFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const key = paramKey ?? title.toLowerCase();
  const urlValue = searchParams.get(key);
  const currentValue = urlValue ?? options[0].value;
  const isActive = urlValue !== null && urlValue !== options[0].value;
  const selectedTitle =
    options.find((o) => o.value === currentValue)?.title ?? options[0].title;

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  const handleSelect = (value: string) => {
    setIsOpen(false);
    router.push(buildSearchUrl(pathname, searchParams, key, value));
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
        <ul
          className="animate-slide-down absolute left-0 top-full z-50 mt-1.5 min-w-full w-max
                     max-h-64 overflow-y-auto rounded-xl border border-border bg-white py-1
                     shadow-card-hover dark:bg-slate-800"
        >
          {options.map((option) => {
            const isSelected = option.value === currentValue;
            return (
              <li key={option.value}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(option.value)}
                  className={[
                    "flex w-full items-center justify-between gap-6 px-4 py-2.5 text-sm",
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
          })}
        </ul>
      )}
    </div>
  );
}
