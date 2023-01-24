import React from "react";
import { HOME_EXPERIENCE } from "../constants/constants";
import img1 from "../images/TeamWork.jpg";

const CompanyData = () => {
  return (
    <section className="w-full h-auto mx-auto shadow-lg flex flex-col justify-center items-center p-4 lg:w-[80%] lg:flex lg:flex-col lg:gap-2 lg:my-2">
      <div className="w-full h-auto border-b-[1px] border-gray-400 flex flex-col justify-center lg:flex lg:flex-row lg:gap-2">
        {HOME_EXPERIENCE.map((el) => (
          <div
            key={el.id}
            className="flex w-full h-auto items-center justify-center py-8"
          >
            <p className="text-black text-xl text-center lg:text-2xl xl:text-3xl">
              <span className="text-2xl mr-2 font-bold lg:3xl xl:text-4xl">
                +{el.value}
              </span>
              {el.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col py-2 md:flex-row lg:flex-row">
        <div className="h-full w-full md:h-full md:w-[50%]">
          <img
            className="h-full w-full object-cover rounded-lg shadow-lg md:h-full lg:h-full"
            src={img1}
            alt="pladurImg"
          />
        </div>
        <div className="mt-4 px-3 flex flex-col w-full h-auto md:w-[50%] lg:w-[50%] lg:justify-around">
          <div>
            <p className="text-2xl font-bold">¿Quienes somos?</p>
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit pariatur, dolorum quaerat similique quod, nisi iste sapiente ad distinctio consectetur id, eveniet voluptas laboriosam blanditiis tempore consequuntur voluptate rerum!
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold">Nuestra trayectoría</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minima laudantium doloremque provident iure eius praesentium quaerat consequatur illum fugiat, optio dicta cupiditate esse magnam!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyData;
