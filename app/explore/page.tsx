import { Suspense } from "react";
import Link from "next/link";
import SearchBar from "@/components/search/Searchbar";
import CustomFilter from "@/components/search/CustomFilter";
import GenreFilter from "@/components/search/GenreFilter";
import { yearOptions, sortOptions, mediaTypeOptions } from "@/constants";
import ShowMore from "@/components/movie/ShowMore";
import MovieCard from "@/components/movie/MovieCard";
import type {
  MovieProps,
  MovieFilterProps,
  TMDBMovieItem,
  TMDBTVItem,
  TMDBResponse,
  MediaType,
} from "@/types/movie";
import { normaliseMovie } from "@/lib/api/movies";

interface SearchParams {
  query?: string;
  genre?: string;
  year?: string;
  sortBy?: string;
  mediaType?: string;
  page?: string;
}

async function fetchMoviesServer(
  filters: MovieFilterProps
): Promise<{ movies: MovieProps[]; totalPages: number; totalResults: number }> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) throw new Error("TMDB_API_KEY is not configured");

  const mediaType = (filters.mediaType ?? "movie") as MediaType;
  const isSearch = Boolean(filters.query?.trim());
  const endpoint = isSearch
    ? `https://api.themoviedb.org/3/search/${mediaType}`
    : `https://api.themoviedb.org/3/discover/${mediaType}`;

  const params = new URLSearchParams({ api_key: apiKey, page: filters.page ?? "1" });

  if (isSearch) {
    params.set("query", filters.query!.trim());
  } else {
    if (filters.genre) params.set("with_genres", filters.genre);
    if (filters.year) {
      params.set(
        mediaType === "movie" ? "primary_release_year" : "first_air_date_year",
        filters.year
      );
    }
    params.set("sort_by", filters.sortBy ?? "popularity.desc");
  }

  const res = await fetch(`${endpoint}?${params}`, { next: { revalidate: 300 } });
  if (!res.ok) {
    const body = await res.text().catch(() => "(unreadable)");
    throw new Error(`TMDB API returned ${res.status}: ${body}`);
  }

  const data: TMDBResponse<TMDBMovieItem | TMDBTVItem> = await res.json();
  if (!Array.isArray(data?.results)) throw new Error("Unexpected TMDB response format");

  return {
    movies: data.results.map((item) => normaliseMovie(item, mediaType)),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
}

function FilterSkeleton() {
  return (
    <div className="mb-10 rounded-2xl border border-border bg-white shadow-card dark:bg-slate-800">
      <div className="p-4 sm:p-5">
        <div className="h-14 w-full animate-pulse rounded-xl bg-gray-100 dark:bg-slate-700" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-y divide-border border-t border-border sm:grid-cols-4 sm:divide-y-0">
        {["Genre", "Year", "Sort By", "Type"].map((label) => (
          <div key={label} className="p-4">
            <div className="mb-2 h-3 w-12 animate-pulse rounded-full bg-gray-100 dark:bg-slate-700" />
            <div className="h-10 w-full animate-pulse rounded-xl bg-gray-100 dark:bg-slate-700" />
          </div>
        ))}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 dark:bg-slate-700">
        <svg className="h-8 w-8 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
        </svg>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-slate-100">No titles found</h3>
      <p className="mb-6 max-w-xs text-sm text-muted">Try adjusting your search or filter criteria.</p>
      <Link
        href="/explore"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white
                   px-4 py-2 text-sm font-medium text-gray-700 shadow-card transition-colors
                   hover:bg-gray-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
      >
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        Clear all filters
      </Link>
    </div>
  );
}

export default async function ExploreMoviesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const filters: MovieFilterProps = {
    query: searchParams.query ?? "",
    genre: searchParams.genre ?? "",
    year: searchParams.year ?? "",
    sortBy: searchParams.sortBy ?? "popularity.desc",
    mediaType: (searchParams.mediaType as MediaType) ?? "movie",
    page: searchParams.page ?? "1",
  };

  const page = Number(filters.page);
  const { movies, totalPages, totalResults } = await fetchMoviesServer(filters);
  const isEmpty = movies.length === 0;
  const mediaLabel = filters.mediaType === "tv" ? "TV Shows" : "Movies";

  const hasActiveFilters = !!(
    searchParams.query ||
    searchParams.genre ||
    searchParams.year ||
    searchParams.sortBy ||
    searchParams.mediaType
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      {/* ── Page header ─────────────────────────────────────────────── */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl">
            Discover {mediaLabel}
          </h1>
          <p className="mt-1.5 text-sm text-muted">
            {totalResults.toLocaleString()} title{totalResults !== 1 ? "s" : ""}
            {searchParams.query ? (
              <> for{" "}
                <span className="font-semibold text-gray-900 dark:text-slate-100">
                  &quot;{searchParams.query}&quot;
                </span>
              </>
            ) : " available to browse"}
          </p>
        </div>

        {hasActiveFilters && (
          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 rounded-full border border-danger/25
                       bg-red-50 px-4 py-1.5 text-xs font-semibold text-danger transition-colors
                       hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-950/50"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear filters
          </Link>
        )}
      </div>

      {/* ── Search + Filter card ─────────────────────────────────────── */}
      <Suspense fallback={<FilterSkeleton />}>
        <div className="mb-10 rounded-2xl border border-border bg-white shadow-card dark:bg-slate-800">

          {/* Search row */}
          <div className="p-4 sm:p-5">
            <SearchBar />
          </div>

          {/* Filter grid — 2 cols on mobile, 4 cols on sm+ */}
          <div className="grid grid-cols-2 divide-x divide-y divide-border border-t border-border sm:grid-cols-4 sm:divide-y-0 dark:divide-slate-700 dark:border-slate-700">

            <div className="p-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Genre</p>
              <GenreFilter />
            </div>

            <div className="p-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Year</p>
              <CustomFilter title="Year" paramKey="year" options={yearOptions} />
            </div>

            <div className="p-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Sort By</p>
              <CustomFilter title="Sort By" paramKey="sortBy" options={sortOptions} />
            </div>

            <div className="p-4">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted">Type</p>
              <CustomFilter title="Type" paramKey="mediaType" options={mediaTypeOptions} />
            </div>

          </div>
        </div>
      </Suspense>

      {/* ── Results ──────────────────────────────────────────────────── */}
      {isEmpty ? (
        <EmptyState />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {movies.map((movie) => (
              <MovieCard key={`${movie.id}-${movie.mediaType}`} movie={movie} />
            ))}
          </div>
          <ShowMore pageNumber={page} isNext={page < totalPages} />
        </>
      )}
    </main>
  );
}
