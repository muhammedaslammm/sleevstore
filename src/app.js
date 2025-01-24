import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";

let Application = () => {
  return (
    <h1 className="text-[1.4rem] text-center my-4 font-semibold">
      welcome to sleevstor
    </h1>
  );
};

let appRouter = createBrowserRouter([
  { path: "/", element: <Application /> },
  { path: "*", element: <Error /> },
]);

let root = ReactDOM.createRoot(document.getElementById("sleevstor"));
root.render(<RouterProvider router={appRouter} />);
