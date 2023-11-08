import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import MyBid from "../Components/MyBid";

const MyBids = () => {
  const [bids, setBids] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(
        `https://online-marketplace-zeta.vercel.app/api/v1/my-bids?email=${user.email}`
      )
      .then((res) => setBids(res.data));
  }, [user.email]);
  console.log(bids);
  if (!bids) {
    return (
      <div className="md:min-h-[300px] flex justify-center items-center">
        <p>no bids</p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto my-10 md:min-h-[300px] ">
      <table className="table table-md table-pin-rows table-pin-cols font-bold  mx-auto">
        <thead>
          <tr>
            <td>Job Title</td>
            <td>Owner Email</td>
            <td>Deadline</td>
            <td>Status</td>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {bids?.map((bid) => (
            <MyBid key={bid._id} bid={bid}></MyBid>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBids;
