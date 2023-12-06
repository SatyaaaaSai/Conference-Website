import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <HomePage />
      <ProductPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    Element: <AppLayout />,
  },
  {
    path: "/products",
    Element: <ProductPage />,
  },
  {
    path: "/about",
    Element: <AboutPage />,
  },
  {
    path: "/contact",
    Element: <ContactPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>)

root.render(<RouterProvider router={AppLayout}/>);
