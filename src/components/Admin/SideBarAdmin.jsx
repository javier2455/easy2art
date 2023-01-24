import React, { useContext } from "react";
import {
  FaAngleRight,
  FaAngleDown,
  FaMoneyCheckAlt,
  FaPeopleCarry,
  FaFileAlt,
  FaBars,
} from "react-icons/fa";
import { SIDEBAR_ADMIN_MENU } from "../../constants/constants";
import AdminNavContext from "../../context/AdminNavContext";
import { Link } from "react-router-dom";

const icons = [<FaMoneyCheckAlt />, <FaPeopleCarry />, <FaFileAlt />];

const SideBarAdmin = () => {
  const { open, handleSideMenuArray } = useContext(AdminNavContext);

  const Divider = () => <div className="bg-red-600 h-[2px] my-5 mx-2"></div>;

  return (
    <nav
      className={`bg-indigo-600 h-screen ${
        open ? "w-72 p-5 left-0" : "w-0 -left-28"
      } duration-300 relative`}
    >
      <div className="inline-flex">
        <h2
          className={`text-white font-medium text-2xl duration-300 ${
            !open && "scale-0"
          } truncate`}
        >
          E4sy Art
        </h2>
      </div>
      <Divider />
      <ul className="pt-2">
        {SIDEBAR_ADMIN_MENU.map((menu, index) => (
          <>
            <li
              key={index}
              className={`${
                !open && "ml-4"
              } duration-300 text-white text-lg flex items-center gap-x-4 cursor-pointer  p-2 hover:text-red-600 hover:bg-white hover:rounded-md`}
              onClick={() => handleSideMenuArray[index].handleSideMenu()}
            >
              <span className="text-2xl block float-left">
                {icons[menu.icon]}
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                {menu.title}
              </span>
              {menu.submenu && (
                <FaAngleDown
                  className={`${
                    handleSideMenuArray[index].openSideMenu && "rotate-180"
                  } ${!open && "hidden"}`}
                />
              )}
            </li>

            {menu.submenu && handleSideMenuArray[index].openSideMenu && open && (
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <>
                    <Link to={submenuItem.link}>
                      <li
                        key={index}
                        className="text-white text-lg flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:text-red-600 hover:bg-white 
                                    hover:rounded-md truncate"
                      >
                        {submenuItem.title}
                      </li>
                    </Link>
                  </>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default SideBarAdmin;
