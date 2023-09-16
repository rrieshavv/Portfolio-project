const Project = () => {
  return (
    <>
      {/* <!-- mern projects  --> */}
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-5">MERN Projects</h3>
        <div className="flex gap-10 overflow-x-auto ">
          <a href="">
            <div className="flex w-52 justify-center p-5 border rounded border-orange-900 shadow-lg hover:shadow-orange-800 transition duration-300 ease-in-out">
              <p className="font-semibold text-xl">Blog App</p>
            </div>
          </a>
          <a href="">
            <div className="flex w-52 justify-center p-5 border rounded border-orange-900 shadow-lg hover:shadow-orange-800 transition duration-300 ease-in-out">
              <p className="font-semibold text-xl">Library Database</p>
            </div>
          </a>
        </div>
      </div>
      {/* <!-- python --> */}
      <div className="flex flex-col mt-5">
        <h3 className="text-2xl font-semibold mb-5">Python</h3>
        <div className="flex gap-10 overflow-x-auto ">
          <a href="">
            <div className="flex w-52 justify-center py-5 border rounded border-orange-900 shadow-lg hover:shadow-orange-800 transition duration-300 ease-in-out">
              <p className="font-semibold text-xl">Laptop Shop Portal</p>
            </div>
          </a>
        </div>
      </div>
      {/* <!-- java  --> */}
      <div className="flex flex-col mt-5">
        <h3 className="text-2xl font-semibold mb-5">Java</h3>
        <div className="flex gap-10 overflow-x-auto ">
          <a href="">
            <div className="flex w-52 justify-center py-5 border rounded border-orange-900 shadow-lg hover:shadow-orange-800 transition duration-300 ease-in-out">
              <p className="font-semibold text-xl">Bankcard System</p>
            </div>
          </a>
        </div>
      </div>
      {/* <!-- other --> */}
      <div className="flex flex-col mt-5">
        <h3 className="text-2xl font-semibold mb-5">Others</h3>
        <div className="flex gap-10 overflow-x-auto ">
          <a href="">
            <div className="flex w-52 justify-center py-5 border rounded border-orange-900 shadow-lg hover:shadow-orange-800 transition duration-300 ease-in-out">
              <p className="font-semibold text-xl">Bot Biruwa Web</p>
            </div>
          </a>
          <a href="">
            <div className="flex w-52 justify-center py-5 border rounded border-orange-900 shadow-lg hover:shadow-orange-800 transition duration-300 ease-in-out">
              <p className="font-semibold text-xl">More on GitHub...</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
