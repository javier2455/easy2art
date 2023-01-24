import { createContext, useState } from "react";

const AdminNavContext = createContext();

const AdminNavProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [openSideMenu1, setOpenSideMenu1] = useState(false);
  const [openSideMenu2, setOpenSideMenu2] = useState(false);
  const [openSideMenu3, setOpenSideMenu3] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleSideMenu1 = () => setOpenSideMenu1(!openSideMenu1);
  const handleSideMenu2 = () => setOpenSideMenu2(!openSideMenu2);
  const handleSideMenu3 = () => setOpenSideMenu3(!openSideMenu3);

  let handleSideMenuArray = [
    {
      openSideMenu: openSideMenu1,
      handleSideMenu: handleSideMenu1,
    },
    {
      openSideMenu: openSideMenu2,
      handleSideMenu: handleSideMenu2,
    },
    {
      openSideMenu: openSideMenu3,
      handleSideMenu: handleSideMenu3,
    },
  ];

  const data = {
    open,
    handleOpen,
    handleSideMenuArray,
  };

  return (
    <AdminNavContext.Provider value={data}>{children}</AdminNavContext.Provider>
  );
};

export { AdminNavProvider };

export default AdminNavContext;
