/**
 * Re-exports for backward compatibility.
 * New code should import directly from @/lib/utils/* or @/lib/api/*.
 */
export { buildSearchUrl as updateSearchParams, removeSearchParam as deleteSearchParams } from "@/lib/utils/url";
export { getTMDBImageUrl, getPosterUrl, getBackdropUrl } from "@/lib/utils/image";
export { fetchMovies } from "@/lib/api/movies";
