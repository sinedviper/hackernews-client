/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";

import { withLayout } from "../../layout/Layout";
import { CardPage } from "../../page-components";

const Card: NextPage = (): JSX.Element => {
  return (
    <>
      <CardPage />
    </>
  );
};

export default withLayout(Card);
