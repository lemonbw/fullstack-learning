import fs from "fs";
import path from "path";

const lessonsPath = path.join(process.cwd(), "public/lessons");

export const getAllLessons = () => {
  return fs
    .readdirSync(lessonsPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
    .sort();
};

export const getLesson = (slug: string) => {
  const filePath = path.join(lessonsPath, `${slug}.md`);

  return fs.readFileSync(filePath, "utf8");
};
