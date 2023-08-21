import type { NextPage } from "next";
import { useCallback } from "react";
import DesktopTrainerImages from "./DesktopTrainerImages";
import TabletTrainerImages from "./TabletTrainerImages";

type TrainersSectionType = {
  subtitle?: string;
};

const TrainersSection: NextPage<TrainersSectionType> = ({ subtitle }) => {
  return (
    <section className="self-stretch bg-black overflow-hidden flex flex-col py-[92px] px-0 items-center justify-center mt-[-1px] text-left text-xl text-white font-poppins lg:pl-[3px] lg:pr-[3px] lg:box-border md:pl-0 md:pr-0 md:box-border sm:pt-[92px] sm:pb-[92px] sm:box-border">
      <header className="self-stretch flex flex-col py-[49px] px-[89px] items-start justify-start text-left text-101xl text-white font-poppins lg:pl-[75px] lg:pr-[75px] lg:box-border md:pl-[55px] md:pr-[55px] md:box-border sm:pl-2.5 sm:pr-2.5 sm:box-border">
        <div className="self-stretch flex flex-row items-start justify-between lg:flex-col">
          <div className="relative w-[553.3px] h-[584.39px]">
            <img
              className="absolute top-[377.55px] left-[0px] w-[517.61px] h-[206.84px] sm:w-[360px]"
              alt=""
              src="/group-141.svg"
            />
            <h2 className="m-0 absolute top-[0px] left-[30.3px] text-inherit tracking-[-2px] leading-[120px] font-semibold font-inherit md:text-81xl sm:text-54xl sm:leading-[100px]">
              <p className="m-0">Workout</p>
              <p className="m-0">Program</p>
              <p className="m-0">Made</p>
              <p className="m-0">For You</p>
            </h2>
          </div>
          <div className="w-[622px] flex flex-col pt-[15px] px-2.5 pb-0 box-border items-start justify-start relative gap-[50px] text-6xl">
            <div className="relative tracking-[0.5px] leading-[50px] inline-block w-[558px] opacity-[0.7] z-[0] sm:text-6xl sm:text-left sm:w-[370px] sm:flex-1">
              {subtitle}
            </div>
            <button className="buttonStyles">
              <div className="relative text-lg tracking-[1px] leading-[22px] font-semibold font-poppins text-white text-left">
                <a href="#subscribe" className="no-underline text-white">
                  Get Started
                </a>
              </div>
            </button>
            <div className="absolute my-0 mx-[!important] top-[-102px] left-[-321.3px] bg-white w-[999px] h-[733px] opacity-[0.1] z-[2]" />
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-col py-0 px-[119px] items-start justify-start gap-[10px] mt-[-134px] lg:pl-[105px] lg:pr-[105px] lg:box-border md:pl-[55px] md:pr-[55px] md:box-border md:mt-0 sm:hidden sm:pl-[25px] sm:pr-[25px] sm:box-border">
        <DesktopTrainerImages
          trainerImage="/group-142@2x.png"
          trainerName="Samantha William"
          trainerType="Trainer"
        />
        <TabletTrainerImages
          trainerImage="/group-1421@2x.png"
          trainerName="Samantha William"
          trainerType="Trainer"
        />
      </div>
    </section>
  );
};

export default TrainersSection;
