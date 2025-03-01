import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Error from "./components/Error";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import NewArrival from "./pages/NewArrival.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ShopContextProvider from "./context/storeContext.jsx";
import Footer from "./components/Footer.jsx";
import Collections from "./pages/Collections.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import Checkout from "./pages/Checkout.jsx";

let Application = () => {
  return (
    <>
      <Toaster position="top-center" />
      <div className="application flex flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
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
      { path: "/collections/:category/:productid", element: <ProductPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <Checkout /> },
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
