import React, { useEffect, useRef, useState } from "react";
import { IoIosMail } from "react-icons/io";
import Heart from "./assets/heart-svgrepo-com.svg";
import Save from "./assets/collection-tag-svgrepo-com.svg";
import ProfilePic from "./assets/profilepic.jpg";

const ProfileHeader = () => {
  const [isFixed, setIsFixed] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleBottom = titleRef.current.getBoundingClientRect().bottom;
        setIsFixed(titleBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex-col justify-evenly items-center p-4 w-full">
      <div ref={titleRef} className="mx-auto w-full md:w-fit" id="title">
        <h1 className="text-xl md:text-2xl mb-2 font-bold">
          Witt - Personal Organizer Web Design
        </h1>
      </div>
      <div
        className={`flex-col items-start mx-auto text-center ${
          isFixed ? "fixed-profile" : ""
        }`}
      >
        {/* Profile Section */}
        <div className="flex items-center justify-around space-x-4 w-full">
          <div className="flex items-center space-x-1">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src={ProfilePic}
                alt="Profile"
              />
            </div>
            <div>
              <div className="text-[12px] font-semibold -ml-6">Shivam Rai</div>
              <div className="flex space-x-1">
                <div className="text-green-500 text-[12px]">
                  • Available for work
                </div>
                <div className="cursor-pointer text-[12px] hidden md:inline-block">
                  Follow
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 items-center">
            <div className="w-7 h-7 rounded-full border p-1">
              <img src={Heart} alt="" />
            </div>
            <div className="w-7 h-7 rounded-full border p-1">
              <img src={Save} alt="" />
            </div>
            <button className="hidden md:block bg-black text-white text-[12px] px-4 py-2 text-center rounded-full">
              Get in Touch
            </button>
            <button className="bg-black md:hidden text-white text-sm px-4 py-2 text-center rounded-full">
              <IoIosMail />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
