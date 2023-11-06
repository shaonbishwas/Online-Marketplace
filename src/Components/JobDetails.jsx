import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const JobDetails = () => {
  const { user } = useAuth();
  console.log(user.email);
  const { id } = useParams();
  const jobs = [
    {
      id: 1,
      title: "Front-end Web Developer",
      deadline: "2023-12-01",
      postedDate: "2023-11-21",
      description:
        "We are looking for a skilled front-end web developer to create a responsive and visually appealing website for our business. The project involves HTML, CSS, and JavaScript development.",
      minimum_price: 500,
      maximum_price: 1000,
      category: "Web Development",
      buyer_email: "shaonbishwas01@gmail.com",
      status: "",
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      deadline: "2023-11-30",
      postedDate: "2023-11-19",
      description:
        "We need a digital marketing expert to run online advertising campaigns, manage social media accounts, and optimize our website for SEO. Proven experience in digital marketing is a must.",
      minimum_price: 800,
      maximum_price: 1500,
      category: "Digital Marketing",
      buyer_email: "shaonbishwas01@gmail.com",
      status: "",
    },
    {
      id: 3,
      title: "Graphics Designer for Brand Logo",
      deadline: "2023-12-10",
      postedDate: "2023-11-21",
      description:
        "We are seeking a talented graphics designer to create a unique and memorable logo for our new brand. The logo should reflect our brand identity and values.",
      minimum_price: 200,
      maximum_price: 400,
      category: "Graphics",
      buyer_email: "shaonbishwas01@gmail.com",
      status: "",
    },
  ];

  const selectedjob = jobs?.find((j) => {
    return j.id == id;
  });

console.log(user)
  const {
    title,
    description,
    postedDate,
    deadline,
    minimum_price,
    maximum_price,
    buyer_email,
  } = selectedjob;
  return (
    <div className="my-20">
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
          <span className="text-lg font-bold">{postedDate}</span>
          <p className="text-sm text-gray-500">Posted Date</p>
        </div>
        <div>
          <span className="text-lg font-bold">{deadline}</span>
          <p className="text-sm text-gray-500">DeadLine</p>
        </div>
        <div>
          <span className="text-lg font-bold">
            ${minimum_price}-${maximum_price}
          </span>
          <p className="text-sm text-gray-500">Price Range</p>
        </div>
        <span className="flex items-center">
          <FaLocationDot className="text-2xl"></FaLocationDot>
          <span className="text-lg font-bold">Remote</span>
        </span>
      </div>

      <div className="mt-16">
        <h1 className="text-3xl font-semibold text-center">Submit Your Bid</h1>
      </div>
      <form className="card-body ">
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
                defaultValue={buyer_email}
                name="jobowneremail"
                className="input input-bordered"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="form-control mt-6">
          <button
            disabled={user?.email === buyer_email ? true : false}
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
