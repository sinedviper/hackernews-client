import React from "react";
import cn from "classnames";

import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Link from "next/link";
import { useAppDispatch } from "../../hooks/hooks";
import {
  actionClearCard,
  actionClearComments,
  actionClearUser,
} from "../../features";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(actionClearCard());
    dispatch(actionClearComments());
    dispatch(actionClearUser());
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <h1>HackerNews</h1>
      <nav className={styles.nav}>
        <Link href='/'>
          <a onClick={handleClear}>New</a>
        </Link>
        <hr />
        <Link href='/show'>
          <a onClick={handleClear}>Show</a>
        </Link>
        <hr />
        <Link href='/ask'>
          <a onClick={handleClear}>Ask</a>
        </Link>
        <hr />
        <Link href='/jobs'>
          <a onClick={handleClear}>Jobs</a>
        </Link>
      </nav>
    </header>
  );
};
