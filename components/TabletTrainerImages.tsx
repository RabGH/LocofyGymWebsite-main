import type { NextPage } from "next";

type TabletTrainerImagesType = {
  trainerImage?: string;
  trainerName?: string;
  trainerType?: string;
};

const TabletTrainerImages: NextPage<TabletTrainerImagesType> = ({
  trainerImage,
  trainerName,
  trainerType,
}) => {
  return (
    <div className="self-stretch relative h-auto hidden aspect-[0.67] text-left text-xl text-white font-poppins md:flex md:aspect-[0.67] md:h-auto sm:hidden">
      <div className="absolute h-[35.29%] w-[50.71%] top-[0%] right-[49.29%] bottom-[64.71%] left-[0%] hidden md:flex md:aspect-[0.67] md:h-auto">
        <img
          className="absolute h-[83.38%] w-full top-[0%] right-[0%] bottom-[16.62%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={trainerImage}
        />
        <div className="absolute bottom-[-0.18px] left-[0px] w-[196px] h-11">
          <div className="absolute bottom-[19px] left-[0px] tracking-[0.5px] leading-[25px] font-medium">
            {trainerName}
          </div>
          <div className="absolute bottom-[0px] left-[0px] text-sm tracking-[0.5px] leading-[14px] opacity-[0.5]">
            {trainerType}
          </div>
        </div>
      </div>
      <div className="absolute h-[34.08%] w-[49.12%] top-[65.92%] right-[49.29%] bottom-[0%] left-[1.59%] hidden md:flex md:aspect-[0.67] md:h-auto">
        <img
          className="absolute h-[83.38%] w-full top-[0%] right-[0%] bottom-[16.62%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-1471@2x.png"
        />
        <div className="absolute bottom-[0.11px] left-[0px] w-[157px] h-11">
          <div className="absolute bottom-[19px] left-[0px] tracking-[0.5px] leading-[25px] font-medium">
            Karen Summer
          </div>
          <div className="absolute bottom-[0px] left-[0px] text-sm tracking-[0.5px] leading-[14px] opacity-[0.5]">
            Trainer
          </div>
        </div>
      </div>
      <div className="absolute h-[41.04%] w-[49.29%] top-[29.42%] right-[0%] bottom-[29.53%] left-[50.71%] hidden md:flex md:aspect-[0.67] md:h-auto">
        <img
          className="absolute h-[88.93%] w-full top-[0%] right-[0%] bottom-[11.07%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-1461@2x.png"
        />
        <div className="absolute bottom-[0.21px] left-[20px] w-[158px] h-11">
          <div className="absolute bottom-[19px] left-[0px] tracking-[0.5px] leading-[25px] font-medium">
            Jonathan Wise
          </div>
          <div className="absolute bottom-[0px] left-[0px] text-sm tracking-[0.5px] leading-[14px] opacity-[0.5]">
            Trainer
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletTrainerImages;
