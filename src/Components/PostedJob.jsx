import PropTypes from "prop-types";

export default function PostedJob({ job }) {
  const {
    title,
    category,
    description,
    ownerEmail,
    minimumPrice,
    maximumPrice,
    postedDate,
    expiryDate,
  } = job;
  return (
    <>
      <div>
        <div className="border-2 rounded-sm p-5 space-y-2">
          <p>{category}</p>
          <h1 className="text-4xl  font-bold text-gray-400 ">{title}</h1>
          <p className="text-sm">Job Owner : {ownerEmail}</p>
          <div className="flex gap-5">
            <div>
              <p className="text-sm">Price Range</p>
              <p className="text-lg">
                ${minimumPrice} - ${maximumPrice}
              </p>
            </div>
            <div>
              <p className="text-sm">Posted Date</p>
              <p className="text-lg">{postedDate}</p>
            </div>
            <div>
              <p className="text-sm">Deadline</p>
              <p className="text-lg">{expiryDate}</p>
            </div>
          </div>
          <p>{description.slice(0, 100)}..</p>
          <div className="flex gap-5 md:w-1/2 py-2">
            <button className="font-semibold text-green-500">UPDATE</button>
            <button className="font-semibold text-red-500">DELETE</button>
          </div>
        </div>
      </div>
    </>
  );
}
PostedJob.propTypes = {
  job: PropTypes.object,
};
