export const lessons: {
  lesson: number;
  index: number;
  title: string;
  symbols: string;
  date: Date;
  slug: string;
  href: string;
  searchIndex?: string;
}[] = [
    {
      lesson: 1,
      index: 0,
      title: 'Real DOM & Virtual DOM',
      symbols: '5К',
      date: new Date('2026-01-09'),
      slug: '01-real-dom-and-virtual-dom',
      href: '',
    },
    {
      lesson: 2,
      index: 1,
      title: 'State & Properties difference',
      symbols: '5К',
      date: new Date('2026-01-10'),
      slug: '02-state-and-properties-difference',
      href: '',
    },
    {
      lesson: 3,
      index: 2,
      title: 'React Hooks',
      symbols: '5К',
      date: new Date('2026-01-11'),
      slug: '03-react-hooks',
      href: '',
    },
    ...Array.from({ length: 500 }, (_, i) => ({
      lesson: i + 4,
      index: i + 3,
      title: 'PlaceHolder',
      symbols: '5К',
      date: new Date('2026-01-09'),
      slug: `/lesson/${i + 4}`,
      href: '',
    })),
  ];

lessons.forEach((ch) => {
  ch.href = `/reading/${ch.slug}`;
  ch.searchIndex =
    `${ch.lesson}, ${ch.title}, ${ch.date.toLocaleDateString('ru-RU')}`.toLowerCase();
});
