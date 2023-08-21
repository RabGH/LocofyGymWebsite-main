import type { NextPage } from "next";
import ExerciseCard from "./ExerciseCard";

const ExercisesSection: NextPage = () => {
  return (
    <section className="self-stretch bg-black overflow-hidden flex flex-col py-[59px] px-[120px] items-start justify-start mt-[-1px] md:pl-20 md:pr-20 md:box-border sm:pl-10 sm:pr-10 sm:box-border">
      <div
        className="self-stretch flex flex-col items-center justify-center gap-[50px]"
        data-scroll-to="exerciseSection"
      >
        <header className="self-stretch flex flex-row items-end justify-between text-left text-16xl text-white font-poppins">
          <h3 className="m-0 relative text-inherit tracking-[0.3px] leading-[45px] font-semibold font-inherit">
            Popular Exercises
          </h3>
          <p className="m-0 relative text-xs tracking-[1.5px] leading-[12px] opacity-[0.67]">
            SEE MORE EXERCISES
          </p>
        </header>
        <article className="flex flex-row items-center justify-center gap-[40px] text-left text-31xl text-white font-poppins lg:flex-col">
          <div className="flex flex-col items-center justify-center gap-[80px] lg:flex-row md:flex-col">
            <ExerciseCard
              image="/group-6@2x.png"
              title="Treadmill"
              subTitle="250 est calories "
              workoutTime="58:24"
            />
            <ExerciseCard
              image="/group-61@2x.png"
              title="Running"
              subTitle="250 est calories "
              workoutTime="58:24"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-[80px] lg:flex-row md:flex-col">
            <ExerciseCard
              image="/group-62@2x.png"
              title="Stretching"
              subTitle="250 est calories "
              workoutTime="58:24"
            />
            <ExerciseCard
              image="/group-63@2x.png"
              title="Lifting"
              subTitle="250 est calories "
              workoutTime="58:24"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-[80px] lg:flex-row md:flex-col">
            <ExerciseCard
              image="/group-64@2x.png"
              title="Yoga"
              subTitle="250 est calories "
              workoutTime="58:24"
            />
            <ExerciseCard
              image="/group-65@2x.png"
              title="PushUp"
              subTitle="250 est calories "
              workoutTime="58:24"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default ExercisesSection;
