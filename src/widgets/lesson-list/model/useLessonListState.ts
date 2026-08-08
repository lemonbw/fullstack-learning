import { useState, useMemo, useEffect, useDeferredValue } from "react";
import { useMedia } from "use-media";
import { chunkArray } from "@/src/shared/lib/arrays";
import { lessonsSort } from "@/src/entities/lesson";

export const useLessonListState = () => {
  const [pageSize, setPageSize] = useState(20);

  const [panelSize, setPanelSize] = useState(8);

  const isLarge = useMedia({ minWidth: 1024 });

  useEffect(() => {
    if (!isLarge) {
      setPanelSize(4);
      setPageSize(10);
    } else {
      setPanelSize(8);
      setPageSize(20);
    }
  }, [isLarge, setPanelSize, setPageSize]);

  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const [isAsc, setIsAsc] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(0);

  const sortedLessons = useMemo(() => lessonsSort(isAsc), [isAsc]);

  const filteredLessons = useMemo(() => {
    if (!deferredQuery) return sortedLessons;
    const q = deferredQuery.toLowerCase();
    return sortedLessons.filter((ch) => ch.searchIndex?.includes(q));
  }, [deferredQuery, sortedLessons]);

  const listSource = query ? filteredLessons : sortedLessons;

  const pages = useMemo(
    () => chunkArray(listSource, pageSize),
    [listSource, pageSize],
  );

  const currentPage = pages[page] ?? [];

  const startPage =
    page < Math.floor(panelSize / 2)
      ? 0
      : page > pages.length - Math.ceil(panelSize / 2)
        ? pages.length - panelSize
        : page - Math.floor(panelSize / 2);

  return {
    query,
    setQuery,

    isAsc,
    setIsAsc,

    page,
    setPage,

    pages,
    currentPage,
    startPage,

    panelSize,
    pageSize,
  };
};
