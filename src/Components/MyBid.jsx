import PropTypes from "prop-types";
import { useState } from "react";

const MyBid = ({ bid }) => {
  const [status, setStatus]= useState(bid.status)
  const handleComplete = () => {
    setStatus('complete')
    console.log("hi from complete");
  };
  return (
    <tr className="">
      <td>{bid.title}</td>
      <td>{bid.owner_email}</td>
      <td>{bid.deadline}</td>
      <td className={status === 'rejected'? 'text-red-500':''}>{bid.status === 'rejected'? 'Canceled': status}</td>
      <td
        className={status === 'in progress' ? 'bg-green-500 text-center text-white cursor-pointer': 'hidden'}
        onClick={handleComplete} 
      >
        Complete
      </td>
    </tr>
  );
};

MyBid.propTypes = {
  bid: PropTypes.object,
};

export default MyBid;
