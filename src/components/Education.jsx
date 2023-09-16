const Education = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Education</h1>
      <div className="mt-5 border border-red-500 rounded shadow-lg hover:shadow-red-800">
        <div className="py-2.5 px-2.5">
          <p className="text-xl">
            Bachelor of Science (Hons) Information Technology
          </p>
          <p className="">London Metropolitian University</p>
          <p className="">Sept 2022 - 2025 (Expected)</p>
        </div>
      </div>
      <div className="mt-5 border border-red-500 rounded shadow-lg hover:shadow-red-800">
        <div className="py-2.5 px-2.5">
          <p className="text-xl">High School</p>
          <p>St. Xavier's School, Jawalakhel</p>
          <p>Graduated 2022</p>
        </div>
      </div>
      <div className="mt-5 border border-red-500 rounded shadow-lg hover:shadow-red-800">
        <div className="py-2.5 px-2.5">
          <p className="text-xl">Secondary Education</p>
          <p>Aster Academy (Now: United U. School)</p>
          <p>Graduated 2020</p>
        </div>
      </div>
    </>
  );
};

export default Education;
