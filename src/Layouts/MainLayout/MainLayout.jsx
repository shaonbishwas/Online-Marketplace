import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
// import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
const MainLayout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  const hondleLogout = () => {
    logout()
      .then(() => {
        window.location.reload();
        // Swal.fire({
        //   title: "Success",
        //   text: "Successfully out",
        //   icon: "success",
        //   confirmButtonText: "Continue",
        // });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="mypostedjobs">My posted Jobs</NavLink>
      <NavLink to="addjob">Add Job</NavLink>
      <NavLink to="mybids">My Bids</NavLink>
      <NavLink to="bidrequests">Bid Requests</NavLink>
      {user?.email ? (
        <NavLink onClick={hondleLogout}>logOut</NavLink>
      ) : (
        <NavLink to="login">logIn</NavLink>
      )}
      <div className="flex items-center justify-center">
        {user?.photoURL ? (
          <img src={user.photoURL} alt="" className="w-7 rounded-full" />
        ) : (
          <FaUserCircle className="text-2xl"></FaUserCircle>
        )}
      </div>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="bg-base-300">
          <div className="w-full navbar bg-base-300 md:max-w-[1400px] mx-auto ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2"><span className="font-bold text-2xl text-green-400">W</span>orknest</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-5">
                {/* Navbar menu content here */}
                {links}
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-3">
          {/* Sidebar content here */}
          {links}
        </ul>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
