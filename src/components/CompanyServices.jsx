import React from "react";
import { FaHammer, FaTshirt, FaHome, FaGripLines } from "react-icons/fa";
import { COMPANY_SERVICES_CARDS } from '../constants/constants.js'

let icons = [<FaHammer className="text-xl" />, <FaGripLines className="text-xl" />, <FaHome className="text-xl" />, <FaTshirt className="text-xl" />,];

const CompanyServices = () => {
  return (
    <section className="w-full h-auto flex flex-col mx-auto shadow-lg mt-3 mb-3 px-2 py-5 lg:w-[80%]">
      <div className="px-7 py-2 mb-5">
        <h3 className="text-2xl font-bold mb-2">¿Qué servicios ofrecemos?</h3>
        <p>
          Ofrecemos diversos servicios que van desde trabajos con madera, pladur, decoración de interiores y exteriores hasta impresion de pullovers. A continuación mostramos algunos de nuestros servicios más solicitados.
        </p>
      </div>
      <div className="w-full h-auto grid gap-4 grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-4">
        {COMPANY_SERVICES_CARDS.map((c, index) => (
          <div key={index} className="w-[90%] h-auto px-7 py-2 border-[1px] border-slate-200 rounded-md duration-500 flex flex-col hover:shadow-xl hover:duration-500 hover:border-none">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold">{c.title}</p>
              {icons[index]}
            </div>
            <span>
              {c.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyServices;
