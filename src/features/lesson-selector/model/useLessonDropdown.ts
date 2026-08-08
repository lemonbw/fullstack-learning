import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import { useClickOutside } from "@/src/shared/hooks/useClickOutside";

export const useLessonDropdown = (totalCount: number) => {
  const params = useParams();
  const slug = params?.slug;

  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const [hoveredLesson, setHoveredLesson] = useState<number | null>(null);

  const rowHoverDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const lessonRef = useRef<HTMLTableRowElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const open = useCallback(() => {
    setIsOpen(true);
    setVisibleCount(10);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) setVisibleCount(10);
      return next;
    });
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    rowHoverDelayRef.current = setTimeout(() => {
      setHoveredLesson(index);
    }, 150);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rowHoverDelayRef.current) {
      clearTimeout(rowHoverDelayRef.current);
      rowHoverDelayRef.current = null;
    }
    setHoveredLesson(null);
  }, []);

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const target = e.currentTarget;

      if (target.scrollHeight - target.scrollTop <= target.clientHeight + 50) {
        setVisibleCount((prev) => Math.min(prev + 20, totalCount));
      }
    },
    [totalCount],
  );

  const divRef = useClickOutside<HTMLDivElement>(close);

  useEffect(() => {
    if (!isOpen || !lessonRef.current || !listRef.current) return;

    listRef.current.scrollTo({
      top: lessonRef.current.offsetTop,
      behavior: "smooth",
    });
  }, [isOpen, slug]);

  return {
    isOpen,
    open,
    close,
    toggle,
    visibleCount,
    hoveredLesson,
    handleMouseEnter,
    handleMouseLeave,
    handleScroll,
    divRef,
    listRef,
    lessonRef,
    slug,
  };
};
