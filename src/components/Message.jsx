import React from "react";
//import { FaInfoCircle } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";


const Message = () => {
  return (
    <div className="absolute bottom-5 right-5 flex bg-red-600 shadow-md shadow-red-600 rounded-xl w-[300px] h-[130px] md:w-[400px] px-2 py-4">
      <div className="w-[20%] flex justify-center items-center border-r-2 border-white"><FaExclamationTriangle className="text-3xl text-white "/></div>
      <div className="flex flex-col justify-between items-center w-[80%] text-white px-2">
        <p className="font-bold text-lg">
          {/* {msg.title} */} Error 404
        </p>
        <p>
         {/* {msg.description} */} No se ha podido recopilar la información requerida. Revise su conexión o pruebe dentro de unos minutos.
        </p>
      </div>
    </div>
  );
};

export default Message;
