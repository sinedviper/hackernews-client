import React from "react";
import cn from "classnames";

import { CardProps } from "./Card.props";
import styles from "./Card.module.css";

export const Card = ({ list, className, ...props }: CardProps): JSX.Element => {
  const { title, descendants, time, score, by, kids } = list;
  return (
    <div className={cn(className, styles.card)} {...props}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.foot}>
        <span className={styles.by}>by {by}</span>
        <span className={styles.time}>
          {new Date(time * 1000).toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
        <span className={styles.point}>point {score}</span>
        {kids && (
          <span className={styles.comments}>comments {kids.length - 1}</span>
        )}
      </div>
    </div>
  );
};
