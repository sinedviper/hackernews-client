import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Data, User } from "../../interfaces/pages-interface";

type GetObjDifferentKeys<T, U> = Omit<T, keyof U> & Omit<U, keyof T>;
export interface CommentsPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  card: GetObjDifferentKeys<Data, User>;
}
