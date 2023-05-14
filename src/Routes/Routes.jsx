import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <Signup></Signup>
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
          path: "/bookings",
          element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        }
      ]
    },
  ]);


  export default router;