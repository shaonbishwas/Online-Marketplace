import { NavLink } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import useAuth from "../../Hooks/useAuth";
import { FaCircleUser } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Navbar = () => {
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
      <NavLink className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 underline text-pink-700 font-bold text-lg"
            : "lg:mt-2 text-lg"
        } to="/">Home</NavLink>
      <NavLink className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 underline text-pink-700 font-bold text-lg"
            : "lg:mt-2 text-lg"
        } to="mypostedjobs">My posted Jobs</NavLink>
      <NavLink className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 underline text-pink-700 font-bold text-lg"
            : "lg:mt-2 text-lg"
        } to="addjob">Add Job</NavLink>
      <NavLink className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 underline text-pink-700 font-bold text-lg"
            : "lg:mt-2 text-lg"
        } to="mybids">My Bids</NavLink>
      <NavLink className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active lg:mt-2 underline text-pink-700 font-bold text-lg"
            : "lg:mt-2 text-lg"
        } to="bidrequests">Bid Requests</NavLink>
      {user?.email ? (
        <NavLink className='lg:mt-2 text-lg' onClick={hondleLogout}>logOut</NavLink>
      ) : (
        <NavLink className='lg:mt-2 text-lg'  to="login">logIn</NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex-1 px-2 mx-2"><span className="font-bold text-2xl text-green-400">W</span>orknest</div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
      {user ? (
          <div className="flex gap-2 h-12 items-center">
            <div className="text-sm">
              <p className="text-right">{user.displayName || "User Name"}</p>
              <p className="text-xs lg:text-sm">{user.email}</p>
            </div>
            <div className="h-full">
              {user.photoURL ? (
                <img
                  className="h-full rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <FaCircleUser className="h-full rounded-full text-4xl"></FaCircleUser>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-2 h-12 items-center">
            <div className="text-sm">
              <p>Guest User</p>
            </div>
            <div className="h-full">
              <FaCircleUser className="h-full rounded-full text-4xl"></FaCircleUser>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
