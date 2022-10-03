import React from "react";
import cn from "classnames";

import { UserProps } from "./UserCard.props";

import styles from "./UserCard.module.css";

export const UserCard = ({
  user,
  className,
  ...props
}: UserProps): JSX.Element => {
  const { created, id, karma, submitted = 0 } = user;

  return (
    <div style={{ padding: "0 20px" }}>
      <div className={cn(className, styles.card)} {...props}>
        <span>User: {id}</span>
        <span>
          Created:{" "}
          {new Date(created * 1000).toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
        <span>karma: {karma}</span>
        {submitted && (
          <span className={styles.comments}>
            comments: {submitted.length - 1}
          </span>
        )}
      </div>
    </div>
  );
};
