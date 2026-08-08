"use client";
import { usePathname } from "next/navigation";

export const usePanelState = () => {
  const pathname = usePathname() ?? "";
  const section =
    pathname === "/lessons" || pathname.startsWith("/reading/")
      ? "Lessons"
      : "Overview";
  return section;
};
