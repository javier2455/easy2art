import React, { useContext } from "react";
import { WORKS_CATEGORIES } from "../constants/constants";
import WorkContext from "../context/WorkContext";
import { FaRegFolderOpen } from "react-icons/fa";

const SideBar = () => {
  const { getPinsByCategory, getAllPins } = useContext(WorkContext);
  return (
    <nav className="w-full sm:rounded-r-xl sm:shadow-lg sm:shadow-indigo-100 sm:border-[1px] sm:h-[70vh] sm:flex sm:flex-col sm:justify-between sm:items-start">
      <div
        onClick={() => getAllPins()}
        className="w-full h-[10%] px-4 flex justify-between items-center cursor-pointer text-2xl font-bold sm:px-2 sm:border-b-[1px] sm:border-indigo-600"
      >
        <h3>Categorias</h3>
        <FaRegFolderOpen className="text-indigo-600 text-3xl" title="Todas las categorias" />
      </div>
      {/* <div className="p-0 border-[1px] border-slate-400 my-2 w-[95%] items-start" /> */}
      <div className="w-full h-[80%] grid grid-cols-2 xsm:grid-cols-3 sm:flex sm:flex-col sm:items-start sm:justify-start">
        {WORKS_CATEGORIES.map((c, index) => (
          <div
            key={index}
            className="w-auto h-auto mx-2 my-2 px-2 py-1 flex justify-start items-center rounded-lg duration-300 text-center text-xl text-white bg-indigo-600 hover:bg-white hover:text-indigo-600 
            hover:border-[1px] hover:border-indigo-600 cursor-pointer sm:w-[90%] sm:flex sm:justify-around sm:items-center"
            onClick={() => getPinsByCategory(c.category)}
          >
            <span className="w-[20%]">{c.ico}</span>
            <p className="w-[80%]">{c.category}</p>
          </div>
        ))}
      </div>
      <footer className="w-full h-[10%] invisible sm:visible sm:px-2 sm:py-1 sm:border-t-[1px] sm:w-full sm:border-indigo-600 text-lg text-center flex items-center justify-start">
        E4sy Art
      </footer>
    </nav>
  );
};

export default SideBar;
