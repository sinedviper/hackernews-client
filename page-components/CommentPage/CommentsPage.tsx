/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import cn from "classnames";
import { useEffect } from "react";

import { loadComments, selectComments, updateComments } from "../../features";
import { Comments, Data } from "../../interfaces/pages-interface";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CommentsPageProps } from "./CommentsPage.props";
import { Card, CommentCard } from "../../components";
import LoadSvg from "./Load.svg";

import styles from "./CommentsPage.module.css";

export const CommentsPage = ({
  card,
  className,
  ...props
}: CommentsPageProps): JSX.Element => {
  const [num, setNum] = useState<number>(30);
  const dispatch = useAppDispatch();

  const { comments, status } = useAppSelector(selectComments);

  const handleComments = (
    comments: Comments[],
    num?: number | null,
    key = false
  ) => {
    let arrayComments: JSX.Element[] = [];
    let margin: number = 30;

    comments.map((comment: Comments) => {
      if (comment.type == "story") {
        arrayComments.push(
          <Card cards={comment as unknown as Data} key={comment.id} />
        );
      } else {
        arrayComments.push(
          <CommentCard
            style={{ marginLeft: num ? num : 0 }}
            comments={comment}
            key={comment.id}
            kids={num ? true : false}
            parent={key ? null : comment.parent}
          />
        );
        if (comment.kids && key) {
          for (const comm of comment.kids) {
            arrayComments.push(
              <CommentCard
                style={{ marginLeft: margin }}
                kids={margin || num ? true : false}
                comments={comm}
                key={comm.id}
              />
            );
            if (comm.kids) {
              arrayComments.push(
                ...handleComments(comm.kids, margin + 30, key)
              );
            }
          }
        }
      }
    });

    return arrayComments;
  };

  const handleLoad = () => {
    if (card.kids && card.kids.length > num) {
      setNum(num + 30);
      dispatch(
        updateComments({
          type: card.kids,
          num,
        })
      );
    } else if (card.submitted && card.submitted.length > num) {
      setNum(num + 30);
      dispatch(
        updateComments({
          type: card.submitted,
          num,
        })
      );
    }
  };

  useEffect(() => {
    card.kids && dispatch(loadComments(card.kids));
    card.submitted && dispatch(loadComments(card.submitted));
  }, [card.kids, card.submitted]);

  return (
    <>
      {card && (
        <div className={cn(className, styles.wrapper)} {...props}>
          <h3 className={styles.title}>Comments</h3>
          {card.kids != undefined || card.submitted != undefined ? (
            status !== "received" ? (
              <LoadSvg className={styles.load} />
            ) : (
              <>
                {handleComments(comments, null, card.submitted ? false : true)}
                <button
                  onClick={handleLoad}
                  className={cn(styles.button, {
                    [styles.buttonNone]: card.kids
                      ? comments.length == card.kids.length
                      : card.submitted
                      ? comments.length == card.submitted.length
                      : null,
                  })}
                >
                  Load
                </button>
              </>
            )
          ) : (
            <span className={styles.noComments}>No comments</span>
          )}
        </div>
      )}
    </>
  );
};
