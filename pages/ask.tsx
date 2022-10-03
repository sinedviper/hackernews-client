import type { NextPage } from "next";

import { withLayout } from "../layout/Layout";
import { CardsPage } from "../page-components";

const Ask: NextPage = (): JSX.Element => {
  return (
    <>
      <CardsPage type='ask' />
    </>
  );
};

export default withLayout(Ask);
