import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Data } from "../../interfaces/pages-interface";

export interface PostCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  card: Data | null;
}
