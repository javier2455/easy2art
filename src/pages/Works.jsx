import React from "react";
// import SideBar from "../components/SideBar";
import SearchWorks from "../components/SearchWorks";
import WorksContainer from "../components/WorksContainer";
import { WorkProvider } from "../context/WorkContext";

const Works = () => {
  return (
    <WorkProvider>
      <section className="w-full flex flex-col">
        <SearchWorks />
        <div className="w-full h-auto">
          <WorksContainer />
        </div>
      </section>
    </WorkProvider>
  );
};

export default Works;
