"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { defaultSchema } from "hast-util-sanitize";

const schema = {
  ...defaultSchema,
  clobberPrefix: "",
};

type ReadingContentProps = {
  content: string;
  className?: string;
};

export default function ReadingContent({
  content,
  className,
}: ReadingContentProps) {
  return (
    <div
      className={`${className}, h-[90vh] overflow-y-auto [&_p]:my-2 [&_h1]:mb-4 [&_h1]:font-bold [&_h2]:font-semibold [&_h2]:my-4 [&_h3]:my-2 [&_h3]:font-medium [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:ml-1 [&_hr]:w-[97.5%] mx-2`}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeSanitize, schema]]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
