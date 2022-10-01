import React from "react";
import cn from "classnames";

import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Link from "next/link";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <h1>HackerNews</h1>
      <nav className={styles.nav}>
        <Link href='/'>New</Link>
        <hr />
        <Link href='/show'>Show</Link>
        <hr />
        <Link href='/ask'>Ask</Link>
        <hr />
        <Link href='/jobs'>Jobs</Link>
      </nav>
    </header>
  );
};
