import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import Home from "../Pages/Home";
import MyPostedJobs from "../Pages/MyPostedJobs";
import MyBids from "../Pages/MyBids";
import BidRequests from "../Pages/BidRequests";
import AddJob from "../Pages/AddJob";

 const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'mypostedjobs',
                element:<MyPostedJobs></MyPostedJobs>
            },
            {
                path:'mybids',
                element:<MyBids></MyBids>
            },
            {
                path:'bidrequests',
                element:<BidRequests></BidRequests>
            },
            {
                path:'addjob',
                element:<AddJob></AddJob>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
])
export default router;