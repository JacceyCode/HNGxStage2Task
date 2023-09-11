import { useRouteError } from "react-router-dom";
import ErrorButton from "./ErrorButton";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Ooooops, Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <ErrorButton>&larr; Go back</ErrorButton>
    </div>
  );
}

export default Error;
