/* eslint-disable react/no-children-prop */
import React from "react";
import cn from "classnames";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { UserProps } from "./UserCard.props";

import styles from "./UserCard.module.css";

export const UserCard = ({
  user,
  className,
  ...props
}: UserProps): JSX.Element => {
  const { created, id, karma, submitted = 0, about } = user;

  return (
    <div style={{ padding: "0 20px" }}>
      <div className={cn(className, styles.card)} {...props}>
        <div className={styles.main}>
          <span>user: {id}</span>
          <span>
            created:{" "}
            {new Date(created * 1000).toLocaleDateString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
          <span>karma: {karma}</span>
          {submitted && (
            <span className={styles.comments}>
              story: {submitted.length - 1}
            </span>
          )}
        </div>
        {about && (
          <div className={styles.aboute}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm, remarkMath]}
              children={about}
              className={styles.textMark}
            />
          </div>
        )}
      </div>
    </div>
  );
};
