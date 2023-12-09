import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import BidRequest from "../Components/BidRequest";

const BidRequests = () => {
  const [requests, setRequests] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    document.title = "Worknest | Bid Requests";
    axios
      .get(
        `https://online-marketplace-zeta.vercel.app/api/v1/bid-requests?email=${user.email}`
      )
      .then((res) => setRequests(res.data));
  }, [user.email]);
  if (!requests) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-infinity loading-lg "></span>
      </div>
    );
  }
  if (requests?.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="text-2xl font-bold text-gray-400 ">
          {" "}
          No Requests Available
        </span>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto my-10 md:min-h-[300px] md:max-w-[1400px] mx-auto md:w-[90%] border">
      <table className="table table-md table-pin-rows table-pin-cols font-bold  mx-auto">
        <thead className="">
          <tr>
            <td>SL. NO.</td>
            <td>Job Title</td>
            <td>Buyer Email</td>
            <td>Deadline</td>
            <td>Price</td>
            <td>Status</td>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {requests?.map((bid, i) => (
            <BidRequest key={bid._id} bid={bid} index={i}></BidRequest>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidRequests;
