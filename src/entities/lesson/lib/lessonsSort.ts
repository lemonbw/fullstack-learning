import { lessons } from "../model/lessons";

export const lessonsSort = (order: "asc" | "desc") => {
  return [...lessons].sort((a, b) =>
    order === "asc" ? a.index - b.index : b.index - a.index,
  );
};
