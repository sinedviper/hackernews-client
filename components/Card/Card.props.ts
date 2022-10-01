import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Data } from "../../interfaces/pages-interface";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  list: Data;
}
