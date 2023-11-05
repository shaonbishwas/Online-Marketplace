import { Container } from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const MainLayout = ({ children }) => {
  const { user,logout } = useAuth();
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="mypostedjobs">My posted Jobs</NavLink>
      <NavLink to="addjob">Add Job</NavLink>
      <NavLink to="mybids">My Bids</NavLink>
      <NavLink to="bidrequests">Bid Requests</NavLink>
      {user ? (
        <NavLink onClick={()=>logout()}>logOut</NavLink>
      ) : (
        <NavLink to="login">logIn</NavLink>
      )}
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="bg-base-300">
          <div className="w-full navbar bg-base-300 md:max-w-[1200px] mx-auto ">
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
            <div className="flex-1 px-2 mx-2">My JoBs</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-5">
                {/* Navbar menu content here */}
                {links}
              </ul>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <Container className="">{children}</Container>
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
