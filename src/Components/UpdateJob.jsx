import { useLoaderData } from "react-router-dom";


const UpdateJob = () => {
    const job = useLoaderData()
    console.log(job)
    return (
        <div>
            <h1>{job.title}</h1>
        </div>
    );
};

export default UpdateJob;