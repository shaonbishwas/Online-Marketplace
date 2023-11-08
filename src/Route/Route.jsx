import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import Home from "../Pages/Home";
import MyPostedJobs from "../Pages/MyPostedJobs";
import MyBids from "../Pages/MyBids";
import BidRequests from "../Pages/BidRequests";
import AddJob from "../Pages/AddJob";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import JobDetails from "../Components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "mypostedjobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "mybids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
      {
        path: "bidrequests",
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>
          </PrivateRoute>
        ),
      },
      {
        path: "addjob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "jobdetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://online-marketplace-zeta.vercel.app/api/v1/jobs/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
export default router;
