import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardsPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: string;
}
