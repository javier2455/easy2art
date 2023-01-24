import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_LINKS } from "../constants/constants";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardWork from "./CardWork";
import WorkContext from "../context/WorkContext";

const CompanyWorks = () => {
  const { dbPins } = useContext(WorkContext);

  return (
    <section className="w-full h-auto flex flex-col mx-auto shadow-lg mt-3 mb-3 px-2 py-5 lg:w-[80%]">
      <div className="px-7 py-2 mb-5">
        <h3 className="text-2xl font-bold mb-2">
          Conozca nuestros trabajos más recientes
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          magni ipsam repudiandae fugit beatae quaerat. Distinctio quam
          voluptate, id est eaque nobis, doloribus, voluptates repudiandae ipsum
          debitis numquam qui. Quo iusto alias dicta odio maxime.
        </p>
      </div>
      <div className="h-full p-2 gap-3 sm:grid sm:justify-items-center teidi sm:grid-cols-2 lg:grid-cols-3">
        {dbPins.map((i, index) => (
          <CardWork key={index} work={i} />
        ))}
      </div>
      <div className="flex px-6 sm:justify-end">
        <Link
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 sm:w-[40%] md:w-[36%] lg:w-[26%] xl:w-[20%] md:py-2 md:px-2 md:text-lg"
          to={NAVIGATION_LINKS[1].path}
        >
          Ver más trabajos <FaLongArrowAltRight className="ml-2 text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default CompanyWorks;
