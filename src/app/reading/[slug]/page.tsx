import { getAllLessons, getLesson } from "@/src/entities/lesson/server";
import { ReadingPage } from "@/src/views/reading";
import { notFound } from "next/navigation";

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  const chapters = getAllLessons();
  return chapters.map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getLesson(slug);

  if (!content) {
    notFound();
  }

  return <ReadingPage content={content} />;
}
