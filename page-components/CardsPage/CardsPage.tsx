/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import cn from "classnames";
import { useEffect } from "react";

import { loadPages, selectCards, updateCards } from "../../features";
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
  const [num, setNum] = useState<number>(30);
  const dispatch = useAppDispatch();
  const { cards, status } = useAppSelector(selectCards);

  const handleLoad = () => {
    if (cards.size > num) {
      setNum(num + 30);
    }
    dispatch(updateCards({ type, num }));
  };

  useEffect(() => {
    dispatch(loadPages(type));
  }, []);

  return (
    <div className={cn(className, styles.main)} {...props}>
      {status !== "received" ? (
        <LoadSvg className={styles.load} />
      ) : (
        <>
          {cards &&
            cards.posts.map((card: Data) => (
              <Card cards={card} key={card.id} />
            ))}
          <button
            onClick={handleLoad}
            className={cn(styles.button, {
              [styles.buttonNone]: cards.posts.length == cards.size,
            })}
          >
            Load
          </button>
        </>
      )}
    </div>
  );
};
