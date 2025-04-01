"use client";
import React from "react";
import hero_Image from "../assets/images/hero_Image.png";
import Image from "next/image";
import { motion } from "framer-motion"; // Ensure correct import

const Hero = () => {
  return (
    <div className="w-full rounded-md relative  bg-black font-sans">
      <header className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">
        <div className="w-full lg:w-[45%]">
          <p>Hi there!</p>
          <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">
            <span className="text-[#3498DB]">MCLX Hub</span> is here to be your
            assistance
          </h1>
          {/* <p className="mt-2 text-[1rem]">
            I am here ready to help you in making creative digital products
          </p> */}
          <button className="btn btn-info  bg-[#3498DB] text-black font-sans px-4 py-2 rounded-md mt-4 ">
            Get Started
          </button>
        </div>

        <div className="">
          <motion.div
            animate={{
              x: [0, 10, 0, -10, 0], // Horizontal movement
              y: [0, -10, 0, 10, 0], // Vertical movement
              borderRadius: ["0%", "50%", "25%", "50%", "0%"], // Continuous border radius animation
            }}
            transition={{
              duration: 4, // Duration of one cycle
              repeat: Infinity, // Infinite loop
            }}
            className="rounded-lg  flex items-center justify-center">
            <Image
              width={400}
              height={400}
              src={hero_Image}
              alt="image"
              className="w-full rounded-tr-[400px] rounded-bl-[400px]  rounded-tl-xl rounded-b-md  h-1/5 "
            />
          </motion.div>
        </div>
      </header>

      {/* right blur shadow */}
      <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
    </div>
  );
};

export default Hero;
