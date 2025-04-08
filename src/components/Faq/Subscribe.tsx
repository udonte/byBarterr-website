const Subscribe = () => {
  return (
    <section className="px-4 py-8 lg:px-24 lg:py-24 ">
      <div className="mx-auto w-full md:w-1/2 text-center">
        <h1 className="text-3xl font-bold mb-6 text-[#1D242D]">
          Subscribe to our Newsletter
        </h1>
        <div className=" flex flex-col md:flex-row items-center gap-2 ">
          <input
            type="text"
            placeholder="Search bybarterr"
            className="w-full md:w-4/6 py-4 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none "
          />
          <button className="bg-primary-black text-white rounded-md w-full md:w-2/6 py-4 px-8 font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
