import { createBrowserRouter } from "react-router-dom";
import { App, Menu } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/about",
    element: <h1>about</h1>,
  },
  {
    path: "/order-now",
    element: <h1>Order Now</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
]);
