import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/auth/Login";
import Index from "../components/admin/Index";
import Client from "../components/client/Client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <Index />,
      },
      {
        path: "/client",
        element: <Client />,
      },
    ],
  },
]);
export default router;
