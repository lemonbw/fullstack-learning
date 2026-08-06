import { useState, useMemo } from 'react';
import { useDeferredValue } from 'react';
import { useParams } from 'next/navigation';
import { lessons } from '@/src/entities/lesson/model/lessons';

export function useLessonSearch() {
  const params = useParams();
  const slug = params?.slug;

  const [query, setQuery] = useState('');

  const deferredQuery = useDeferredValue(query);

  const filteredLessons = useMemo(() => {
    if (!deferredQuery) return lessons;
    const q = deferredQuery.toLowerCase();
    return lessons.filter((ch) => ch.searchIndex?.includes(q));
  }, [deferredQuery]);

  const isSearching = query.length > 0;
  const listSource = isSearching ? filteredLessons : lessons;

  const currentLesson = useMemo(
    () => lessons.find((ch) => ch.slug === slug),
    [slug],
  );

  return {
    query,
    setQuery,
    listSource,
    isSearching,
    currentLesson,
  };
}
