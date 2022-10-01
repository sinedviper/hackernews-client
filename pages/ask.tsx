import type { NextPage } from "next";

import { withLayout } from "../layout/Layout";
import { Main } from "../layout/Main/Main";

const Ask: NextPage = (): JSX.Element => {
  return (
    <>
      <Main type='ask' />
    </>
  );
};

export default withLayout(Ask);
