# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # ESLint checks
npm run test         # Run tests once (Vitest)
npm run test:watch   # Run tests in watch mode
```

To run a single test file: `npx vitest run <path/to/file.test.tsx>`

## Environment Variables

One variable is required (see `.env.example`):

- `TMDB_API_KEY` — server-side only, for The Movie Database (TMDB) API (`api.themoviedb.org`)

## Architecture

**CineHub** is a Next.js 14 App Router movie and TV show discovery platform. Users search and filter content by title, genre, year, sort order, and media type (movie vs. TV); results come from a proxied TMDB endpoint.

### Request flow

1. User interacts with search/filter UI → URL search params update (via `lib/utils/url.ts`)
2. `app/explore/page.tsx` reads params server-side and calls `fetchMovies()` (`lib/api/movies.ts`)
3. `fetchMovies` hits the internal route `app/api/movies/route.ts`, which proxies to TMDB with caching
4. Movie poster/backdrop images are served directly from `image.tmdb.org`

### Key directories

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router pages (`/`, `/explore`, `/about`) and API route |
| `app/api/movies/route.ts` | Server-side proxy to TMDB; handles key validation and errors |
| `components/movie/` | `MovieCard`, `MovieDetails`, `ShowMore` |
| `components/landing/` | `HeroSection`, `CTASection`, `LandingPage` |
| `components/search/` | `Searchbar`, `CustomFilter` |
| `components/layout/` | `NavigationBar`, `Footer` |
| `components/ui/` | `CustomButton`, `MovieSkeleton`, `SquigglyLines` |
| `lib/api/movies.ts` | `fetchMovies()` client-side wrapper + `normaliseMovie()` |
| `lib/utils/` | `url.ts` (search params), `image.ts` (TMDB image URLs) |
| `constants/` | Static lists: genres, years, sort options, footer links |
| `types/movie.ts` | `MovieProps`, `MovieFilterProps`, `TMDBMovieItem`, `TMDBTVItem`, `MediaType` |
| `types/ui.ts` | Component prop types |
| `config/navigation.ts` | Nav menu items |
| `config/site.ts` | Site metadata and creator info |
| `hooks/` | `useMounted` (SSR hydration), `useLocalStorage`, `useLockBody` |

### Data model

Core type is `MovieProps` (from `types/movie.ts`): `id`, `title`, `overview`, `posterPath`, `backdropPath`, `voteAverage`, `voteCount`, `releaseDate`, `genreIds`, `popularity`, `originalLanguage`, `mediaType`.

Filters use `MovieFilterProps`: `query`, `genre`, `year`, `sortBy`, `mediaType`, `page`.

### Styling

Tailwind CSS with custom design tokens:
- Custom animations: `shimmer`, `fade-up`, `slide-down`
- Card box shadows with hover states defined in `tailwind.config.ts`

### Testing

Vitest + React Testing Library with jsdom. Tests live alongside source files (`*.test.tsx`). Path alias `@/` resolves to the project root.
