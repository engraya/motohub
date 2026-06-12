export type TMDBImageSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export function getTMDBImageUrl(
  path: string | null,
  size: TMDBImageSize = "w500"
): string | null {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE}/${size}${path}`;
}

export function getPosterUrl(path: string | null): string | null {
  return getTMDBImageUrl(path, "w342");
}

export function getBackdropUrl(path: string | null): string | null {
  return getTMDBImageUrl(path, "w780");
}
