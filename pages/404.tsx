import { Error } from "../components";
import { withLayout } from "../layout/Layout";

export function Error404(): JSX.Element {
  return (
    <>
      <Error />
    </>
  );
}

export default withLayout(Error404);
