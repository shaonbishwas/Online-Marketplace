import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import MyBid from "../Components/MyBid";

const MyBids = () => {
  const [bids, setBids] = useState(null);
  const { user } = useAuth();
  const [sortMethod, setSortmethod] = useState("");
  useEffect(() => {
    document.title = "Worknest | My Bids";
    axios
      .get(
        `http://localhost:5000/api/v1/my-bids?email=${user.email}&sort=${sortMethod}`
      )
      .then((res) => setBids(res.data));
  }, [user.email,sortMethod]);
  // console.log(bids);
  if (!bids) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  const handleSelectChange = (event) => {
    setSortmethod(event.target.value);
  };
  console.log(sortMethod)
  return (
    <>
      <div className="md:w-[90%] lg:max-w-[1400px] mx-auto flex gap-5">
        <h1>Filter :</h1>
        <select onChange={handleSelectChange} name="" id="" className="border-2">
          <option value="">Default</option>
          <option value="1">Active works</option>
          <option value="-1">Offline works</option>
        </select>
      </div>
      <div className="overflow-x-auto my-10 md:min-h-[300px] lg:max-w-[1400px] mx-auto md:w-[90%] border">
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
    </>
  );
};

export default MyBids;
