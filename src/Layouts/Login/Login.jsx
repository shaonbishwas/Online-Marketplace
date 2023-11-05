import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Successfully logged In",
          icon: "success",
          confirmButtonText: "Continue",
        });
        navigate("/");
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
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full md:w-[450px] shadow-2xl bg-base-100">
          <form className="card-body border space-y-2" onSubmit={handleLogin}>
            <h1 className="text-center text-3xl font-semibold mb-5">
              Login To My Job
            </h1>
            <div className="form-control">
              {/* <label className="label">
                <span className="label-text">Email</span>
              </label> */}
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              {/* <label className="label">
                <span className="label-text">Password</span>
              </label> */}
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#14a800] text-white rounded-full  hover:text-black hover:border-[#14a800]">
                Login
              </button>
            </div>
            <div className="flex justify-center items-center gap-2">
              <hr className="border-1  w-full" />
              <h1>Or</h1>
              <hr className="border-1  w-full" />
            </div>
            <button className="btn bg-[#4285f4] text-white rounded-full hover:text-black hover:border-[#4285f4]">
              Continue with Google
            </button>
            <div className="flex justify-center items-center gap-2">
              <h1 className="">Don not have account?</h1>
            </div>
            <NavLink
              to="/register"
              className="btn w-1/2 mx-auto border-[#14a800] text-black rounded-full "
            >
              <button>Register</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
