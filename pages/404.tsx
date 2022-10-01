import { withLayout } from "../layout/Layout";

export function Error404(): JSX.Element {
  return (
    <div>
      <h1>Error 404</h1>
    </div>
  );
}

export default withLayout(Error404);
