import React, { useContext } from "react";
import WorkContext from "../context/WorkContext";
import CardWork from "./CardWork";
//import Loading from "./Loading";

/* const MessageError = () => (
  <h1 className="text-center">
    Lo sentimos, tenemos problemas para cargar los datos
  </h1>
); */

const WorksContainer = () => {
  // const { COMPANY_WORKS_DONE, loading } = useContext(WorkContext);
  const { dbPins } = useContext(WorkContext);

  // console.log("Estos son los datos:", dbPins);

  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <div className="h-full gap-2 mx-2 mb-4 sm:mx-0 sm:grid sm:justify-items-center sm:grid-cols-3 lg:grid-cols-3">
        {dbPins.map((w, index) => (
          <CardWork key={index} work={w} />
        ))}
        {/* {dbPins.length === 0 ? <div className="flex justify-center items-center">
            <MessageError />
          </div>
            : dbPins.map((w, index) => (
              <CardWork key={index} work={w} />
            ))} */}
      </div>
    </>
  );
};

export default WorksContainer;
