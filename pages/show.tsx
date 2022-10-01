import type { NextPage } from "next";

import { withLayout } from "../layout/Layout";
import { Main } from "../layout/Main/Main";

const Show: NextPage = (): JSX.Element => {
  return (
    <>
      <Main type='show' />
    </>
  );
};

export default withLayout(Show);
