"use client";
import React, { useState } from "react";
import Image from "next/image";
// react icons
import { IoIosArrowDown } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import logo from "../assets/icon/logo.png";
import Link from "next/link";

const NavBar = () => {
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative h-auto font-sans">
      {/* logo */}
      <Image src={logo} alt="logo" width={100} height={100} />

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] md:flex hidden">
        <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
          Home
        </li>

        {/* apps mega menu */}
        <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
          <Link href="/app" className="flex items-center gap-[3px]">
            Apps
          </Link>
        </li>

        {/* web ui menu */}
        <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
          Web Ui
        </li>
      </ul>

      <div className="flex items-center gap-[10px]">
        {/* Removed search bar */}
        <a
          href="https://discord.gg/RreVx3gMaj"
          target="_blank"
          rel="noopener noreferrer">
          <FaDiscord className="text-[1.6rem] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 " />
        </a>
        <a
          href="https://github.com/mozaddedalfeshani/mclxhub"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block">
          <TbBrandGithubFilled className="text-[1.6rem] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500" />
        </a>
        <CiMenuFries
          className="text-[1.6rem] cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
        <ul className="items-start gap-[20px] text-[1rem] flex flex-col">
          <li className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
            Home
          </li>

          <li
            onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
            About Us
            <IoIosArrowDown
              className={`${
                mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"
              } group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>

          {/* about us mega menu */}
          <div
            className={`${
              mobileAboutUsOpen ? "block" : "hidden"
            } group font-[500] ml-6`}>
            <ul className="flex flex-col gap-[7px]">
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[0.9rem]" /> Company Details
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[0.9rem]" /> Company Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[0.9rem]" /> Team Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[0.9rem]" /> Office Tour
              </li>
            </ul>

            <div className="flex flex-col gap-[10px] mt-4">
              <div className="flex items-center gap-[10px] text-[1rem]">
                <MdDashboardCustomize className="bg-blue-200 p-1.5 rounded-full text-[2rem]" />
                Full Customize
              </div>

              <div className="flex items-center gap-[10px] text-[1rem]">
                <CgIfDesign className="bg-orange-200 p-1.5 rounded-full text-[2rem]" />
                Modern Design
              </div>

              <div className="flex items-center gap-[10px] text-[1rem]">
                <FaCubesStacked className="bg-yellow-200 p-1.5 rounded-full text-[2rem]" />
                Well Stacktured
              </div>
            </div>
          </div>

          <li
            onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
            Service
            <IoIosArrowDown
              className={`${
                mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"
              } group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>

          {/* service mega menu */}
          <div
            className={`${
              mobileServiceOpen ? "hidden" : "block"
            } font-[500] ml-6`}>
            <ul className="flex flex-col gap-[7px]">
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[0.9rem]" /> Company Details
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[0.9rem]" /> Company Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[0.9rem]" /> Team Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[0.9rem]" /> Office Tour
              </li>
            </ul>

            <div className="flex flex-col gap-[10px] mt-4">
              <div className="flex items-center gap-[10px] text-[1rem]">
                <MdDashboardCustomize className="bg-blue-200 p-1.5 rounded-full text-[2rem]" />
                Full Customize
              </div>

              <div className="flex items-center gap-[10px] text-[1rem]">
                <CgIfDesign className="bg-orange-200 p-1.5 rounded-full text-[2rem]" />
                Modern Design
              </div>

              <div className="flex items-center gap-[10px] text-[1rem]">
                <FaCubesStacked className="bg-yellow-200 p-1.5 rounded-full text-[2rem]" />
                Well Stacktured
              </div>
            </div>
          </div>
        </ul>
      </aside>
    </nav>
  );
};

export default NavBar;
