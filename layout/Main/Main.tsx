import React from "react";
import cn from "classnames";
import { useEffect } from "react";

import { loadPages, selectPages } from "../../features/pages/pagesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { MainProps } from "./Main.props";
import styles from "./Main.module.css";
import { Card } from "../../components/Card/Card";
import { Data } from "../../interfaces/pages-interface";

interface List {
  data: Data;
}

export const Main = ({ type, className, ...props }: MainProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { list, status, error } = useAppSelector(selectPages);

  console.log(error);

  useEffect(() => {
    dispatch(loadPages(type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={cn(className, styles.main)} {...props}>
      {status !== "received" ? (
        <span className={styles.load}>Loading...</span>
      ) : (
        list.map((obj: List) => <Card list={obj.data} key={obj.data.id} />)
      )}
    </main>
  );
};
