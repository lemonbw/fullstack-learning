export const lessons: {
  lesson: number;
  index: number;
  title: string;
  symbols: string;
  date: Date;
  slug: string;
  href?: string;
  searchIndex?: string;
}[] = [
  {
    lesson: 1,
    index: 0,
    title: "Frontend test",
    symbols: "2797",
    date: new Date("2026-08-06"),
    slug: "01-frontend-test",
  },
  {
    lesson: 2,
    index: 1,
    title: "SemVer",
    symbols: "2782",
    date: new Date("2026-08-06"),
    slug: "02-SemVer",
  },
];

lessons.forEach((ch) => {
  ch.href = `/reading/${ch.slug}`;
  ch.searchIndex =
    `${ch.lesson}, ${ch.title}, ${ch.date.toLocaleDateString("ru-RU")}`.toLowerCase();
});
