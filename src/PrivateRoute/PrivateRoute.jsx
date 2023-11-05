import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";



const PrivateRoute = ({ children }) => {

  const { user, isloading } = useAuth();

  if (isloading) {
    return <LinearProgress color="success" />;
  }

  if (!user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;

};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
