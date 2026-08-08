import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "Fullstack Learning — Leon Gray",
    template: "%s | Fullstack Learning",
  },
  description:
    "Интерактивный сайт-сборник уроков, заметок и практических материалов по изучению fullstack-разработки: JavaScript, TypeScript, React, Next.js, Node.js и базы данных.",
  keywords: [
    "fullstack",
    "frontend",
    "backend",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "web development",
    "программирование",
    "обучение разработке",
  ],
  authors: [
    {
      name: "Leon Gray",
    },
  ],
  creator: "Leon Gray",
  publisher: "Leon Gray",

  openGraph: {
    title: "Fullstack Learning — Leon Gray",
    description:
      "Интерактивный сайт с уроками и заметками по fullstack-разработке.",
    type: "website",
    locale: "ru_RU",
    siteName: "Fullstack Learning",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fullstack Learning — Leon Gray",
    description:
      "Изучение fullstack-разработки через интерактивные уроки и практические заметки.",
    creator: "@LeonGray",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full overflow-x-hidden bg-zinc-50 font-sans antialiased dark:bg-[#010407]`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
