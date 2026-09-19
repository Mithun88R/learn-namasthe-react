import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h1> Page Not Found. Please check the URL and try again. </h1>
      <h2>{error.statusText}</h2>
      <h3>{error.status}</h3>
    </div>
  );
};

export default PageNotFound;
