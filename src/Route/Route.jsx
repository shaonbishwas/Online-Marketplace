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
import UpdatePage from "../Components/UpdatePage";
import ErrorElement from "../Pages/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "mypostedjobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "mybids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "bidrequests",
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "addjob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
      },
      {
        path: "jobdetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
        loader: ({ params }) =>
          fetch(
            `https://online-marketplace-zeta.vercel.app/api/v1/jobs/${params.id}`
          ),
      },
      {
        path: "updatejob/:id",
        element: (
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ),
        errorElement: <ErrorElement></ErrorElement>,
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
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/register",
    element: <Register></Register>,
    errorElement: <ErrorElement></ErrorElement>,
  },
]);
export default router;
