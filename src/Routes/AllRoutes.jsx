import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Unique/Home";
import Destination from "../Pages/Unique/Destination";
import Register from "../Pages/Unique/Register";
import Login from "../Pages/Unique/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/destination",
        element: <Destination></Destination>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/Register",
        element: <Register></Register>
      },
    ],
  },
]);

export default router;
