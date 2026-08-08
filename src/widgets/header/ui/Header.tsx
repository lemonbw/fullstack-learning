"use client";
import Image from "next/image";
import Link from "next/link";
import whiteTitle from "@/src/shared/assets/images/book-card/white-title.svg";
import blackTitle from "@/src/shared/assets/images/book-card/black-title.svg";
import { useHeaderState } from "../model/useHeaderState";
import { Hamburger } from "./Hamburger";
import { Panel } from "./Panel";

export const Header = () => {
  const { isDark, hiddenHeader, hiddenNavigation, setHiddenNavigation } =
    useHeaderState();

  return (
    <header
      className={`fixed z-10 flex h-[3.5rem] w-full items-center justify-between bg-white px-2 duration-300 lg:static lg:mt-5 lg:block lg:h-[15vh] lg:duration-500 dark:bg-black ${hiddenHeader ? "-translate-y-full" : "translate-y-0"} lg:translate-y-0`}
    >
      <Link
        href="/"
        className="top-0 left-2 z-10 flex h-[2.5rem] items-center justify-center lg:mt-10"
      >
        <h1 className="relative -ml-5 h-10 w-65 lg:ml-0 lg:h-15 lg:w-180">
          <span className="sr-only">The World We Knew</span>
          <Image
            src={isDark ? whiteTitle : blackTitle}
            alt="The World We Knew"
            fill
            className="object-cover"
          />
        </h1>
      </Link>
      <Hamburger
        hiddenHeader={hiddenHeader}
        hiddenNavigation={hiddenNavigation}
        setHiddenNavigation={setHiddenNavigation}
      />
      <nav className="w-fit mx-auto">
        <Panel />
      </nav>
    </header>
  );
};
