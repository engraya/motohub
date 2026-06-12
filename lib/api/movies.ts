import type {
  MovieProps,
  MovieFilterProps,
  TMDBMovieItem,
  TMDBTVItem,
  TMDBResponse,
  MediaType,
} from "@/types/movie";

export interface FetchMoviesResult {
  movies: MovieProps[];
  totalPages: number;
  totalResults: number;
  page: number;
}

export function normaliseMovie(
  item: TMDBMovieItem | TMDBTVItem,
  mediaType: MediaType
): MovieProps {
  const isTV = mediaType === "tv";
  const tv = item as TMDBTVItem;
  const mv = item as TMDBMovieItem;
  return {
    id: item.id,
    title: isTV ? tv.name : mv.title,
    overview: item.overview,
    posterPath: item.poster_path,
    backdropPath: item.backdrop_path,
    voteAverage: item.vote_average,
    voteCount: item.vote_count,
    releaseDate: isTV ? tv.first_air_date : mv.release_date,
    genreIds: item.genre_ids,
    popularity: item.popularity,
    originalLanguage: item.original_language,
    mediaType,
  };
}

export async function fetchMovies(
  filters: MovieFilterProps
): Promise<FetchMoviesResult> {
  const qs = new URLSearchParams();
  if (filters.query)     qs.set("query", filters.query);
  if (filters.genre)     qs.set("genre", filters.genre);
  if (filters.year)      qs.set("year", filters.year);
  if (filters.sortBy)    qs.set("sortBy", filters.sortBy);
  if (filters.mediaType) qs.set("mediaType", filters.mediaType);
  if (filters.page)      qs.set("page", filters.page);

  const res = await fetch(`/api/movies?${qs}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch movies (${res.status})`);

  const data: TMDBResponse<TMDBMovieItem | TMDBTVItem> = await res.json();
  if (!Array.isArray(data?.results)) throw new Error("Unexpected response format");

  const mediaType: MediaType = (filters.mediaType ?? "movie");
  const movies = data.results.map((item) => normaliseMovie(item, mediaType));

  return {
    movies,
    totalPages: data.total_pages,
    totalResults: data.total_results,
    page: data.page,
  };
}
