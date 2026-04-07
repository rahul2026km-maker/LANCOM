import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Dashboard from "../component/Dashboard/Dashboard";
import Register from "../pages/Register";
import PrivateRoute from "../component/comman/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/register",
        element: (
          <PrivateRoute adminOnly={true}>
            <Register />
          </PrivateRoute>
        ),
      },
    ],
  },
]);