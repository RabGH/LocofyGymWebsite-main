import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import HamburgerMenu from "./MobileMenu";

const Navbar: NextPage = () => {
  return (
    <nav className="z-50 top-0 m-0 self-stretch bg-black flex flex-col py-[60px] px-[70px] items-start justify-start text-left text-lg text-white font-poppins lg:pl-[109px] lg:pr-[109px] lg:box-border md:pl-[75px] md:pr-[75px] md:box-border sm:pl-10 sm:pr-10 sm:box-border">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="relative tracking-[1px] leading-[22px] font-semibold">
          <a
            href="#hero"
            className="no-underline text-white hover:text-gray-400"
          >
            WORKOUT
          </a>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <nav className="m-0 flex flex-row items-center justify-center gap-[50px] text-left text-xs text-white font-poppins md:hidden">
            <div className="relative tracking-[1.5px] leading-[12px] opacity-[0.67]">
              <a
                href="#exercise"
                className="no-underline text-white hover:text-gray-400"
              >
                EXERCISES
              </a>
            </div>
            <div className="relative tracking-[1.5px] leading-[12px] opacity-[0.67]">
              <a
                href="#trainers"
                className="no-underline text-white hover:text-gray-400"
              >
                TRAINERS
              </a>
            </div>
            <div className="relative tracking-[1.5px] leading-[12px] opacity-[0.67]">
              <a
                href="#categories"
                className="no-underline text-white hover:text-gray-400"
              >
                PRICING
              </a>
            </div>
            <div className="relative tracking-[1.5px] leading-[12px] opacity-[0.7]">
              <a
                href="#subscribe"
                className="no-underline text-white hover:text-gray-400"
              >
                SUBSCRIBE
              </a>
            </div>
          </nav>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
