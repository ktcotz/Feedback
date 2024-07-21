import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Routes } from "./typing/routes";
import { Root } from "./pages/Root";

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
