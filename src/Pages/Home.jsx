import { useEffect, useState } from "react";
import Job from "../Components/Job";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import banner from "../assets/img/people-3338167_1920.jpg";
import banner2 from "../assets/img/desola-lanre-ologun-7d4LREDSPyQ-unsplash.jpg";
const Home = () => {
  const [jobs, setJobs] = useState(null);
  const [category, setCategory] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://online-marketplace-zeta.vercel.app/api/v1/all-jobs?category=${category}`
      )
      .then((res) => setJobs(res.data));
  }, [category]);
  return (
    <div>
      <div className="relative h-screen">
        <img src={banner} alt="" className="h-full w-full" />
        <div className="absolute top-0 bg-[#000000a8] text-white h-full w-full">
          <div className="w-1/2 flex flex-col justify-center h-full ml-10 space-y-4">
            <h1 className="text-6xl mb-5 font-bold">
              Chose the Right Job, Right Pathway
            </h1>
            <div>
              <input
                type="text"
                placeholder="Search any Job...."
                className="py-2 pr-20 pl-2"
              />
              <input type="submit" className="bg-[#14a800] py-2 px-2" />
            </div>
            <div>
              <p className="text-xl mb-2">Categories :</p>
              <span className="border-2 rounded-full px-2">
                Web Development
              </span>
              <span className="border-2 rounded-full px-2">
                Graphics Design
              </span>
              <span className="border-2 rounded-full px-2">
                Digital Marketing
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen relative">
        <img src={banner2} alt="" className="h-full w-full" />
        <div className="absolute bg-[#000000a5]  h-full w-full top-0 text-white flex p-10">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-8xl font-bold">Find talent your way</h1>
            <p className="mt-8 text-lg font-semibold">
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
          </div>
          <div className="w-1/2 flex flex-col  items-center">
            <div className="bg-[#14a800] p-5 rounded-lg w-[430px] space-y-6 my-auto cursor-pointer hover:bg-white hover:text-[#14a800]">
              <h1 className="text-4xl font-semibold">
                Post a job and hire a pro
              </h1>
              <p className="text-lg font-semibold font-sans">
                Talent Marketplace -
              </p>
            </div>
            <div className="bg-[#14a800] p-5 rounded-lg w-[430px] space-y-6 my-auto cursor-pointer hover:text-[#14a800] hover:bg-white">
              <h1 className="text-4xl font-semibold">
                Browse and buy projects
              </h1>
              <p className="text-lg font-semibold font-sans">
                Project Catalog -
              </p>
            </div>
            <div className="bg-[#14a800] p-5 rounded-lg w-[430px] space-y-6 my-auto cursor-pointer hover:text-[#14a800] hover:bg-white">
              <h1 className="text-4xl font-semibold">
                Get advice from an <br /> industry expert
              </h1>
              <p className="text-lg font-semibold font-sans">Consultations</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory("")}>All</Tab>
          <Tab onClick={() => setCategory("Web Development")}>
            Web Development
          </Tab>
          <Tab onClick={() => setCategory("Graphics Design")}>
            Graphics Design
          </Tab>
          <Tab onClick={() => setCategory("Digital Marketing")}>
            Digital Marketing
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col ">
            {jobs?.map((job, index) => (
              <Job key={index} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col ">
            {jobs?.map((job, index) => (
              <Job key={index} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col ">
            {jobs?.map((job, index) => (
              <Job key={index} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col ">
            {jobs?.map((job, index) => (
              <Job key={index} job={job}></Job>
            ))}
          </div>
        </TabPanel>
      </Tabs>
      {/* <div className="flex flex-col ">
        {jobs?.map((job, index) => (
          <Job key={index} job={job}></Job>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
