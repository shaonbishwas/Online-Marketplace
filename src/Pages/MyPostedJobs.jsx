import { useEffect, useState } from "react";
import axios from "axios";
import PostedJob from "../Components/PostedJob";
import useAuth from "../Hooks/useAuth";
const MyPostedJobs = () => {
  const [jobs, setJobs] = useState();
  const { user } = useAuth();

  useEffect(() => {
    document.title = "Worknest | My posted jobs"
    axios
      .get(`http://localhost:5000/api/v1/all-jobs?email=${user.email}`)
      .then((res) => setJobs(res.data));
  }, [user.email]);
  if (!jobs) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-2 gap-10 my-20 md:max-w-[1400px] mx-auto">
      {jobs?.map((job) => (
        <PostedJob key={job._id} job={job}></PostedJob>
      ))}
    </div>
  );
};

export default MyPostedJobs;
