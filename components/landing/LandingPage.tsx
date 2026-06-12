import HeroSection from "./HeroSection";
import MovieShowcase from "./MovieShowcase";
import CTASection from "./CTASection";

const STATS = [
  { value: "1M+",  label: "Movies & Shows" },
  { value: "18",   label: "Genres" },
  { value: "Live", label: "Real-time Data" },
  { value: "Free", label: "No Signup" },
];

const FEATURES = [
  {
    title: "Smart Title Search",
    desc: "Search any movie or TV show by title. Results update instantly from the TMDB database.",
    icon: (
      <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
  },
  {
    title: "Genre & Year Filters",
    desc: "Filter by any of 18 genres, release year (2000–2025), and sort by popularity or rating.",
    icon: (
      <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Detailed Film Info",
    desc: "Every title opens a full detail view: rating, vote count, genres, release date, language, and more.",
    icon: (
      <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
];

function StatsBar() {
  return (
    <div className="border-y border-gray-100 dark:border-white/5 bg-white dark:bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100 dark:divide-white/5">
          {STATS.map(({ value, label }) => (
            <div key={label} className="py-8 px-4 lg:px-8 text-center">
              <p
                className="text-3xl font-black"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {value}
              </p>
              <p className="text-sm font-medium text-gray-400 dark:text-slate-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full mb-4 border
                          bg-violet-50 border-violet-200 dark:bg-violet-500/10 dark:border-violet-500/25">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-400">
              How it works
            </span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
            Everything you need to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              find great films
            </span>
          </h2>
        </div>

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
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <MovieShowcase />
      <CTASection />
    </div>
  );
}
