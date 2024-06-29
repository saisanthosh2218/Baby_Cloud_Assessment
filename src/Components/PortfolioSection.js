import React from "react";
import P1 from "./assets/p1.png";
import P2 from "./assets/p2.png";
import P3 from "./assets/p3.png";
import P4 from "./assets/p4.png";
import ProfilePic from "./assets/profilepic.jpg";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const PortfolioSection = () => {
  return (
    <div>
      <div className="py-10">
        <div className="max-w-screen-lg mx-auto text-center">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <img
              src={ProfilePic}
              alt="Profile"
              className="rounded-full w-24 h-24 bg-white border-4 border-white"
            />
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <h1 className="text-sm font-semibold mt-4">Shivam Rai</h1>
          <button className="bg-black text-white py-2 px-4 rounded-full text-sm mt-2">
            Get in touch
          </button>
        </div>
      </div>

      <div className="py-10">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex justify-between">
            <h2 className="font-semibold ml-5 text-sm">More by Shivam Rai</h2>
            <p className="font-semibold mr-5 text-sm">View Profile</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative bg-white p-4">
              <div className="relative group">
                <img
                  src={P1}
                  alt="Portfolio 1"
                  className="mb-4 rounded-md w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full p-2 bg-white">
                    <CiHeart className="text-xl" />
                  </div>
                  <div className="rounded-full p-2 bg-white">
                    <CiBookmark className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-white p-4">
              <div className="relative group">
                <img
                  src={P2}
                  alt="Portfolio 2"
                  className="mb-4 rounded-md w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full p-2 bg-white">
                    <CiHeart className="text-xl" />
                  </div>
                  <div className="rounded-full p-2 bg-white">
                    <CiBookmark className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-white p-4">
              <div className="relative group">
                <img
                  src={P3}
                  alt="Portfolio 3"
                  className="mb-4 rounded-md w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full p-2 bg-white">
                    <CiHeart className="text-xl" />
                  </div>
                  <div className="rounded-full p-2 bg-white">
                    <CiBookmark className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-white p-4">
              <div className="relative group">
                <img
                  src={P4}
                  alt="Portfolio 4"
                  className="mb-4 rounded-md w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="rounded-full p-2 bg-white">
                    <CiHeart className="text-xl" />
                  </div>
                  <div className="rounded-full p-2 bg-white">
                    <CiBookmark className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
