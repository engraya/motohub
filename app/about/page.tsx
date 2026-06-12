import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    title: "Discover Millions of Titles",
    desc: "CineHub gives you access to over a million movies and TV shows via TMDB. Browse by genre, year, language, or popularity — all in one fast interface.",
    icon: (
      <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Powerful Genre Filters",
    desc: "Filter across 18 movie genres and TV categories. Combine genre with year and sort order to zero in on exactly what you want to watch.",
    icon: (
      <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Detailed Film Info",
    desc: "Every title opens a full detail view — ratings, vote counts, release date, original language, genres, and a full overview, all pulled live from TMDB.",
    icon: (
      <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

const STACK = ["Next.js 14", "TypeScript", "Tailwind CSS", "React 18", "Headless UI", "TMDB API"];
const FEATURED_POSTER = "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-[#07070e]">

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.2) 0%, rgba(37,99,235,0.08) 50%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border
                          bg-violet-50 border-violet-200 dark:bg-violet-500/10 dark:border-violet-500/25">
            <svg className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-400">
              About CineHub
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5">
            <span className="text-gray-900 dark:text-white">Built for</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #60a5fa 60%, #34d399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              film enthusiasts.
            </span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            A fast, free, no-login movie discovery platform — powered by TMDB
            and built with modern web technologies.
          </p>
        </div>

        {/* Fade into next section */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none
                     bg-gradient-to-t from-gray-50 dark:from-[#0a0a14] to-transparent"
        />
      </section>

      {/* ── Feature cards ── */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-[#0a0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="rounded-2xl p-7 border transition-all duration-300 cursor-default
                           bg-white border-gray-100 shadow-sm
                           hover:border-violet-200 hover:bg-violet-50/50 hover:shadow-md
                           dark:bg-white/5 dark:border-white/5 dark:shadow-none
                           dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                                bg-violet-100 border border-violet-200
                                dark:bg-violet-900/30 dark:border-violet-500/20">
                  {icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Creator + Poster ── */}
      <section className="py-16 lg:py-24 bg-white dark:bg-[#0d0d1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Creator card */}
            <div className="rounded-2xl p-8 border
                            bg-white border-gray-100 shadow-sm
                            dark:bg-white/5 dark:border-white/10 dark:shadow-none">
              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-black mb-5"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                  boxShadow: "0 0 25px rgba(124,58,237,0.4)",
                }}
              >
                E
              </div>

              <h3 className="text-xl font-black text-gray-900 dark:text-white">Engraya</h3>
              <p className="text-sm text-gray-400 dark:text-slate-500 mt-0.5 mb-5 font-medium">Fullstack Developer</p>

              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-7">
                CineHub is a portfolio project demonstrating full-stack skills in data fetching,
                server-side rendering, component architecture, type safety, and modern UI design.
              </p>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-2 mb-7">
                {STACK.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors
                               bg-violet-50 border-violet-200 text-violet-700
                               dark:bg-violet-500/10 dark:border-violet-500/20 dark:text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Link href="/explore">
                  <span
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold
                               text-white cursor-pointer transition-all duration-200
                               hover:scale-[1.03] hover:brightness-110"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                      boxShadow: "0 0 20px rgba(124,58,237,0.35)",
                    }}
                  >
                    Try CineHub
                  </span>
                </Link>
                <a
                  href="https://github.com/Engraya/cinehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold
                             border transition-all duration-200
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
            </div>

            {/* Movie poster */}
            <div
              className="relative h-[460px] rounded-2xl overflow-hidden
                         border border-gray-200 shadow-xl
                         dark:border-violet-500/25 dark:shadow-glow"
            >
              <Image
                src={FEATURED_POSTER}
                alt="The Dark Knight movie poster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Cinematic gradient overlay */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(7,7,14,0.88) 0%, rgba(7,7,14,0.15) 55%, transparent 100%)",
                }}
              />
              {/* Film info overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-white">The Dark Knight</span>
                  <span
                    className="px-2.5 py-1 rounded-lg text-xs font-bold text-amber-400"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(251,191,36,0.3)",
                    }}
                  >
                    ★ 9.0
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">2008 · Action · Christopher Nolan</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
