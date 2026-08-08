import { LessonList } from "@/src/widgets/lesson-list";

export const LessonsPage = () => {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden bg-white dark:bg-[#010407]">
      <LessonList />
    </main>
  );
};
