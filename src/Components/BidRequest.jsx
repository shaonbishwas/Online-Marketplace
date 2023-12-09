import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import Stepper from "./Progressbar/Stepper";

const BidRequest = ({ bid, index }) => {
  const [status, setStatus] = useState(bid.status);
  const handleAccept = () => {
    axios
      .put(
        `https://online-marketplace-zeta.vercel.app/api/v1/status-update/${bid._id}?status=in progress`
      )
      .then((res) => console.log(res.data));
    setStatus("in progress");
  };
  const handleReject = () => {
    axios
      .put(
        `https://online-marketplace-zeta.vercel.app/api/v1/status-update/${bid._id}?status=rejected`
      )
      .then((res) => console.log(res.data));
    setStatus("rejected");
  };
  return (
    <tr className="">
      <td>{index + 1}</td>
      <td>{bid.title}</td>
      <td>{bid.owner_email}</td>
      <td>{bid.deadline}</td>
      <td>${bid.price}</td>
      <td>{status}</td>
      <td
        className={
          status === "pending"
            ? "text-green-500 text-center cursor-pointer"
            : "hidden"
        }
        onClick={handleAccept}
      >
        Accept
      </td>
      {/* <Stepper></Stepper> */}
      <td
        className={
          status === "pending"
            ? "text-red-500 text-center cursor-pointer"
            : "hidden"
        }
        onClick={handleReject}
      >
        Rejected
      </td>
      <td className={status === "in progress" ? "w-20" : "hidden"}>
        {/* <Progressbar></Progressbar> */}
        <Stepper></Stepper>
      </td>
    </tr>
  );
};

BidRequest.propTypes = {
  bid: PropTypes.object,
  index: PropTypes.number,
};

export default BidRequest;
