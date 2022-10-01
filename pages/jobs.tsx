import type { NextPage } from "next";

import { withLayout } from "../layout/Layout";
import { Main } from "../layout/Main/Main";

const Jobs: NextPage = (): JSX.Element => {
  return (
    <>
      <Main type='job' />
    </>
  );
};

export default withLayout(Jobs);
