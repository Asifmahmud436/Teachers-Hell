import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa6";

export default function Universities() {
  return (
    <div className="bg-gradient-to-l from-black to-zinc-900 h-full text-white py-4 pb-9">
      <Slide duration={1000}>
        <h1 className="text-2xl font-semibold lg:ms-24 mb-6 sm:text-center lg:text-start">
          Top Universities
        </h1>
      </Slide>
      <div className="grid lg:grid-cols-4  md:grid-cols-1 sm:grid-cols-1 place-items-center gap-6 px-14">
        <Fade>
          <div className="p-4 bg-[#2A2A2A] w-[326px] h-full flex flex-col rounded-sm hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl items-center">
            <div className="flex justify-between ">
              <div>
                <img src="./c1.jpg" alt="" className="w-[278px] h-[128px] mb-3 rounded-md"/>
                <h1 className="font-semibold">Brac University</h1>
              </div>
            </div>
            <div className="flex justify-between items-center w-full px-2">
              <p className="text-md font-light text-[#D1D5DB] py-6 block">
                <FaStar className="inline text-pink-600" /> 4.5
              </p>
              <p>2,583 Reviews</p>
            </div>
          </div>
          <div className="p-4 bg-[#2A2A2A] w-[326px] h-full flex flex-col rounded-sm hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl items-center">
            <div className="flex justify-between ">
              <div>
                <img src="./c2.jpg" alt="" className="w-[278px] h-[128px] mb-3 rounded-md"/>
                <h1 className="font-semibold">Brac University</h1>
              </div>
            </div>
            <div className="flex justify-between items-center w-full px-2">
              <p className="text-md font-light text-[#D1D5DB] py-6 block">
                <FaStar className="inline text-pink-600" /> 4.5
              </p>
              <p>2,583 Reviews</p>
            </div>
          </div>
          <div className="p-4 bg-[#2A2A2A] w-[326px] h-full flex flex-col rounded-sm hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl items-center">
            <div className="flex justify-between ">
              <div>
                <img src="./c3.jpg" alt="" className="w-[278px] h-[128px] mb-3 rounded-md"/>
                <h1 className="font-semibold">Brac University</h1>
              </div>
            </div>
            <div className="flex justify-between items-center w-full px-2">
              <p className="text-md font-light text-[#D1D5DB] py-6 block">
                <FaStar className="inline text-pink-600" /> 4.5
              </p>
              <p>2,583 Reviews</p>
            </div>
          </div>
          <div className="p-4 bg-[#2A2A2A] w-[326px] h-full flex flex-col rounded-sm hover:scale-105 duration-1000 hover:bg-black hover:shadow-gray-600 hover:shadow-xl items-center">
            <div className="flex justify-between ">
              <div>
                <img src="./c4.jpg" alt="" className="w-[278px] h-[128px] mb-3 rounded-md"/>
                <h1 className="font-semibold">Brac University</h1>
              </div>
            </div>
            <div className="flex justify-between items-center w-full px-2">
              <p className="text-md font-light text-[#D1D5DB] py-6 block">
                <FaStar className="inline text-pink-600" /> 4.5
              </p>
              <p>2,583 Reviews</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
