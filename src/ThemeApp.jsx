import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Template from "./Template";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

const ThemeApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default ThemeApp;
