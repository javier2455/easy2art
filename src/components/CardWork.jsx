import React from "react";
// import { LOCAL_DIR } from "../routes/routes";

const CardWork = ({ work }) => {
  return (
    <div className="relative overflow-hidden my-2 sm:my-0 sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] lg:w-[250px] xl:w-[300px] xl:h-[250px] 2xl:w-[350px] 2xl:h-[360px] 3xl:w-[450px]">
      <img
        src={work.image}
        alt={work.alt}
        className="rounded-lg object-cover h-full w-full"
      />
      {/* Codigo con el server */}
      {/* <img
        src={`${LOCAL_DIR}${work.id}-${work.f_name}`}
        alt={work.f_category}
        className="rounded-lg object-cover h-full w-full"
      /> */}
      <div
        className="absolute h-full w-full bg-black/20 flex flex-col justify-center px-3 -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100
          transition-all duration-300"
      >
        <p className="text-white text-2xl text-center font-bold">{work.title}</p>
      </div>
    </div>
  );
};

export default CardWork;
