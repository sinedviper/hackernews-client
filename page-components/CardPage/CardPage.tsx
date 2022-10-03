/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import cn from "classnames";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { actionCardId, selectCards } from "../../features";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { CardPageProps } from "./CardPage.props";
import { PostCard } from "../../components";
import { Error404 } from "../../pages/404";
import LoadSvg from "./Load.svg";

import styles from "./CardPage.module.css";
import { CommentsPage } from "../CommentPage/CommentsPage";

export const CardPage = ({
  className,
  ...props
}: CardPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { cardsid } = router.query;
  const { card, status } = useAppSelector(selectCards);

  useEffect(() => {
    dispatch(actionCardId(cardsid));
  }, []);

  if (!card) {
    return <Error404 />;
  }

  return (
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
  );
};
