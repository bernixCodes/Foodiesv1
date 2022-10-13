import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../view/Home/Index";
import Service from "../view/Service/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "/customerServices", element: <Service /> }],
  },
]);
function Pages() {
  return <RouterProvider router={router} />;
}

export default Pages;
