"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { MovieProps } from "@/types/movie";
import { GENRE_MAP } from "@/constants";
import { getPosterUrl } from "@/lib/utils/image";
import MovieDetails from "./MovieDetails";
import CustomButton from "@/components/ui/CustomButton";

function MovieCard({ movie }: { movie: MovieProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const posterUrl = getPosterUrl(movie.posterPath);
  const year = movie.releaseDate?.slice(0, 4) ?? "";

  const ratingColor =
    movie.voteAverage >= 7
      ? "bg-green-500"
      : movie.voteAverage >= 5
      ? "bg-yellow-500"
      : "bg-red-500";

  const genreTags = movie.genreIds
    .slice(0, 3)
    .map((id) => GENRE_MAP.get(id))
    .filter(Boolean) as string[];

  return (
    <div className="car-card group flex flex-col">
      {/* Poster */}
      <div className="relative w-full h-[280px] overflow-hidden rounded-t-xl bg-slate-800">
        {posterUrl ? (
          <Image
            src={posterUrl}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          </div>
        )}

        {/* Rating badge */}
        <div
          className={`absolute right-2 top-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold text-white ${ratingColor}`}
        >
          ★ {movie.voteAverage.toFixed(1)}
        </div>

        {/* Year badge */}
        {year && (
          <div className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">
            {year}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="line-clamp-2 text-base font-semibold text-gray-900 dark:text-white">
          {movie.title}
        </h2>

        {genreTags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {genreTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="line-clamp-3 flex-1 text-sm text-gray-500 dark:text-gray-400">
          {movie.overview || "No description available."}
        </p>

        <CustomButton
          title="View Details"
          containerStyles="w-full mt-2"
          handleClick={() => setIsOpen(true)}
          variant="primary"
        />
      </div>

      <MovieDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        movie={movie}
      />
    </div>
  );
}

export default memo(MovieCard);
