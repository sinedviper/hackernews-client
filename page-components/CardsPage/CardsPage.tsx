/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import cn from "classnames";
import { useEffect } from "react";

import { loadPages, selectCards } from "../../features";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CardsPageProps } from "./CardsPage.props";
import { Data } from "../../interfaces/pages-interface";
import { Card } from "../../components";
import LoadSvg from "./Load.svg";

import styles from "./CardsPage.module.css";

export const CardsPage = ({
  type,
  className,
  ...props
}: CardsPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cards, status } = useAppSelector(selectCards);

  useEffect(() => {
    dispatch(loadPages(type));
  }, []);

  return (
    <div className={cn(className, styles.main)} {...props}>
      {status !== "received" ? (
        <LoadSvg className={styles.load} />
      ) : (
        cards && cards.map((card: Data) => <Card cards={card} key={card.id} />)
      )}
    </div>
  );
};
