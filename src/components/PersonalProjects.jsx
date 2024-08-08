import React from "react";
import { useInView } from "react-intersection-observer";

export default function PersonalProjects(props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  const card = props.list.map((item) => {
    console.log(item.image);
    return (
      <div className="w-full h-64 bg-orange-200 border-2 border-orange-200 cursor pointer relative">
        <img
          src={item.image}
          className="w-full object-cover object-center md:object-left h-full bg-right"
          alt={item.title}
        />
        <div className="absolute flex flex-col justify-between top-0 left-0 bg-white md:bg-yellow-100 w-1/2 border-r-2 border-orange-200 md:w-full h-full md:opacity-0 hover:opacity-100 cursor-pointer transition-all duration-500">
          <h3 className="text-lg  md:text-2xl font-noto font-bold mt-4  bg-yellow-300 w-auto inline-block">
            {item.title}
          </h3>
          <div className="flex flex-col md:flex-row justify-evenly">
            <a href={item.github} target="_blank">
              <button className="group relative overflow-hidden rounded-md bg-white text-sm shadow px-8 py-2 my-1 md:my-4 border-1 border-yellow-500">
                <div className="absolute inset-0 w-3 bg-yellow-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-gray-800 group-hover:text-gray-900">
                  Github repo
                </span>
              </button>
            </a>
            <a href={item.liveSite} target="_blank">
              <button className="group relative overflow-hidden rounded-md bg-white text-sm shadow px-8 py-2 my-1 md:my-4  border-1 border-yellow-500">
                <div className="absolute inset-0 w-3 bg-yellow-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-gray-800 group-hover:text-gray-900">
                  Live Website
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? "opacity-1 traslate-y-0" : "opacity-0 translate-y-5"
      }container w-full p-6 md:px-10 md:pt-0 transition-all duration-700 ease-in-out`}
    >
      <h3 className=" text-5xl text-center font-noto w-full mx-auto text-gray-900">
        Personal Projects
      </h3>
      <div className="bg-yellow-100 p-4 md:p-10 w-full lg:w-4/5 xl:w-3/5 grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2 mx-auto my-4">
        {card}
      </div>
    </div>
  );
}
