/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import cn from "classnames";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { loadUser, selectUser } from "../../features";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { UserPageProps } from "./UserPage.props";
import { UserCard } from "../../components";
import { Error404 } from "../../pages/404";
import LoadSvg from "./Load.svg";

import styles from "./UserPage.module.css";
import { CommentsPage } from "../CommentPage/CommentsPage";

export const UserPage = ({
  className,
  ...props
}: UserPageProps): JSX.Element => {
  const router = useRouter();
  const { usersid } = router.query;
  const dispatch = useAppDispatch();
  const { user, status } = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(loadUser(String(usersid)));
  }, [usersid]);

  if (!usersid) {
    return <Error404 />;
  }

  return (
    <div className={cn(className)} {...props}>
      {status !== "received" ? (
        <LoadSvg className={styles.load} />
      ) : (
        user && (
          <>
            <UserCard user={user} />
            <CommentsPage card={user} />
          </>
        )
      )}
    </div>
  );
};
