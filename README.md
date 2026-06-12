<div align="center">

# 🎬 CineHub

### Your Ultimate Movie & TV Show Discovery Platform

**Explore, search, and discover movies and TV shows — instantly. No account required.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-2-6e9f18?style=flat-square&logo=vitest)](https://vitest.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](./LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)]()
[![TMDB](https://img.shields.io/badge/Powered_by-TMDB-01B4E4?style=flat-square&logo=themoviedatabase)](https://www.themoviedb.org/)

<br />

[**Live Demo**](https://github.com/engraya/cinehub) · [**Report Bug**](https://github.com/engraya/cinehub/issues) · [**Request Feature**](https://github.com/engraya/cinehub/issues)

</div>

---

## Overview

CineHub is a production-grade movie and TV show discovery platform that gives users instant access to real-time content data — with zero sign-up friction.

The platform is powered by [The Movie Database (TMDB)](https://www.themoviedb.org/) and surfaces everything users need: ratings, release dates, overviews, genre tags, and poster art — in one clean, fast interface.

**Who it's for:**
- Film and TV enthusiasts looking for their next watch
- Developers exploring Next.js 14 App Router patterns with real-world API integration
- Recruiters evaluating production-quality TypeScript and React work

---

## Features

### Core Features
- **Real-Time Search** — Query live movie and TV data from TMDB; results reflect the actual API response, not a static mock.
- **Media Type Toggle** — Switch between movies and TV shows without losing your current search or filters.
- **Multi-Parameter Filtering** — Filter by genre, release year, and sort order independently or in combination.
- **URL-Driven State** — All filters are encoded as URL search parameters. Every result set is shareable, bookmarkable, and back-navigable.
- **Progressive Pagination** — Load more results without a full page reload, preserving all active filters.

### Performance
- **React Server Components** — The explore page fetches data on the server; only interactive islands ship JavaScript to the browser.
- **Skeleton Loading States** — Purpose-built shimmer skeletons mirror the exact layout of live cards, preventing cumulative layout shift during data fetches.
- **Next.js Image Optimization** — Poster and backdrop images are served through the Next.js image pipeline with lazy loading, automatic WebP conversion, and responsive sizing.

### User Experience
- **Zero Friction** — No account creation, no email, no paywall.
- **Error Recovery** — A dedicated error boundary on the explore page provides contextual messaging and a one-click retry.
- **Responsive Design** — Layout adapts from a single-column mobile view to a multi-column desktop grid.
- **Dark Mode** — Full light/dark theme support via `next-themes`.

### Developer Experience
- **Strict TypeScript** — End-to-end type safety across API responses, component props, and utility functions.
- **Modular Architecture** — Clean separation between server data fetching, API proxy routes, URL utilities, and UI components.
- **Unit Test Suite** — Tests across utilities, API layer, and UI components using Vitest + React Testing Library.
- **Path Aliases** — `@/*` root alias eliminates relative import ladders.

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Routing, SSR, API routes |
| **Language** | TypeScript 5 | Type safety, developer tooling |
| **UI Library** | React 18 | Component model, hooks |
| **Styling** | Tailwind CSS 3 | Utility-first design system |
| **UI Primitives** | Headless UI 2 | Accessible dropdowns and dialogs |
| **Data API** | TMDB (The Movie Database) | Live movie and TV data |
| **Theme** | next-themes | Light/dark mode |
| **Testing** | Vitest 2 + React Testing Library | Unit and component tests |
| **Test Environment** | jsdom | DOM simulation for browser-like tests |
| **Linting** | ESLint (Next.js config) | Code quality enforcement |

---

## Architecture

### Folder Structure

```
cinehub/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout: NavigationBar + Footer
│   ├── page.tsx                  # Landing page (Home)
│   ├── globals.css               # Global styles
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── explore/
│   │   ├── page.tsx              # Server component: data fetching + grid
│   │   ├── loading.tsx           # Suspense fallback: shimmer skeleton grid
│   │   └── error.tsx             # Error boundary: retry + navigation
│   └── api/
│       └── movies/
│           └── route.ts          # GET /api/movies — TMDB proxy
│
├── components/
│   ├── movie/                    # MovieCard, MovieDetails, ShowMore
│   ├── landing/                  # HeroSection, CTASection, LandingPage
│   ├── layout/                   # NavigationBar, Footer
│   ├── search/                   # Searchbar, CustomFilter
│   └── ui/                       # CustomButton, MovieSkeleton, SquigglyLines
│
├── lib/
│   ├── api/
│   │   └── movies.ts             # fetchMovies() + normaliseMovie()
│   └── utils/
│       ├── image.ts              # TMDB image URL builder
│       └── url.ts                # URL search param builders/removers
│
├── constants/                    # Genres, years, sort options, footer links
├── types/
│   ├── movie.ts                  # MovieProps, MovieFilterProps, TMDB types
│   └── ui.ts                     # Component prop types
├── config/
│   ├── site.ts                   # Site metadata, URLs, creator info
│   └── navigation.ts             # Nav link definitions
└── hooks/                        # useMounted, useLocalStorage, useLockBody
```

### Data Flow

```
User Input (Search / Filter)
        │
        ▼
URL Search Params  ──────────────────────── (client-side navigation)
        │
        ▼
Explore Page (Server Component)
  └── fetchMovies()  ←── reads searchParams
        │
        ▼
  /api/movies (route handler)
        │
        ▼
  TMDB API  ←── TMDB_API_KEY (server-only)
        │
        ▼
  MovieCard Grid (Server)
  └── MovieCard → MovieDetails Dialog (client)
        │
        ▼
  image.tmdb.org (poster / backdrop images)
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** (or yarn / pnpm)
- A [TMDB API key](https://www.themoviedb.org/settings/api) (free account)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/engraya/cinehub.git
cd cinehub

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Add your TMDB_API_KEY to .env

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run test` | Run the full test suite once |
| `npm run test:watch` | Run tests in interactive watch mode |
| `npm run lint` | Run ESLint across the project |

---

## Environment Variables

Create a `.env` file in the project root. A template is provided as `.env.example`.

```env
# Required. Server-side only — never exposed to the browser.
# Obtain from: https://www.themoviedb.org/settings/api
TMDB_API_KEY=your_tmdb_api_key_here
```

> **Security note:** `TMDB_API_KEY` is used exclusively in server-side code (`app/api/movies/route.ts`) and is never bundled into the client JavaScript.

---

## API Reference

### `GET /api/movies`

A server-side proxy that forwards requests to TMDB and returns normalised JSON.

**Query Parameters**

| Parameter | Type | Description |
|---|---|---|
| `query` | `string` | Free-text search query |
| `genre` | `string` | TMDB genre ID |
| `year` | `string` | Release/air year |
| `sortBy` | `string` | Sort order (e.g. `popularity.desc`) |
| `mediaType` | `"movie" \| "tv"` | Content type (default: `movie`) |
| `page` | `string` | Result page number |

**Example Request**

```http
GET /api/movies?query=inception&mediaType=movie&page=1
```

**Error Responses**

| Status | Cause |
|---|---|
| `500` | `TMDB_API_KEY` environment variable is not configured |
| `4xx / 5xx` | Upstream TMDB error — status code is passed through |

---

## Deployment

### Vercel (Recommended)

CineHub is designed for zero-config deployment on Vercel.

```bash
npm i -g vercel
vercel --prod
```

Set `TMDB_API_KEY` in the Vercel dashboard under **Settings → Environment Variables**.

### Other Platforms

```bash
npm run build
npm run start   # Listens on PORT env var, defaults to 3000
```

Compatible platforms: **Railway**, **Render**, **Fly.io**, **DigitalOcean App Platform**.

---

## Contributing

```bash
# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/cinehub.git
cd cinehub

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Install and verify
npm install && npm run test

# 4. Make changes, then confirm everything passes
npm run test && npm run lint

# 5. Commit and open a pull request
git commit -m "feat: your feature description"
git push origin feature/your-feature-name
```

---

## License

MIT © [Engraya](https://github.com/engraya)
