export type MediaType = "movie" | "tv";

export interface TMDBMovieItem {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  release_date: string;
  genre_ids: number[];
  popularity: number;
  original_language: string;
  adult: boolean;
}

export interface TMDBTVItem {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  genre_ids: number[];
  popularity: number;
  original_language: string;
}

export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  genreIds: number[];
  popularity: number;
  originalLanguage: string;
  mediaType: MediaType;
}

export interface GenreProps {
  id: number;
  name: string;
}

export interface MovieFilterProps {
  query?: string;
  genre?: string;
  year?: string;
  sortBy?: string;
  mediaType?: MediaType;
  page?: string;
}
