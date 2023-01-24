import React, { useContext } from "react";
import WorkContext from "../context/WorkContext";
import CardWork from "./CardWork";
import Loading from "./Loading";

const MessageError = () => <h1 className="text-center">Lo sentimos, tenemos problemas para cargar los datos</h1>;

const WorksContainer = () => {
  // const { COMPANY_WORKS_DONE, loading } = useContext(WorkContext);
  const { dbPins, loading } = useContext(WorkContext);

  // console.log("Estos son los datos:", dbPins);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full p-2 gap-1 sm:grid sm:justify-items-center teidi sm:grid-cols-2 sm:overflow-hidden sm:overflow-y-scroll lg:grid-cols-3">
          {dbPins.length === 0 ? <div className="flex justify-center items-center">
            <MessageError />
          </div>
            : dbPins.map((w, index) => (
              <CardWork key={index} work={w} />
            ))}
          {/* {dbPins.length === 0 ? <div className="flex justify-center items-center">
            <MessageError />
          </div>
            : dbPins.map((w, index) => (
              <CardWork key={index} work={w} />
            ))} */}
        </div>
      )}
    </>
  );
};

export default WorksContainer;
