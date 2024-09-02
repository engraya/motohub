"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import * as React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";
import { navCar } from "@/public";

// Define types
type DefaultNavbarProps = {
  mainNav: any[];
  showProfileAndPrompts: boolean; // New prop to control visibility
};


export const DefaultNavbar = ({ mainNav, showProfileAndPrompts }: DefaultNavbarProps) => {

  const filteredNav = showProfileAndPrompts
    ? mainNav
    : mainNav.filter(item => item.title !== "Profile" && item.title !== "Prompts");

  return (
    <section className="w-full flex md:justify-evenly md:items-center py-1">
      <div className="lg:hidden mr-2 flex items-center">
      </div>
      <Link href="/" className="md:hidden ml-1 flex justify-center items-center">
      <Image src={navCar} alt="logo" width={40} height={40} />
      <div className="no-underline hover:no-underline bg-gradient-to-r from-pink-500 to-green-500 bg-clip-text text-2xl font-extrabold text-transparent lg:text-2xl">
            MotoHub
          </div>
      </Link>
      <div className="hidden md:flex w-full justify-between gap-12 items-center">
        {filteredNav.map((item, idx) => (
          <Link
            key={item.href}
            href={item.disabled ? "#" : item.href}
            className=
              "flex items-center text-xl font-bold text-white dark:border-blue-500 border-emerald-600 hover:border-b-4 hover:border-emerald-600 rounded-b-md transition-colors hover:text-foreground/80 sm:text-sm"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
};
