"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ShowMoreProps } from "@/types/ui";
import { buildSearchUrl } from "@/lib/utils/url";
import CustomButton from "@/components/ui/CustomButton";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!isNext) return null;

  const handleLoadMore = () => {
    const nextPage = pageNumber + 1;
    const newUrl = buildSearchUrl(
      pathname,
      searchParams,
      "page",
      String(nextPage)
    );
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <CustomButton
        title="Load More"
        handleClick={handleLoadMore}
        variant="secondary"
        containerStyles="px-8"
      />
    </div>
  );
}
