/* eslint-disable no-unused-vars */
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import main from "../assets/images/main.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Outreach", "Marketing"],
    loop: 0,
  });

  return (
    <main className=" my-20 flex items-center justify-center flex-col">
      <div className="h-fit flex items-end">
        <div className="text-end text-[5rem] font-semibold  text-gray-700 mr-7 ">
          <h2>We&#39;d love to help</h2>
          <h2>Solve Your</h2>
        </div>
        <div className="w-56  mb-5 ">
          <h2>
            We know that you care about your business as much as we do and
            we&#39;re commited to helping you grow
          </h2>
        </div>
      </div>
      <h2 className="text-[5rem] font-semibold  text-gray-700 mr-7 ">
        {text} Problems
      </h2>
      <div className="mt-20">
        <img src={main} alt="" className="scale-105" />
      </div>
    </main>
  );
};

export default Hero;
