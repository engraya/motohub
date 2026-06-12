import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gray-50 dark:bg-[#07070e]">

      {/* Radial glow (subtle in light, full in dark) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% 50%, rgba(124,58,237,0.18) 0%, rgba(37,99,235,0.08) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-3xl p-10 lg:p-16 border
                        bg-white border-gray-200 shadow-xl
                        dark:border-violet-500/20 dark:shadow-none">
          {/* Override background in dark via a wrapping trick using a pseudo-layer */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 dark:opacity-100"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(37,99,235,0.06) 100%)",
            }}
            aria-hidden
          />

          {/* Icon */}
          <div className="relative w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-6
                          bg-violet-100 border border-violet-200
                          dark:bg-violet-900/30 dark:border-violet-500/30">
            <svg className="w-6 h-6 text-violet-600 dark:text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5A1.125 1.125 0 0018 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-9.75 0h9.75" />
            </svg>
          </div>

          <h2 className="relative text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            Ready to discover something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              extraordinary?
            </span>
          </h2>

          <p className="relative text-gray-500 dark:text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            Free forever. No account needed. Millions of films and TV shows at your fingertips.
          </p>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/explore">
              <span
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold
                           text-white cursor-pointer transition-all duration-200
                           hover:scale-[1.04] hover:brightness-110 animate-glow-pulse"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                  boxShadow: "0 0 30px rgba(124,58,237,0.45), 0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                Browse Movies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link href="/explore?mediaType=tv">
              <span className="inline-flex items-center gap-2.5 text-sm font-semibold cursor-pointer
                               transition-colors duration-200
                               text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                Explore TV Shows
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
