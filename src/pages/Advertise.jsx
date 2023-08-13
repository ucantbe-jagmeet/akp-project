import advertise from "../assets/images/advertisement.png";

const Advertise = () => {
  return (
    <div className="h-auto py-10 grid font-poppins grid-cols-11  px-10">
      <div className="col-span-6 ">
        <h2 className="text-[5rem] font-semibold text-gray-600">
          advertising <br /> optimised
        </h2>
        <img src={advertise} alt="" className="mt-10" />
      </div>
      <div className="col-span-5 pl-20">
        <div className="flex items-center">
          <h1 className="h-24 w-24 flex items-center justify-center rounded-full border-2 border-black text-4xl mr-10">
            {" "}
            01
          </h1>
          <div>
            <h2 className="text-[4rem]">apply</h2>
            <p className="w-80 font-semibold text-gray-500">
              Select a plan and schedule an onboarding call to get started
            </p>
          </div>
        </div>
        <div className="border-l-4 border-dashed border-black h-72 ml-12"></div>
        {/* second div */}
        <div className="flex items-center">
          <h1 className="h-24 w-24  flex items-center justify-center rounded-full border-2 border-black text-4xl mr-10">
            02
          </h1>
          <div>
            <h2 className="text-[4rem]">review</h2>
            <p className="w-80 font-semibold text-gray-500">
              We&#39;ll review your request and get back to you in 2-3 business
              days an average
            </p>
          </div>
        </div>
        <div className="border-l-4 border-dashed border-black h-72 ml-12"></div>

        {/* third div */}
        <div className="flex items-center">
          <h1 className="h-24 w-24  flex items-center justify-center rounded-full border-2 border-black text-4xl mr-10">
            03
          </h1>
          <div>
            <h2 className="text-[4rem]">iterate</h2>
            <p className="w-80 font-semibold text-gray-500">
              We&#39;ll revise and continuously iterate to get better results,
              everytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
