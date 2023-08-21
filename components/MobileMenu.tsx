import type { NextPage } from "next";
import { Menu, Transition } from "@headlessui/react";

const HamburgerMenu: NextPage = () => {
  return (
    <Menu>
      <Menu.Button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-8 h-8 overflow-hidden shrink-0 hidden md:flex">
        <img
          className="absolute h-[46.88%] w-[63.55%] top-[26.56%] right-[18.23%] bottom-[26.56%] left-[18.23%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group2.svg"
        />
      </Menu.Button>
      <Transition
        enter="transition duration-150 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-150 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="min-w-[10rem] absolute right-0 mt-8 mr-4 py-2 bg-white pl-4 bg-opacity-10 text-white rounded shadow-lg z-10">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block px-4 text-md text-white no-underline`}
                href="#hero"
              >
                <p className="p-0 m-0 hover:text-gray-500">Home</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block px-4 text-md text-white no-underline`}
                href="#exercise"
              >
                <p className="p-0 m-0 hover:text-gray-500">Exercises</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block px-4 text-md text-white no-underline`}
                href="#trainers"
              >
                <p className="p-0 m-0 hover:text-gray-500">Trainers</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block px-4 text-md text-white no-underline`}
                href="#categories"
              >
                <p className="p-0 m-0 hover:text-gray-500">Pricing</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`block px-4 text-md text-white no-underline`}
                href="#subscribe"
              >
                <p className="p-0 m-0 hover:text-gray-500">Subscribe</p>
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HamburgerMenu;
