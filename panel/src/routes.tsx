import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Error from "./pages/error";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
export const router = createBrowserRouter([
{
    path:"/",
    element:<Dashboard/>,
    errorElement:<Error/>
},
{
    path:"/login",
    element:<Login/>,
    errorElement:<Error/>
},
{
    path:"/register",
    element:<Register/>,
    errorElement:<Error/>
},
])