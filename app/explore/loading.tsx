import MovieSkeleton from "@/components/ui/MovieSkeleton";

export default function ExploreLoading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page header skeleton */}
      <div className="mb-6 space-y-2">
        <div className="h-7 w-48 rounded shimmer" />
        <div className="h-4 w-36 rounded shimmer" />
      </div>

      {/* Search bar skeleton */}
      <div className="mb-8 space-y-3">
        <div className="h-14 w-full max-w-2xl rounded-xl shimmer" />
        <div className="flex gap-2">
          <div className="h-9 w-36 rounded-lg shimmer" />
          <div className="h-9 w-28 rounded-lg shimmer" />
          <div className="h-9 w-28 rounded-lg shimmer" />
          <div className="h-9 w-24 rounded-lg shimmer" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <MovieSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}
