import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className=" text-center h-screen bg-gray-100">
      <h1 className="pt-28 text-2xl">Oops!!</h1>
      <h2>Something went wrong.</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
