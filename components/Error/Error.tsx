import React from "react";
import cn from "classnames";

import { CardProps } from "./Error.props";
import ErrorSvg from "./Error.svg";

import styles from "./Error.module.css";

export const Error = ({ className, ...props }: CardProps): JSX.Element => {
  return (
    <div className={cn(className, styles.error)} {...props}>
      <ErrorSvg className={styles.icon} />
      <h2>Error 404: not found</h2>
    </div>
  );
};
