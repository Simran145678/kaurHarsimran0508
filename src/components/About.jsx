import React, { useState, useEffect } from "react";


export default function About(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        document.getElementById("animated-component").offsetTop;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const aboutCard = props.list.map((item) => {
    return (
      <div
        className="sm:w-3/4 p-2 bg-yellow-100 rounded-xl my-4 shadow-100 shadow-yellow-100  
        "
      >
        <h3 className=" text-xl font-noto font-bold -translate-y-6 bg-yellow-300 inline-block">
          <i className={item.svg}></i>
          {item.subheading}
        </h3>

        <ul className="list-disc ml-6 ">
          {item.desc.split("|").map((listItem) => {
            const splitDesc = listItem.split(":");
            return (
              <li className="text-gray-800 list-none">
                <span className="font-bold text-gray-900">{splitDesc[0]}</span>
                {splitDesc[1]}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <section
      id="about"
      className=" section font-nunito  w-screen bg-yellow-500 p-6 md:p-20  mx-auto"
    >
      <div
        id="animated-component"
        className={`container flex flex-col ml-auto mr-auto items-center w-5/6 border-4 border-yellow-100 p-4 transition-all delay-300 duration-1000 ease-in-out
      ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 "} `}
      >
        <h2
          id="about-heading"
          className="font-noto text-6xl mx-auto text-gray-900 "
        >
          About Me
        </h2>
        <p className=" py-8 sm:w-3/4 text-gray-900 text-center">
          I am a passionate front-end developer on a mission to bring digital
          visions to life. With a palette of HTML, CSS, and JavaScript, I craft
          immersive and intuitive web experiences that leave a lasting
          impression.
        </p>
        {aboutCard}
      </div>
    </section>
  );
}
