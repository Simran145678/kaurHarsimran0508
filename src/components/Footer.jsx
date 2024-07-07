import React from "react";

export default function Footer(props) {
  return (
    <footer className="font-noto flex flex-col justify-between bg-yellow-500 border-t-4  border-yellow-300   ">
      <div className="container footer-content flex flex-col justify-between md:flex-row p-6 md:p-16">
        <div className="w-44 md:w-auto logo leading-tight relative cursor-pointer">
          <p className="font-bold text-xl leading-tight  z-20 border-b-2 border-gray-800">
            harsimran kaur{" "}
          </p>
          <small className=" leading-tight z-20 ">
            Code, Create, Captivate.
          </small>
          <div className="bg-box opacity-50 absolute  ml-4 top-0 -mt-1 -z-50  "></div>
        </div>

        <div className="mt-6 md:mt-0">
          <h3>Contact me @</h3>
          <a
            href="mailto:kaur.harsimran0508@gmail.com"
            className="text-gray-800"
          >
            kaur.harsimran0508@gmail.com
          </a>
        </div>

        <div className="text-4xl text-yellow-100 hidden md:block">
          <a href="#intro">
            <i className="fa-regular fa-circle-up cursor-pointer"></i>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center  h-8 bg-yellow-100 bottom-0 z-20">
        <small className="">
          &copy; {new Date().getFullYear()} Harsimran Kaur. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
