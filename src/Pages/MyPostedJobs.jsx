import { useEffect, useState } from "react";
import axios from "axios";
import PostedJob from "../Components/PostedJob";
import useAuth from "../Hooks/useAuth";
const MyPostedJobs = () => {
  const [jobs, setJobs] = useState();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://online-marketplace-zeta.vercel.app/api/v1/all-jobs?email=${user.email}`
      )
      .then((res) => setJobs(res.data));
  }, [user.email]);
  return (
    <div className="grid grid-cols-2 gap-5 my-10">
      {jobs?.map((job) => (
        <PostedJob key={job._id} job={job}></PostedJob>
      ))}
    </div>
  );
};

export default MyPostedJobs;
