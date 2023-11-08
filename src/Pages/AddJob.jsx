import axios from "axios";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddJob = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.jobtitle.value;
    const description = form.description.value;
    const ownerEmail = user?.email;
    const category = form.category.value;
    const expiryDate = form.deadline.value;
    const minimumPrice = parseInt(form.minimum.value);
    const maximumPrice = parseInt(form.maximum.value);
    const postedDate = new Date().toLocaleString(undefined, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const job = {
      title,
      description,
      ownerEmail,
      category,
      expiryDate,
      postedDate,
      minimumPrice,
      maximumPrice,
      proposalsCount: 0,
    };
    axios
      .post("https://online-marketplace-zeta.vercel.app/api/v1/add-job", job)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: `Successfully bid submitted`,
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/mypostedjobs");
      });
  };
  return (
    <div className="my-16">
      <h1 className="text-center text-3xl font-bold">Add A New Job</h1>
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <div className="w-1/2 space-y-5 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="input input-bordered"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                placeholder="Job Title"
                name="jobtitle"
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
          <div className="w-1/2 space-y-5 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                id=""
                className="input input-bordered  p-3"
              >
                <option value="Web Development">Web Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price Range</span>
              </label>
              <div className="flex justify-evenly">
                <input
                  type="number"
                  placeholder="Minimum"
                  name="minimum"
                  className="input input-bordered"
                  required
                />
                <p className="text-center ">To</p>
                <input
                  type="number"
                  placeholder="Maximum"
                  name="maximum"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#14a800] text-white rounded-full  hover:text-black hover:border-[#14a800]">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
