import React from "react";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

import { FiUpload } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const SideBar = () => {
  return (
    <div>
      <div className="lg:flex md:hidden justify-around items-center space-x-2 hidden">
        <div className="">
          <FaRegComment className="text-xl" />
        </div>
        <div>
          <FiUpload className="text-xl" />
        </div>
        <div>
          <IoIosInformationCircleOutline className="text-xl" />
        </div>
      </div>

      <div className="lg:hidden flex justify-around">
        <div className=" rounded-full p-2">
          <CiHeart className="text-xl" />
        </div>
        <div className=" rounded-full p-2">
          <CiBookmark className="text-xl" />
        </div>
        <div className=" rounded-full p-2">
          <FiUpload className="text-xl" />
        </div>
        <div className=" rounded-full p-2">
          <FaRegComment className="text-xl" />
        </div>
        <div className=" rounded-full p-2">
          <IoIosInformationCircleOutline className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
