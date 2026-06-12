import type { GenreProps } from "@/types/movie";
import type { OptionProps } from "@/types/ui";

export const MOVIE_GENRES: GenreProps[] = [
  { id: 28,    name: "Action" },
  { id: 12,    name: "Adventure" },
  { id: 16,    name: "Animation" },
  { id: 35,    name: "Comedy" },
  { id: 80,    name: "Crime" },
  { id: 99,    name: "Documentary" },
  { id: 18,    name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14,    name: "Fantasy" },
  { id: 36,    name: "History" },
  { id: 27,    name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648,  name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878,   name: "Sci-Fi" },
  { id: 53,    name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37,    name: "Western" },
];

export const GENRE_MAP: Map<number, string> = new Map(
  MOVIE_GENRES.map((g) => [g.id, g.name])
);

export const genreOptions: OptionProps[] = [
  { title: "All Genres", value: "" },
  ...MOVIE_GENRES.map((g) => ({ title: g.name, value: String(g.id) })),
];

export const yearOptions: OptionProps[] = [
  { title: "All Years", value: "" },
  ...Array.from({ length: 26 }, (_, i) => {
    const year = 2025 - i;
    return { title: String(year), value: String(year) };
  }),
];

export const sortOptions: OptionProps[] = [
  { title: "Popularity",   value: "popularity.desc" },
  { title: "Top Rated",    value: "vote_average.desc" },
  { title: "Release Date", value: "release_date.desc" },
];

export const mediaTypeOptions: OptionProps[] = [
  { title: "Movies",   value: "movie" },
  { title: "TV Shows", value: "tv" },
];

export const footerLinks = [
  {
    title: "Discover",
    links: [
      { title: "Popular Movies", url: "/explore?sortBy=popularity.desc" },
      { title: "Top Rated",      url: "/explore?sortBy=vote_average.desc" },
      { title: "TV Shows",       url: "/explore?mediaType=tv" },
      { title: "By Genre",       url: "/explore" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About",   url: "/about" },
      { title: "Blog",    url: "/" },
      { title: "Discord", url: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy",    url: "/" },
      { title: "Terms of Use",      url: "/" },
      { title: "TMDB Attribution",  url: "https://www.themoviedb.org" },
    ],
  },
];
