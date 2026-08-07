"use client";
import { useState, useEffect } from "react";
import ReadingContent from "../../reading/ui/ReadingContent";
import { Toolbar } from "../../toolbar/ui/Toolbar";

export const Overview = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/overview.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <Toolbar>
      <ReadingContent className="p-1 select-text" content={content} />
    </Toolbar>
  );
};
