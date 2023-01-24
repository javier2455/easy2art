import React, { useContext } from "react";
import AdminNavContext from "../../context/AdminNavContext";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBarAdmin = () => {
  const { open, handleOpen } = useContext(AdminNavContext);
  return (
    <div
      className={`${
        open ? "w-[calc(100%-18rem)]" : "w-full"
      } flex justify-between items-center h-14 duration-300 p-5 bg-indigo-600`}
    >
      {open ? (
        <div
          className="cursor-pointer"
          onClick={() => handleOpen()}
        >
          <FaTimes
            className={`text-white text-3xl`}
          />
        </div>
      ) : (
        <div
          className="cursor-pointer"
          onClick={() => handleOpen()}
        >
          <FaBars
            className={`text-white text-3xl`}
          />
        </div>
      )}
      <div className="text-white opacity-0 md:opacity-100">Nombre del módulo visitado</div>
    </div>
  );
};

export default NavBarAdmin;
