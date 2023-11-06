const AddJob = () => {
  return (
    <div className="my-16">
      <h1 className="text-center text-3xl font-bold">Add A New Job</h1>
      <form className="card-body">
        <div className="flex gap-5">
          <div className="w-1/2 space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                placeholder="Job Title"
                name="jobtitle"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">DeadLine</span>
              </label>
              <input
                type="date"
                placeholder="DeadLine"
                name="deadline"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="w-1/2 space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price Range</span>
              </label>
              <div className="flex justify-evenly">
                <input
                  type="number"
                  placeholder="Minimum"
                  name="minimum"
                  className="input input-bordered"
                  required
                />
                <p className="text-center ">To</p>
                <input
                  type="number"
                  placeholder="Maximum"
                  name="maximum"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#14a800] text-white rounded-full  hover:text-black hover:border-[#14a800]">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
