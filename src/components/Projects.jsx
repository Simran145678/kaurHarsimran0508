import React from "react";
import { useInView } from "react-intersection-observer";

export default function Projects(props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  const projectCard = props.list.map((item) => {
    return (
      <div className="container w-5/6 flex flex-col   p-6 md:px-24 lg:px-40">
        <div className="relative card flex flex-col md:flex-row w-full justify-center md:mb-20  ">
          <div className="hidden md:block -left-16 xl:left-20  absolute card-content border-4 border-orange-200 w-60 lg:w-64 h-80 -mt-8 ml-6 lg:ml-8  z-10"></div>
          <div className="flex flex-col md:flex-row w-full xl:w-2/3 h-auto md:h-64 bg-yellow-500 z-20 p-4 lg:p-6">
            <div className="w-full md:w-1/3">
              <div className="relative flex flex-col h-full justify-center items-center text-center p-6">
                <img
                  src={item.path}
                  alt={`logo of ${item.title}`}
                  className="w-48 md:w-auto"
                ></img>
                <p className="text-md font-noto font-bold text-gray-900 leading-tight mt-4">
                  {item.title}
                </p>
              </div>
            </div>
            <div className="relative w-full md:w-2/3 p-2  bg-yellow-100 rounded-xl  shadow-100 shadow-yellow-100">
              <h4 className="absolute -top-3 text-md font-noto text-gray-900  bg-yellow-300 ">
                {item.subHeading}
              </h4>

              <ul className="text-sm font-nunito text-gray-800 list-disc pl-4 lg:pl-6 mt-6">
                {item.rolesNdResposibilities.split("|").map((role) => {
                  return <li>{role}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`${
        inView ? "opacity-1 traslate-y-0" : "opacity-0 translate-y-5"
      } md:py-8 container w-screen  bg-[#fff] transition-all duration-700 ease-in-out`}
    >
      <div className="flex flex-col  ml-auto mr-auto items-center w-5/6 border-b-4 border-yellow-500 p-6">
        <h2 className="text-5xl font-noto mx-auto text-gray-900">Experience</h2>
      </div>
      <div className="reveal flex flex-col p-6 ml-auto mr-auto items-center w-5/6 mb-8">
        <p className="lg:px-10 leading-relaxed text-center text-gray-800">
          With over 2 years of web development experience, I've mastered HTML,
          CSS, and JavaScript, excelling in front-end frameworks like React.
          Proficient in Git and GitHub, I've collaborated in agile environments
          and maintained code quality, performance and scalability.
        </p>
      </div>

      {projectCard}
    </section>
  );
}
