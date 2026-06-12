import Link from "next/link";

const NAV_LINKS = [
  { label: "Home",    href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About",   href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              <span className="text-base font-semibold text-gray-900 dark:text-slate-100">CineHub</span>
            </Link>
            <p className="text-sm text-muted max-w-[220px] leading-relaxed">
              Discover movies and TV shows, powered by TMDB.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex gap-6" aria-label="Footer navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted hover:text-gray-900 dark:hover:text-slate-100 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} CineHub. Built with Next.js &amp; TypeScript.
          </p>
          <p className="text-xs text-muted">
            Data via{" "}
            <a
              href="https://www.themoviedb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-slate-100 transition-colors underline underline-offset-2"
            >
              TMDB
            </a>
            {" "}— not endorsed by TMDB.
          </p>
        </div>
      </div>
    </footer>
  );
}
