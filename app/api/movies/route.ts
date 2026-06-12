import { NextRequest, NextResponse } from "next/server";
import type { TMDBResponse, TMDBMovieItem, TMDBTVItem } from "@/types/movie";

export async function GET(request: NextRequest) {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "TMDB_API_KEY is not configured" },
      { status: 500 }
    );
  }

  const { searchParams } = request.nextUrl;
  const query     = searchParams.get("query") ?? "";
  const genre     = searchParams.get("genre") ?? "";
  const year      = searchParams.get("year") ?? "";
  const sortBy    = searchParams.get("sortBy") ?? "popularity.desc";
  const mediaType = (searchParams.get("mediaType") ?? "movie") as "movie" | "tv";
  const page      = searchParams.get("page") ?? "1";

  const isSearch = Boolean(query.trim());
  const endpoint = isSearch
    ? `https://api.themoviedb.org/3/search/${mediaType}`
    : `https://api.themoviedb.org/3/discover/${mediaType}`;

  const params = new URLSearchParams({ api_key: apiKey, page });

  if (isSearch) {
    params.set("query", query.trim());
  } else {
    if (genre) params.set("with_genres", genre);
    if (year) {
      const yearKey = mediaType === "movie" ? "primary_release_year" : "first_air_date_year";
      params.set(yearKey, year);
    }
    params.set("sort_by", sortBy);
  }

  try {
    const upstream = await fetch(`${endpoint}?${params}`, {
      next: { revalidate: 300 },
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: `TMDB returned ${upstream.status}` },
        { status: upstream.status }
      );
    }

    const data: TMDBResponse<TMDBMovieItem | TMDBTVItem> = await upstream.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch from TMDB" },
      { status: 500 }
    );
  }
}
