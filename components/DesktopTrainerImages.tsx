import type { NextPage } from "next";

type DesktopTrainerImagesType = {
  trainerImage?: string;
  trainerName?: string;
  trainerType?: string;
};

const DesktopTrainerImages: NextPage<DesktopTrainerImagesType> = ({
  trainerImage,
  trainerName,
  trainerType,
}) => {
  return (
    <div className="self-stretch relative h-auto aspect-[1.33] text-left text-xl text-white font-poppins md:hidden">
      <div className="absolute h-[42.83%] w-[26.75%] top-[21.47%] right-[73.25%] bottom-[35.71%] left-[0%]">
        <img
          className="absolute h-[83.38%] w-full top-[0%] right-[0%] bottom-[16.62%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={trainerImage}
        />
        <div className="absolute bottom-[0px] left-[0px] w-[196px] h-11">
          <div className="absolute bottom-[19px] left-[0px] tracking-[0.5px] leading-[25px] font-medium">
            {trainerName}
          </div>
          <div className="absolute bottom-[0px] left-[0px] text-sm tracking-[0.5px] leading-[14px] opacity-[0.5]">
            {trainerType}
          </div>
        </div>
      </div>
      <div className="absolute h-[42.83%] w-[26.75%] top-[57.17%] right-[46.5%] bottom-[0%] left-[26.75%]">
        <img
          className="absolute h-[83.38%] w-full top-[0%] right-[0%] bottom-[16.62%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-147@2x.png"
        />
        <div className="absolute bottom-[0px] left-[0px] w-[157px] h-11">
          <div className="absolute bottom-[19px] left-[0px] tracking-[0.5px] leading-[25px] font-medium">
            Karen Summer
          </div>
          <div className="absolute bottom-[0px] left-[0px] text-sm tracking-[0.5px] leading-[14px] opacity-[0.5]">
            Trainer
          </div>
        </div>
      </div>
      <div className="absolute h-[64.29%] w-[46.5%] top-[0%] right-[0%] bottom-[35.71%] left-[53.5%]">
        <img
          className="absolute h-[88.93%] w-full top-[0%] right-[0%] bottom-[11.07%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-146@2x.png"
        />
        <div className="absolute bottom-[0px] left-[20px] w-[158px] h-11">
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

export default DesktopTrainerImages;
