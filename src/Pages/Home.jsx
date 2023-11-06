import { useEffect, useState } from "react";
import Job from "../Components/Job";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Home = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
      <div className="flex flex-col ">
        {jobs?.map((job, index) => (
          <Job key={index} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Home;
