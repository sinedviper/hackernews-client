import type { NextPage } from "next";

import { withLayout } from "../layout/Layout";
import { CardsPage } from "../page-components";

const Show: NextPage = (): JSX.Element => {
  return (
    <>
      <CardsPage type='show' />
    </>
  );
};

export default withLayout(Show);
