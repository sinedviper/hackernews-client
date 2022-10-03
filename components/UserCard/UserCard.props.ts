import { DetailedHTMLProps, HTMLAttributes } from "react";
import { User } from "../../interfaces/pages-interface";

export interface UserProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: User;
}
