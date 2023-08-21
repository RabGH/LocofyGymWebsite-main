import type { NextPage } from "next";
import Link from "next/link";

type HeroSectionType = {
  subtitle?: string;
  heroImage?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ subtitle, heroImage }) => {
  return (
    <section className=" bg-black flex flex-row py-[41px] pr-[22px] pl-[66px] items-center justify-center text-left text-3xs text-white font-poppins lg:flex-col lg:pl-[60px] lg:box-border md:pl-10 md:box-border sm:pl-5 sm:box-border">
      <div className="flex-1 flex flex-col pt-0 px-0 pb-[86px] items-start justify-start gap-[31px] z-[2] lg:self-stretch">
        <div className="relative w-[329px] h-9">
          <div className="absolute top-[0px] left-[0px] rounded-181xl bg-white w-[329px] h-9 opacity-[0.1]" />
          <div className="absolute top-[5px] left-[5px] rounded-181xl bg-mediumseagreen w-[46px] h-[26px]" />
          <div className="absolute top-[9px] left-[15px] tracking-[1.5px] leading-[18px] font-semibold">
            NEW
          </div>
          <div className="absolute top-[9px] left-[66px] text-xs tracking-[0.5px] leading-[18px] opacity-[0.8] sm:text-3xs sm:leading-[16px]">
            High Intensity workout to burn calories
          </div>
        </div>
        <header className="self-stretch flex flex-col items-start justify-start gap-[46px] text-left text-181xl text-white font-poppins">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-2px] leading-[170px] font-semibold font-inherit lg:text-131xl lg:leading-[130px] md:text-81xl md:leading-[80px] sm:text-41xl sm:leading-[48px]">
            <p className="m-0">{`Cardio `}</p>
            <p className="m-0">Exercise</p>
          </h1>
          <div className="relative text-base tracking-[0.5px] leading-[29px] inline-block w-[600px] opacity-[0.5] md:max-w-[90%]">
            {subtitle}
          </div>
          <div className="w-[430px] flex flex-row items-start justify-start gap-[30px] md:max-w-[90%]">
            <button className="buttonStyles">
              <div className="relative text-lg tracking-[1px] leading-[22px] font-semibold font-poppins text-white text-left sm:text-mini sm:leading-[20px]">
                <a href="#subscribe" className="no-underline text-white">
                  Get Started
                </a>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-6 px-2.5 bg-gray-200 flex-1 rounded-3xs flex flex-row items-center justify-center hover:bg-gray-100">
              <div className="relative text-lg tracking-[1px] leading-[22px] font-semibold font-poppins text-white text-left sm:text-mini sm:leading-[20px]">
                Preview
              </div>
            </button>
          </div>
        </header>
      </div>
      <img
        className="relative w-[651px] h-[717px] object-cover ml-[-141px] lg:max-w-[90%] lg:h-auto lg:ml-0"
        alt=""
        src={heroImage}
      />
    </section>
  );
};

export default HeroSection;
