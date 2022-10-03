import React from "react";
import cn from "classnames";
import Link from "next/link";

import { CardProps } from "./Card.props";

import styles from "./Card.module.css";

export const Card = ({
  cards,
  className,
  ...props
}: CardProps): JSX.Element => {
  const { title, time, score, by, kids, id } = cards;

  return (
    <div className={cn(className, styles.card)} {...props}>
      <h2 className={styles.title}>
        <Link href={`/cards/${id}`}>{title}</Link>
      </h2>
      <div className={styles.foot}>
        <span className={styles.by}>
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
  );
};
