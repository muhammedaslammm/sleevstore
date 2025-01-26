import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";

let Application = () => {
  return (
    <div className="application">
      <Header />
      <Outlet />
    </div>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "*", element: <Error /> },
]);

let root = ReactDOM.createRoot(document.getElementById("sleevstor"));
root.render(<RouterProvider router={appRouter} />);
