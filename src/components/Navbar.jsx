import Button from "./Button";
import logo1 from "../assets/images/logo1.png";

const navbarData = [
  {
    id: 0,
    text: "How it works",
  },
  {
    id: 1,
    text: "Services",
  },
  {
    id: 2,
    text: "Contact",
  },
];

const Navbar = () => {
  return (
    <main className="h-[5.5rem] bg-white  flex items-center justify-between px-5 my-10 w-[730px] mx-auto rounded-3xl">
      <div className="">
        <img src={logo1} alt="" className="h-16 " />
      </div>
      <div className="flex w-[50%] justify-between">
        {navbarData.map((item, index) => {
          const { text } = item;
          return (
            <h2 key={index} className=" tracking-wide w-fit font-poppins ">
              {text}
            </h2>
          );
        })}
      </div>
      <div>
        <Button text="Get Started" />
      </div>
    </main>
  );
};

export default Navbar;
