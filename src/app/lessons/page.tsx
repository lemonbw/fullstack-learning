import { Panel } from '@/src/widgets/home/ui/Panel';
import LessonList from '@/src/widgets/lesson-list/ui/LessonList';

export default function Lessons() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden bg-white dark:bg-[#010407]">
      <Panel />
      <LessonList />
    </main>
  );
}
