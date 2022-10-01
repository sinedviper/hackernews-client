import cn from "classnames";

import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      HackerNews © 2022 - {new Date().getFullYear()} All rights reserved
    </footer>
  );
};
