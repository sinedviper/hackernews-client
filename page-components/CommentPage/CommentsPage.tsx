/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import cn from "classnames";
import { useEffect } from "react";

import { loadComments, selectComments } from "../../features";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CommentsPageProps } from "./CommentsPage.props";
import { CommentCard } from "../../components";
import { Error404 } from "../../pages/404";
import LoadSvg from "./Load.svg";

import styles from "./CommentsPage.module.css";
import { Comments } from "../../interfaces/pages-interface";

export const CommentsPage = ({
  card,
  className,
  ...props
}: CommentsPageProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const { comments, status } = useAppSelector(selectComments);

  useEffect(() => {
    card.kids && dispatch(loadComments(card.kids));
  }, []);

  const handleComments = (comments: Comments[]) => {
    return comments?.map((comment: Comments) => {
      return <CommentCard comments={comment} key={comment.id} />;
    });
  };

  if (!card) {
    return <Error404 />;
  }

  return (
    <div className={cn(className, styles.wrapper)} {...props}>
      <h3 className={styles.title}>Comments</h3>
      {card.kids != undefined ? (
        status !== "received" ? (
          <LoadSvg className={styles.load} />
        ) : (
          <>{handleComments(comments)}</>
        )
      ) : (
        <span className={styles.noComments}>No comments</span>
      )}
    </div>
  );
};
