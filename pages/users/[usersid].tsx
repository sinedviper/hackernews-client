/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";

import { withLayout } from "../../layout/Layout";
import { UserPage } from "../../page-components";

const User: NextPage = (): JSX.Element => {
  return (
    <>
      <UserPage />
    </>
  );
};

export default withLayout(User);
