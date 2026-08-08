"use client";
import Link from "next/link";
import { usePanelState } from "../model/usePanelState";

export const Panel = () => {
  const section = usePanelState();

  return (
    <div
      className={`z-5 mt-10 ${section === "Overview" ? "-mb-10 lg:-mb-6" : ""} flex h-9 w-35 overflow-hidden rounded-[0.55rem] border-2 *:w-1/2 *:pt-[0.2rem] *:pl-[0.3rem] *:text-center *:text-[1.2rem] lg:h-10 lg:w-55 lg:rounded-xl lg:*:pl-4`}
    >
      <Link
        href="/"
        className={`flex lg:text-2xl ${section === "Overview" ? "bg-black text-white dark:bg-white dark:text-black" : "bg-white text-black dark:bg-black dark:text-white"}`}
      >
        Обзор
      </Link>
      <Link
        href="/lessons"
        className={`flex lg:text-2xl ${section === "Lessons" ? "bg-black text-white dark:bg-white dark:text-black" : "bg-white text-black dark:bg-black dark:text-white"}`}
      >
        Уроки
      </Link>
    </div>
  );
};
