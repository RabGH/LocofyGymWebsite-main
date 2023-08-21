import type { NextPage } from "next";

type ExerciseCardType = {
  image?: string;
  title?: string;
  subTitle?: string;
  workoutTime?: string;
};

const ExerciseCard: NextPage<ExerciseCardType> = ({
  image,
  title,
  subTitle,
  workoutTime,
}) => {
  return (
    <a className="[text-decoration:none] relative w-[373px] h-[296px] text-left text-31xl text-white font-poppins">
      <img
        className="absolute top-[0px] left-[0px] w-[373px] h-[250px] object-cover"
        alt=""
        src={image}
      />
      <h2 className="m-0 absolute top-[222px] left-[20px] text-inherit tracking-[0.3px] leading-[45px] font-semibold font-inherit">
        {title}
      </h2>
      <p className="m-0 absolute top-[282px] left-[20px] text-smi tracking-[0.5px] leading-[14px] opacity-[0.67]">
        {subTitle}
      </p>
      <div className="absolute top-[221px] left-[301px] w-[72px] h-[29px] text-xl">
        <img
          className="absolute top-[0px] left-[0px] w-[72px] h-[29px]"
          alt=""
          src="/rectangle-10.svg"
        />
        <div className="absolute top-[10px] left-[10px] tracking-[1.37px] leading-[19px] font-semibold">
          {workoutTime}
        </div>
      </div>
    </a>
  );
};

export default ExerciseCard;
