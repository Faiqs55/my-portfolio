import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const page = () => {
  return (
    <div>
      {/* <div className="flex w-full flex-col gap-5 justify-center items-center mt-6">
        <h1 className="font-plus-jakarta font-bold text-8xl">Faiq.S</h1>
        <p className="font-inter text-lg">Full Stack, Ai, Cloud Engineer</p>
      </div> */}

      <div className="grid grid-cols-6 xl:grid-cols-7 gap-3 md:gap-5 px-5">
        <div
          className={`card-body col-span-6 lg:col-span-3 xl:col-span-2 h-[150px] sm:h-[200px] lg:h-[300px] xl:h-[354px] flex items-end p-7 cursor-pointer`}
        >
          <h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
            <span>About</span>
            <BsArrowUpRight />{" "}
          </h4>
        </div>
        <div
          className={`card-body col-span-6 lg:col-span-3 xl:col-span-5 h-[150px] sm:h-[200px] lg:h-[300px] xl:h-[354px] flex items-end p-7 cursor-pointer`}
        >
          <h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
            <span>Portfolio</span>
            <BsArrowUpRight />{" "}
          </h4>
        </div>
        <div
          className={`card-body col-span-3 md:col-span-4 xl:col-span-3 h-[150px] sm:h-[200px] lg:h-[300px] xl:h-[354px] flex items-end p-7 cursor-pointer`}
        >
          <h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
            <span>Contact</span>
            <BsArrowUpRight />{" "}
          </h4>
        </div>
        <div
          className={`card-body col-span-3 md:col-span-2 h-[150px] sm:h-[200px] lg:h-[300px] xl:h-[354px] flex justify-center p-0! md:p-7 cursor-pointer`}
        >
          <img src="/faiq.png" alt="me" className=" object-center max-h-full w-full object-cover" />
        </div>

        <div className="h-[150px] sm:h-[200px] lg:h-[300px] xl:h-[354px] grid grid-cols-2 md:grid-cols-1 gap-5 col-span-6 md:col-span-2">
          <div className="card-body"></div>
          <div className="card-body flex items-end">
            <h4 className="font-inter sm:text-lg flex items-center justify-between w-full">
              <span>Resume</span>
              <BsArrowUpRight />{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
