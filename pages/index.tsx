import type { NextPage } from "next";

import { withLayout } from "../layout/Layout";
import { CardsPage } from "../page-components";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <CardsPage type='new' />
    </>
  );
};

export default withLayout(Home);
