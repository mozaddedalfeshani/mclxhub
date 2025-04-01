import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
import Image from "next/image";
import logo from "../assets/icon/logo.png";

const Footer = () => {
  return (
    <footer className="font-sans w-full p-3 md:p-4 relative">
      <div className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
        <Image src={logo} alt="logo" className="w-[150px] " />

        <p className=" text-center sm:text-start text-gray-400">
          A developer-friendly web helper from MCLX
        </p>

        <div className="flex gap-[15px] text-black mt-4">
          <a
            href="https://www.facebook.com/imurad.12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <CgFacebook />
          </a>
          <a
            href="https://twitter.com/murad_code"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsTwitter />
          </a>
          <a
            href="https://www.instagram.com/mozaddedalfeshani/"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/mozaddedalfeshani/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
            <BsLinkedin />
          </a>
        </div>
      </div>

      <div className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
        <p className="text-[0.9rem] text-gray-300">
          © 2021 All Rights Reserved
        </p>

        <SlArrowUp className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300" />
      </div>

      {/* Background images */}

      <img
        src="https://i.ibb.co/zNk7XT4/Rectangle-97.png"
        alt="background/image"
        className="absolute h-[50px] w-full bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl"
      />
      <img
        src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
        alt="background/image"
        className="absolute w-full h-[70px] bottom-0 left-0 right-0 z-10 rounded-b-xl"
      />
    </footer>
  );
};

export default Footer;
