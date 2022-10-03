import type { NextPage } from "next";

import { withLayout } from "../layout/Layout";
import { CardsPage } from "../page-components";

const Jobs: NextPage = (): JSX.Element => {
  return (
    <>
      <CardsPage type='job' />
    </>
  );
};

export default withLayout(Jobs);
