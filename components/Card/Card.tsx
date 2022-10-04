import React from "react";
import cn from "classnames";
import Link from "next/link";

import { CardProps } from "./Card.props";

import styles from "./Card.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import {
  actionClearCard,
  actionClearComments,
  actionClearUser,
} from "../../features";

export const Card = ({
  cards,
  className,
  ...props
}: CardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { title, time, score, by, kids, id, dead } = cards;

  const handleClear = () => {
    dispatch(actionClearCard());
    dispatch(actionClearComments());
    dispatch(actionClearUser());
  };

  return (
    <>
      {dead == true ? null : (
        <div className={cn(className, styles.card)} {...props}>
          <h2 className={styles.title}>
            <Link href={`/cards/${id}`}>
              <a onClick={handleClear}>{title}</a>
            </Link>
          </h2>
          <div className={styles.foot}>
            <span className={styles.by} onClick={handleClear}>
              by <Link href={`/users/${by}`}>{by}</Link>
            </span>
            <span className={styles.time}>
              {new Date(time * 1000).toLocaleDateString("en-US", {
                hour: "numeric",
                minute: "numeric",
              })}
            </span>
            <span className={styles.point}>point {score}</span>
            {kids && (
              <span className={styles.comments}>comments {kids.length}</span>
            )}
          </div>
        </div>
      )}
    </>
  );
};
