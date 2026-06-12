"use client";

import { Fragment } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { MovieProps } from "@/types/movie";
import { GENRE_MAP } from "@/constants";
import { getBackdropUrl, getPosterUrl } from "@/lib/utils/image";

interface MovieDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  movie: MovieProps;
}

function getLanguageName(code: string): string {
  try {
    return new Intl.DisplayNames(["en"], { type: "language" }).of(code) ?? code;
  } catch {
    return code;
  }
}

export default function MovieDetails({
  isOpen,
  closeModal,
  movie,
}: MovieDetailsProps) {
  const backdropUrl = getBackdropUrl(movie.backdropPath);
  const posterUrl = getPosterUrl(movie.posterPath);
  const year = movie.releaseDate?.slice(0, 4) ?? "";

  const genreNames = movie.genreIds
    .map((id) => GENRE_MAP.get(id))
    .filter(Boolean) as string[];

  const releaseDateLabel =
    movie.mediaType === "tv" ? "First Air Date" : "Release Date";

  const formattedDate = movie.releaseDate
    ? new Date(movie.releaseDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-900">
                {/* Backdrop header */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                  {backdropUrl ? (
                    <Image
                      src={backdropUrl}
                      alt={movie.title}
                      fill
                      className="object-cover"
                      sizes="768px"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-900" />
                  )}

                  {/* Poster thumbnail overlaid */}
                  {posterUrl && (
                    <div className="absolute bottom-4 left-6 h-28 w-20 overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={posterUrl}
                        alt={movie.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  )}

                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                  >
                    ✕
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {movie.title}
                      {year && (
                        <span className="ml-2 text-lg font-normal text-gray-400">
                          ({year})
                        </span>
                      )}
                    </h2>
                  </div>

                  {/* Rating row */}
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 font-semibold text-yellow-500">
                      ★ {movie.voteAverage.toFixed(1)}
                      <span className="font-normal text-gray-400 dark:text-gray-500">
                        / 10 ({movie.voteCount.toLocaleString()} votes)
                      </span>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {releaseDateLabel}: {formattedDate}
                    </span>
                  </div>

                  {/* Genre pills */}
                  {genreNames.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {genreNames.map((name) => (
                        <span
                          key={name}
                          className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Overview */}
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {movie.overview || "No description available."}
                  </p>

                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-4 text-sm dark:bg-gray-800">
                    <div>
                      <span className="font-semibold text-gray-500 dark:text-gray-400">
                        Language
                      </span>
                      <p className="mt-0.5 text-gray-900 dark:text-white">
                        {getLanguageName(movie.originalLanguage)}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-500 dark:text-gray-400">
                        Popularity
                      </span>
                      <p className="mt-0.5 text-gray-900 dark:text-white">
                        {Math.round(movie.popularity).toLocaleString()} pts
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-500 dark:text-gray-400">
                        Type
                      </span>
                      <p className="mt-0.5 capitalize text-gray-900 dark:text-white">
                        {movie.mediaType === "tv" ? "TV Show" : "Movie"}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-500 dark:text-gray-400">
                        Vote Count
                      </span>
                      <p className="mt-0.5 text-gray-900 dark:text-white">
                        {movie.voteCount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
