import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isloading } = useAuth();
  console.log(isloading);
  if (isloading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
