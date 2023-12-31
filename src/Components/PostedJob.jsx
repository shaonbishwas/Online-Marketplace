import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function PostedJob({ job }) {
  const {
    _id,
    title,
    category,
    description,
    ownerEmail,
    minimumPrice,
    maximumPrice,
    postedDate,
    expiryDate,
  } = job;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://online-marketplace-zeta.vercel.app/api/v1/delete-job/${_id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Success",
                text: "Successfully deleted",
                icon: "success",
                confirmButtonText: "Continue",
              });
              window.location.reload();
            }
          });
      }
    });
  };
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
            <Link
              to={`/updatejob/${_id}`}
              className="font-semibold text-green-500"
            >
              UPDATE
            </Link>
            <button
              className="font-semibold text-red-500"
              onClick={handleDelete}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
PostedJob.propTypes = {
  job: PropTypes.object,
};
