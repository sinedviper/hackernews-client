/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import cn from "classnames";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { CommentCardProps } from "./CommentCard.props";

import styles from "./CommentCard.module.css";
import Link from "next/link";
import {
  actionClearCard,
  actionClearComments,
  actionClearUser,
} from "../../features";
import { useAppDispatch } from "../../hooks/hooks";

export const CommentCard = ({
  comments,
  kids = false,
  parent,
  className,
  ...props
}: CommentCardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClear = () => {
    dispatch(actionClearCard());
    dispatch(actionClearComments());
    dispatch(actionClearUser());
  };

  return (
    <>
      {comments.deleted
        ? null
        : comments && (
            <div className={cn(className, styles.card)} {...props}>
              <div className={styles.titleWrapper}>
                <Link href={`/users/${comments.by}`}>
                  <h4 className={styles.title} onClick={handleClear}>
                    {comments.by}
                  </h4>
                </Link>
                <span className={styles.time}>
                  {new Date(comments.time * 1000).toLocaleDateString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </span>
                {parent && (
                  <Link href={`/cards/${parent}`}>
                    <a onClick={handleClear}>Link post</a>
                  </Link>
                )}
                {kids && (
                  <button onClick={handleOpen} className={styles.button}>
                    {open ? "[v]" : "[x]"}
                  </button>
                )}
              </div>
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm, remarkMath]}
                children={comments.text}
                className={cn(
                  styles.textMark,
                  kids && {
                    [styles.open]: open == true,
                    [styles.close]: open == false,
                  }
                )}
              />
            </div>
          )}
    </>
  );
};
