import Button from "../components/Button";

const Hero3 = () => {
  return (
    <div className="flex flex-col items-center justify-center font-poppins">
      <h2 className="text-5xl font-semibold text-gray-700">
        Still not convinced?
      </h2>
      <p className="w-[35%] text-center mt-2">
        Schedule a call to learn more about how we can change the way you view
        sourcing your ads...forever.
      </p>
      <div className="my-6">
        <Button text="schedule a call" />
      </div>
    </div>
  );
};

export default Hero3;
