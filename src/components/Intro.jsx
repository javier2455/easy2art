import React from "react";
import img from "../images/HomeImg.jpg";
import { NAVIGATION_LINKS } from "../constants/constants";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="bg-white w-full h-[500px] lg:h-[600px]">
      <div className="w-full h-full bg-slate-400 md:h-full md:w-full relative">
        <img
          className="h-full w-full object-cover md:h-full lg:h-full lg:w-full opacity-60 "
          src={img}
          alt="imgHome"
        />
        <div className="absolute top-12 left-10 w-[80%] md:text-center md md:lef-15 md:w-[90%] lg:text-left lg:w-[50%] lg:h-[70%] lg:top-18 xl:top-24 xl:w-[45%]">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block mb-1 xl:inline-block">
              Calidad, originalidad y precio en un mismo trabajo.
            </span>
            <span className="block text-indigo-600 xl:inline-block">
              E4sy Art
            </span>
          </h1>
          <p className="block text-white mt-2 font-bold xl:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            beatae debitis, impedit fugit harum voluptatum corporis accusamus
            magnam id provident veritatis dolores velit esse? Ipsam.
          </p>
          <div className="mt-2 sm:flex sm:justify-start md:justify-center lg:justify-start ">
            <div className="rounded-md shadow">
              <Link
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white 
                hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                to={NAVIGATION_LINKS[1].path}
              >
                Ver Trabajos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
