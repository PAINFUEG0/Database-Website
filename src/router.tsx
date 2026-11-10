/** @format */

import { Root } from "./Root";
import { pages } from "./pageMappings";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/*", element: <Navigate to="/" /> },
      { path: "/", element: <Navigate to="/getting-started" /> },
      ...Object.entries(pages).flatMap(([, V]) => V.map((_) => ({ path: _.title.toLowerCase().replaceAll(" ", "-"), element: _.page }))),
    ],
  },
]);
