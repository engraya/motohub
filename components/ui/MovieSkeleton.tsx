export default function MovieSkeleton() {
  return (
    <div className="car-card flex flex-col">
      {/* Poster skeleton */}
      <div className="relative h-[280px] w-full animate-shimmer rounded-t-xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />

      {/* Body skeleton */}
      <div className="flex flex-col gap-3 p-4">
        <div className="h-5 w-3/4 animate-shimmer rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
        <div className="flex gap-2">
          <div className="h-4 w-14 animate-shimmer rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
          <div className="h-4 w-14 animate-shimmer rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full animate-shimmer rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
          <div className="h-3 w-5/6 animate-shimmer rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
          <div className="h-3 w-4/6 animate-shimmer rounded bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
        </div>
        <div className="mt-2 h-9 w-full animate-shimmer rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
      </div>
    </div>
  );
}
