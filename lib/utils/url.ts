/**
 * SSR-safe URL parameter helpers.
 * Accept a ReadonlyURLSearchParams (from useSearchParams) or URLSearchParams
 * instead of reading window.location, so they work in both server and client
 * contexts.
 */

export function buildSearchUrl(
  pathname: string,
  currentParams: { toString(): string },
  type: string,
  value: string
): string {
  const next = new URLSearchParams(currentParams.toString());
  next.set(type, value);
  return `${pathname}?${next.toString()}`;
}

export function removeSearchParam(
  pathname: string,
  currentParams: { toString(): string },
  type: string
): string {
  const next = new URLSearchParams(currentParams.toString());
  next.delete(type.toLowerCase());
  return `${pathname}?${next.toString()}`;
}
