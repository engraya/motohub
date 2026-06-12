import Link from "next/link";

const PREVIEW_MOVIES = [
  { name: "The Dark Knight", detail: "9.0 ★", genre: "Action" },
  { name: "Inception",       detail: "8.8 ★", genre: "Sci-Fi" },
  { name: "Interstellar",    detail: "8.6 ★", genre: "Drama" },
  { name: "Parasite",        detail: "8.5 ★", genre: "Thriller" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#07070e]">

      {/* Radial glow — subtle in light, prominent in dark */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(124,58,237,0.22) 0%, rgba(37,99,235,0.10) 45%, transparent 100%)",
        }}
      />

      {/* Grain texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.012] dark:opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">

        {/* Live badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border
                        bg-violet-50 border-violet-200
                        dark:bg-violet-500/10 dark:border-violet-500/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" aria-hidden />
          <span className="text-xs font-semibold tracking-wide text-violet-700 dark:text-violet-300">
            Powered by TMDB &nbsp;·&nbsp; 1M+ titles &nbsp;·&nbsp; Always free
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl lg:text-[88px] font-black tracking-tight leading-[1.02] mb-6">
          <span className="text-gray-900 dark:text-white">Discover your</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            next obsession.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-gray-500 dark:text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Search millions of movies and TV shows. Filter by genre, year, and rating.
          No signup. No paywalls. Just cinema.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
          <Link href="/explore">
            <span
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold
                         text-white cursor-pointer transition-all duration-200
                         hover:scale-[1.04] hover:brightness-110 animate-glow-pulse"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                boxShadow: "0 0 30px rgba(124,58,237,0.45), 0 4px 20px rgba(0,0,0,0.25)",
              }}
            >
              Browse Films
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>

          <a
            href="https://github.com/Engraya/cinehub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold
                       transition-all duration-200 border
                       bg-white border-gray-200 text-gray-700 hover:bg-gray-50
                       dark:bg-white/5 dark:border-white/10 dark:text-slate-300
                       dark:hover:bg-white/10 dark:hover:border-white/20 dark:hover:text-white"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Movie preview chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {PREVIEW_MOVIES.map((movie) => (
            <div
              key={movie.name}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm cursor-default
                         transition-all duration-200 border
                         bg-white border-gray-200 hover:border-violet-300 hover:bg-violet-50
                         dark:bg-white/5 dark:border-white/10
                         dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10"
            >
              <span className="font-semibold text-gray-900 dark:text-white">{movie.name}</span>
              <span className="text-gray-300 dark:text-slate-600" aria-hidden>&middot;</span>
              <span className="font-medium text-amber-500 dark:text-amber-400">{movie.detail}</span>
              <span className="text-gray-300 dark:text-slate-600" aria-hidden>&middot;</span>
              <span className="text-xs text-gray-400 dark:text-slate-500">{movie.genre}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade into stats bar */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none
                   bg-gradient-to-t from-white dark:from-[#07070e] to-transparent"
      />
    </section>
  );
}
