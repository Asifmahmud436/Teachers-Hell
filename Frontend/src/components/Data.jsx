import React from "react";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

function Data() {
  return (
    <div className="bg-black text-white py-12 flex justify-evenly space-x-6 flex-wrap">
      <Zoom>
        <div className="mt-4 h-[200px] w-[320px] rounded-md bg-[#202020] flex flex-col justify-center items-center hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl">
          <img src="./r1.png" alt="" className="h-[38px] w-[48px]" />
          <h1 className="font-semibold pb-1 pt-3 text-2xl">50,000+</h1>
          <p className="text-sm text-[#9CA3AF]">Reviews</p>
        </div>
        <div className="mt-4 h-[200px] w-[320px] rounded-md bg-[#202020] flex flex-col justify-center items-center hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl">
          <img src="./r2.png" alt="" className="h-[38px] w-[58px]" />
          <h1 className="font-semibold pb-1 pt-3 text-2xl">1,000+</h1>
          <p className="text-sm text-[#9CA3AF]">Universities</p>
        </div>
        <div className="mt-4 h-[200px] w-[320px] rounded-md bg-[#202020] flex flex-col justify-center items-center hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl">
          <img src="./r3.png" alt="" className="h-[38px] w-[68px]" />
          <h1 className="font-semibold pb-1 pt-3 text-2xl">10,000+</h1>
          <p className="text-sm text-[#9CA3AF]">Professors</p>
        </div>
      </Zoom>
    </div>
  );
}

export default Data;
