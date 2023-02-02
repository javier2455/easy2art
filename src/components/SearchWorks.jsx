import React, { useContext } from "react";
import { WORKS_CATEGORIES } from "../constants/constants";
import WorkContext from "../context/WorkContext";

const SearchWorks = () => {
  const { getPinsByCategory, getAllPins } = useContext(WorkContext);
  return (
    <div className="flex items-center my-3 p-3 space-x-4 overflow-y-auto sm:w-full sm:justify-center whitespace-nowrap">
      {/* <div className="flex items-center p-3 space-x-4 overflow-y-auto md:max-w-lg xl:max-w-5xl 2xl:max-w-7xl lg:max-w-3xl whitespace-nowrap"></div> */}
      <div className="" onClick={() => getAllPins()}>
        {/* <span className="w-[20%]">{c.ico}</span> */}
        <p className="px-3 py-1.5 text-xl text-gray-600 rounded-lg hover:bg-gray-100 hover:text-indigo-600 capitalize cursor-pointer">
          Todos
        </p>
      </div>
      {WORKS_CATEGORIES.map((c, index) => (
        <div
          key={index}
          className=""
          onClick={() => getPinsByCategory(c.category)}
        >
          {/* <span className="w-[20%]">{c.ico}</span> */}
          <p className="px-3 py-1.5 text-xl text-gray-600 rounded-lg hover:bg-gray-100 hover:text-indigo-600 capitalize cursor-pointer">
            {c.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchWorks;
