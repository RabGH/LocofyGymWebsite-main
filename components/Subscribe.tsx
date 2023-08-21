import type { NextPage } from "next";
import { useCallback } from "react";

const SubscribeSection: NextPage = () => {
  const onButton3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='exerciseSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="self-stretch bg-black h-[550px] overflow-hidden shrink-0 flex flex-col pt-[76px] px-0 pb-[124px] box-border items-center justify-start mt-[-1px] text-center text-31xl text-white font-poppins">
      <div
        className="w-[743px] flex flex-col py-0 px-1.5 box-border items-center justify-start md:py-[9px] md:px-[15px] md:box-border sm:self-stretch sm:w-auto sm:pl-0 sm:pr-0 sm:box-border"
        data-scroll-to="subscribeUIContainer"
      >
        <div className="self-stretch h-[200px] flex flex-col items-center justify-start gap-[50px] sm:gap-[30px]">
          <div className="self-stretch relative tracking-[0.83px] leading-[70px] font-semibold inline-block h-20 shrink-0 sm:text-13xl sm:mb-[3rem]">
            Subscribe to Newsletter
          </div>
          <form
            className="self-stretch flex flex-row items-start justify-start gap-[21px] md:flex-col sm:self-stretch sm:w-auto sm:flex-col sm:py-2.5 sm:px-5 sm:box-border"
            method="post"
          >
            <input
              className="font-poppins text-3xl bg-[transparent] flex-1 rounded-md box-border h-[70px] overflow-hidden flex flex-row py-[30px] px-10 items-center justify-start border-[1.5px] border-solid border-white md:flex-[unset] md:self-stretch sm:self-stretch sm:w-auto sm:h-[70px] sm:pl-5 sm:pr-5 sm:box-border sm:flex-[unset] text-white"
              type="email"
              placeholder="Email"
              required
            />
            <button
              className="cursor-pointer [border:none] py-6 px-[43px] bg-mediumseagreen self-stretch rounded-3xs flex flex-row items-center justify-center hover:bg-seagreen-200 md:self-stretch md:w-auto"
              onClick={onButton3Click}
            >
              <div className="relative text-lg tracking-[1px] leading-[22px] font-semibold font-poppins text-white text-left">
                Subscribe
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
