import { FunctionComponent, useRef } from "react";

import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import UpSvg from "./up.svg";

import styles from "./Layout.module.css";
import { useScrollY } from "../hooks/useScrollY";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const y = useScrollY();

  const handleCursor = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Header className={styles.header} id='header' />
        <main className={styles.body} ref={bodyRef} tabIndex={0} role='main'>
          {children}
        </main>
        <button
          className={styles.up}
          style={{ display: y > 1000 ? "block" : "none" }}
          onClick={handleCursor}
        >
          <UpSvg />
        </button>
      </div>
      <Footer className={styles.footer} />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
