import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Job = ({job}) => {
  const {
    _id,
    title,
    expiryDate,
    postedDate,
    description,
    minimum_price,
    maximum_price,
  } = job;
  return (
    <div className="space-y-3 border p-10">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <span className="bg-gray-200 rounded-full px-3 text-sm">
        Price : ${minimum_price}-${maximum_price}
      </span>
      <div className="gap-2 flex">
        <span className="bg-gray-200 rounded-full px-2 text-sm">
          Posted : {postedDate}
        </span>
        <span className="text-sm bg-gray-200 rounded-full px-3">
          Deadline : {expiryDate}
        </span>
      </div>
      <p>{description}</p>
      <Link
        className="btn bg-[#14a800] text-white rounded-full  hover:text-black hover:border-[#14a800]"
        to={`/jobdetails/${_id}`}
      >
        Bid Now
      </Link>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
