"use client";
import { useState, useEffect } from "react";
import { Toolbar } from "@/src/widgets/toolbar";
import { ReadingContent } from "@/src/widgets/reading";

export const HomePage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/overview.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <>
      <Toolbar>
        <ReadingContent className="p-1 select-text" content={content} />
      </Toolbar>
    </>
  );
};
