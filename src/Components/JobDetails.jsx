import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
const JobDetails = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const data = useLoaderData();
  useEffect(() => {
    document.title = "Worknest | Job Details";
  }, []);
  const {
    _id,
    title,
    description,
    ownerEmail,
    minimumPrice,
    maximumPrice,
    postedDate,
    expiryDate,
  } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("from submited");
    const form = e.target;
    const price = form.bidamount.value;
    const deadline = form.deadline.value;
    const bid = {
      title,
      job_id: _id,
      price,
      postedDate,
      deadline,
      buyer_email: user.email,
      owner_email: ownerEmail,
      status: "pending",
    };
    console.log("from submited", bid);
    axios
      .post("https://online-marketplace-zeta.vercel.app/api/v1/submit-bid", bid)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: `Successfully bid submitted`,
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/mybids");
      });
  };
  return (
    <div className="my-20 lg:max-w-[1400px] mx-auto">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <span className="flex items-center mt-10">
        <FaLocationDot className="text-2xl text-blue-600"></FaLocationDot>
        <span className="text-lg font-bold">Worldwide</span>
      </span>
      <div className="border-y my-8 py-8">
        <p className="w-[70%]">{description}</p>
      </div>
      <div className="grid grid-cols-3 gap-y-5 md:w-1/2 ">
        <div>
          <span className="text-lg font-bold">
            ${minimumPrice}-${maximumPrice}
          </span>
          <p className="text-sm text-gray-500">Price Range</p>
        </div>
        <div>
          <span className="text-lg font-bold">{postedDate}</span>
          <p className="text-sm text-gray-500">Posted Date</p>
        </div>
        <div>
          <span className="text-lg font-bold">{expiryDate}</span>
          <p className="text-sm text-gray-500">DeadLine</p>
        </div>

        <span className="flex items-center">
          <FaLocationDot className="text-2xl"></FaLocationDot>
          <span className="text-lg font-bold">Remote</span>
        </span>
      </div>

      <div className="mt-16">
        <h1 className="text-3xl font-semibold text-center">Submit Your Bid</h1>
      </div>
      <form className="card-body " onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <div className="w-1/2 space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Bid Amount"
                name="bidamount"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">DeadLine</span>
              </label>
              <input
                type="date"
                placeholder="DeadLine"
                name="deadline"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="w-1/2 space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={user.email}
                name="email"
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Owner Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={ownerEmail}
                name="jobowneremail"
                className="input input-bordered"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="form-control mt-6">
          <button
            disabled={user?.email === ownerEmail ? true : false}
            className="btn bg-[#14a800] text-white rounded-full  hover:text-black hover:border-[#14a800]"
          >
            Bid on the Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobDetails;
