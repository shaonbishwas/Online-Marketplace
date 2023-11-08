import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import BidRequest from "../Components/BidRequest";

const BidRequests = () => {
  const [requests, setRequests] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(
        `https://online-marketplace-zeta.vercel.app/api/v1/bid-requests?email=${user.email}`
      )
      .then((res) => setRequests(res.data));
  }, [user.email]);
  if (!requests) {
    return (
      <div className="md:min-h-[300px] flex justify-center items-center">
        <p>no bid requests</p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto my-10 md:min-h-[300px] ">
      <table className="table table-md table-pin-rows table-pin-cols font-bold  mx-auto">
        <thead>
          <tr>
            <td>Job Title</td>
            <td>Buyer Email</td>
            <td>Deadline</td>
            <td>Price</td>
            <td>Status</td>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {requests?.map((bid) => (
            <BidRequest key={bid._id} bid={bid}></BidRequest>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidRequests;
