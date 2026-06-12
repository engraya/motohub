import Image from "next/image";
import Link from "next/link";

const SHOWCASE = [
  { posterPath: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg", name: "The Dark Knight", tag: "Action",   rating: "9.0" },
  { posterPath: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg", name: "Interstellar",    tag: "Sci-Fi",   rating: "8.6" },
  { posterPath: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", name: "Inception",       tag: "Thriller", rating: "8.8" },
];

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieShowcase() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white dark:bg-[#0d0d1a]">

      {/* Ambient glow (invisible in light mode) */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[700px] h-[700px] rounded-full pointer-events-none opacity-0 dark:opacity-100"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full mb-4 border
                          bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/20">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              Popular Picks
            </span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white">
            Critically acclaimed films
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOWCASE.map(({ posterPath, name, tag, rating }) => (
            <div
              key={name}
              className="group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-default
                         border-gray-100 hover:border-violet-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.14)]
                         dark:border-white/5 dark:hover:border-violet-500/40 dark:hover:shadow-glow-sm"
            >
              <div className="relative h-[380px] w-full overflow-hidden bg-gray-100 dark:bg-[#12121f]">
                <Image
                  src={`${TMDB_IMAGE_BASE}${posterPath}`}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  alt={name}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Cinematic gradient overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(7,7,14,0.93) 0%, rgba(7,7,14,0.35) 45%, transparent 100%)",
                  }}
                />
                {/* Rating badge */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg
                             text-xs font-bold text-amber-400"
                  style={{
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(251,191,36,0.3)",
                  }}
                >
                  ★ {rating}
                </div>
              </div>

              {/* Info overlay on poster */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between gap-2">
                  <span className="text-base font-bold text-white leading-tight">{name}</span>
                  <span
                    className="shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold text-white"
                    style={{
                      background: "rgba(124,58,237,0.7)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(124,58,237,0.4)",
                    }}
                  >
                    {tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/explore">
            <span className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer group
                             text-violet-600 hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300
                             transition-colors duration-200">
              Browse all movies
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
