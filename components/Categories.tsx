import type { NextPage } from "next";

type CategoriesSectionType = {
  title?: string;
  videos?: string;
};

const CategoriesSection: NextPage<CategoriesSectionType> = ({
  title,
  videos,
}) => {
  return (
    <section className="self-stretch bg-black flex flex-col py-[92px] px-[120px] items-start justify-start mt-[-1px] lg:pl-20 lg:pr-20 lg:box-border md:pl-10 md:pr-10 md:box-border sm:py-10 sm:px-5 sm:box-border">
      <article className="self-stretch flex flex-col items-start justify-start gap-[50px] text-left text-6xl text-white font-poppins">
        <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
          <p className="m-0 relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
            01
          </p>
          <div className="[text-decoration:none] flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl text-[inherit] lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
            <div className="[text-decoration:none] flex flex-col items-start justify-start gap-[10px] text-[inherit]">
              <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                {title}
              </div>
              <p className="m-0 relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                {videos}
              </p>
            </div>
            <img
              className="relative w-[26.22px] h-[21.45px] hover:animate-[2s_ease_0s_infinite_normal_none_wobble-hor-bottom] hover:opacity-[1]"
              alt=""
              src="/arrow.svg"
            />
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
          alt=""
          src="/separator.svg"
        />
        <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
          <p className="m-0 relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
            02
          </p>
          <a className="[text-decoration:none] flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl text-[inherit] lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                Stay Strong and Fit
              </div>
              <div className="relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                48 videos
              </div>
            </div>
            <img
              className="relative w-[26.22px] h-[21.45px] hover:animate-[2s_ease_0s_infinite_normal_none_wobble-hor-bottom] hover:opacity-[1]"
              alt=""
              src="/arrow.svg"
            />
          </a>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
          alt=""
          src="/separator.svg"
        />
        <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
          <p className="m-0 relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
            03
          </p>
          <a className="[text-decoration:none] flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl text-[inherit] lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                High Intensity
              </div>
              <div className="relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                48 videos
              </div>
            </div>
            <img
              className="relative w-[26.22px] h-[21.45px] hover:animate-[2s_ease_0s_infinite_normal_none_wobble-hor-bottom] hover:opacity-[1]"
              alt=""
              src="/arrow.svg"
            />
          </a>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
          alt=""
          src="/separator.svg"
        />
        <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
          <p className="m-0 relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
            04
          </p>
          <a className="[text-decoration:none] flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl text-[inherit] lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                Simple Workout
              </div>
              <div className="relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                48 videos
              </div>
            </div>
            <img
              className="relative w-[26.22px] h-[21.45px] hover:animate-[2s_ease_0s_infinite_normal_none_wobble-hor-bottom] hover:opacity-[1]"
              alt=""
              src="/arrow.svg"
            />
          </a>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
          alt=""
          src="/separator.svg"
        />
        <div className="self-stretch flex flex-row items-center justify-start gap-[22px]">
          <p className="m-0 relative leading-[35px] font-semibold opacity-[0.34] mix-blend-normal">
            05
          </p>
          <a className="[text-decoration:none] flex-1 flex flex-row py-0 pr-0 pl-[262px] items-center justify-between text-31xl text-[inherit] lg:pl-20 lg:box-border md:pl-5 md:box-border sm:pl-0 sm:box-border">
            <div className="flex flex-col items-start justify-start gap-[10px]">
              <div className="relative tracking-[0.83px] leading-[70px] md:text-9xl md:leading-[35px]">
                Burn Calories
              </div>
              <div className="relative text-sm tracking-[0.5px] leading-[23px] opacity-[0.5] mix-blend-normal">
                48 videos
              </div>
            </div>
            <img
              className="relative w-[26.22px] h-[21.45px] hover:animate-[2s_ease_0s_infinite_normal_none_wobble-hor-bottom] hover:opacity-[1]"
              alt=""
              src="/arrow.svg"
            />
          </a>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 opacity-[0.4] mix-blend-normal"
          alt=""
          src="/separator.svg"
        />
      </article>
    </section>
  );
};

export default CategoriesSection;
