import React from "react";
import SideBar from "../components/SideBar";
import WorksContainer from "../components/WorksContainer";
import { WorkProvider } from "../context/WorkContext";

const Works = () => {
  return (
    <WorkProvider>
      <section className="w-full h-[80vh] flex flex-col sm:flex-row">
        <div className="w-full sm:my-auto sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[15%]">
          <SideBar />
        </div>
        <div className="w-full h-auto sm:mx-4 sm:my-4 sm:h-[85vh] sm:w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%]">
          <WorksContainer />
        </div>
      </section>
    </WorkProvider>
  );
};

export default Works;
