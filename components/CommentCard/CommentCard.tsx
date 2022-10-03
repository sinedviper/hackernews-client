/* eslint-disable react/no-children-prop */
import React from "react";
import cn from "classnames";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { CommentCardProps } from "./CommentCard.props";

import styles from "./CommentCard.module.css";
import Link from "next/link";

export const CommentCard = ({
  comments,
  className,
  ...props
}: CommentCardProps): JSX.Element => {
  return (
    <>
      {comments && (
        <div className={cn(className, styles.card)} {...props}>
          <Link href={`/users/${comments.by}`}>
            <h4 className={styles.title}>{comments.by}</h4>
          </Link>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm, remarkMath]}
            children={comments.text}
            className={styles.textMark}
          />
        </div>
      )}
    </>
  );
};
