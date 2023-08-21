import type { NextPage } from "next";

const HamburgerMenu: NextPage = () => {
  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-8 h-8 overflow-hidden shrink-0 hidden md:flex">
      <img
        className="absolute h-[46.88%] w-[63.55%] top-[26.56%] right-[18.23%] bottom-[26.56%] left-[18.23%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group2.svg"
      />
    </button>
  );
};

export default HamburgerMenu;
