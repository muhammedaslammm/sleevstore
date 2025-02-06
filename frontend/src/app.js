import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import NewArrival from "./pages/NewArrival.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ShopContextProvider from "./context/storeContext.jsx";
import Footer from "./components/Footer.jsx";
import Collections from "./pages/Collections.jsx";

let Application = () => {
  return (
    <div className="application">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/newarrival", element: <NewArrival /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/collections/:category", element: <Collections /> },
    ],
  },
  { path: "*", element: <Error /> },
]);

let root = ReactDOM.createRoot(document.getElementById("sleevstor"));
root.render(
  <ShopContextProvider>
    <RouterProvider router={appRouter} />
  </ShopContextProvider>
);
