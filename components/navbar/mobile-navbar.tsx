import * as React from "react";
import Link from "next/link";
import { useLockBody } from "@/hooks/use-lock-body";

import { navCar } from "@/public";
export function MobileNav() {
  useLockBody();

  return (
    <div className="relative grid gap-6 rounded-md bg-popover p-4 text-popover-foreground">
      <nav className="grid grid-flow-row auto-rows-max text-sm">
      <p>Hello</p>     
      </nav>
    </div>
  );
}

const NavMenu = ({ item }: { item: any }) => {
  return (
    <div className="translate-x-4">
      <Link
        href={item.href}
        className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline
          cursor-not-allowed opacity-60">
        <p>{item.title}</p>
        <p>Hello</p>
      </Link>
    </div>
  );
};
