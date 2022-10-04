/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import cn from "classnames";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CardPageProps } from "./CardPage.props";
import { PostCard } from "../../components";
import { CommentsPage } from "../CommentPage/CommentsPage";
import { loadCard, selectCard } from "../../features";
import LoadSvg from "./Load.svg";

import styles from "./CardPage.module.css";

export const CardPage = ({
  className,
  ...props
}: CardPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { cardsid } = router.query;
  const { card, status } = useAppSelector(selectCard);

  useEffect(() => {
    dispatch(loadCard(Number(cardsid)));
  }, []);

  return (
    <>
      {card && (
        <div className={cn(className, styles.wrapper)} {...props}>
          {status !== "received" ? (
            <LoadSvg className={styles.load} />
          ) : (
            <>
              <PostCard card={card} />
              <CommentsPage card={card} />
            </>
          )}
        </div>
      )}
    </>
  );
};
