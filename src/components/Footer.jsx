import Button from "./Button";
import img1 from "../assets/images/logo1.png";

const Footer = () => {
  return (
    <div className="h-[70vh] bg-[--primary-black2] grid grid-cols-2 mt-24">
      <div className="flex flex-col items-start text-white justify-around px-10">
        <h2 className="text-5xl font-semibold tracking-wide">
          Lets Work <br /> together
        </h2>
        <div className="scale-125 ml-5">
          <Button text="Get Started" />
        </div>
      </div>
      <div className="flex flex-col items-start text-white justify-around px-10">
        <div className="text-3xl">
          <h1 className="font-bold tracking-wider">Menu</h1>
          <div className="flex flex-col text-xl text-[#CBBFAC]">
            <h2 className="pt-2 tracking-wider font-semibold">How it Works</h2>
            <h2 className="pt-2 tracking-wider font-semibold">Services</h2>
            <h2 className="pt-2 tracking-wider font-semibold">Contact</h2>
          </div>
        </div>
        <div className="flex items-center">
          <img src={img1} alt="" className="h-20" />
          <h2 className="text-xl">X.com</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
