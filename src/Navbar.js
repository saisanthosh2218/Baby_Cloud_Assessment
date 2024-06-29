import React from "react";

const Navbar = () => {
  return (
    <div className="hidden md:block">
      <div>
        <nav className="flex justify-between items-center p-6">
          <div className=" text-sm space-x-6">
            <a href="www.123.com">Find Designers</a>
            <a href="www.123.com">Inspiration</a>
            <a href="www.123.com">Courses</a>
            <a href="www.123.com">Jobs</a>
            <a href="www.123.com">Go Pro</a>
          </div>
          <div className="text-2xl font-mono ">Dribble</div>
          <div className="text-sm space-x-4">
            <input
              type="text"
              className="border border-none bg-gray-100 rounded-full p-2 px-2 outline-pink-200 text-sm w-[250px]"
              placeholder="search....."
            />

            <button className="">Log in</button>
            <button className="bg-black text-white px-4 py-2 text-center rounded-full">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
