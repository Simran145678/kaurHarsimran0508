import React from "react";

export default function Intro(props) {
  return (
    <section id="intro">
      <div className="bg-yellow-100   w-screen overflow-hidden font-nunito">
        <div className="container flex flex-col md:flex-row md:p-10 lg:p-20 xl:p-24 ">
          <div className="pt-20 md:pt-0 w-full md:w-1/2">
            <div className="bubble-img-1"></div>
            <div className="bubble-img-2"></div>
            <img
              src={props.img}
              alt=" Harsimran's Headshot"
              className="rounded-full w-80 h-80 lg:w-96 lg:h-96 ml-auto mr-auto md:ml-6 -mt-28 object-cover border-4 border-orange-200
                          animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-linear"
            />
          </div>

          <div className="intro font-nunito w-full md:w-1/2 p-4 flex items-center animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-linear">
            <h1 className="text-gray-800 md:text-lg xl:text-xl  leading-relaxed">
              Hello, I'm
              <span className="font-noto text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-900 bg-yellow-300">
                HARSIMRAN KAUR
              </span>
              <br></br>A dedicated web developer focused on bringing your vision
              to life with user centered approach.
              <br></br>
              <br></br>
              With a passion for creating seamless & engaging online
              experiences, I am committed to ensuring that your audience enjoys
              every click, scroll and interaction on your website.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
