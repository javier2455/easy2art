import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants/constants";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const activeLink = "bg-indigo-600 text-white p-2 duration-300 rounded-lg";
const notActiveLink = "text-xl rounded-sm p-2 text-indigo-600 cursor-pointer duration-300";

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const showMenu = () => {
    setOpen(prev => !prev);
  }

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="w-[95%] sm:w-[75%]">
        <Link className="text-xl font-bold text-indigo-600 lg:text-2xl" to="/">
          E4sy Art
        </Link>
      </div>
      <span className={`text-xl cursor-pointer sm:hidden block`} onClick={showMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </span>
      <ul className={`shadow-lg sm:flex sm:items-center sm:justify-end sm:static absolute bg-white w-full sm:opacity-100 sm:shadow-none
      ${open ? "top-[60px] left-0 z-[1]" : "opacity-0 top-[60px] left-[-400px]"} transition-all ease-in duration-300`}>
        {NAVIGATION_LINKS.map((lk, index) => (
          <li className="mx-3 my-5 sm:my-0" key={lk.id}>
            <Link
            className="px-3 py-1.5 text-xl text-gray-600 rounded-lg hover:bg-gray-100 hover:text-indigo-600 capitalize cursor-pointer"
              /* className={({ isActive }) =>
                isActive ? activeLink : notActiveLink
              } */
              to={lk.path}
            >
              {lk.tx}
            </Link>
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
  );
};

export default Navigation;
