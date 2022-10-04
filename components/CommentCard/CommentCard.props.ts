import { Comments } from "./../../interfaces/pages-interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CommentCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  comments: Comments;
  kids?: boolean;
  parent?: number | null;
}
