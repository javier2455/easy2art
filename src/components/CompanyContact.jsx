import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  // FaTelegram,
  FaRoute,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

const CompanyContact = () => {
  return (
    <section className="w-full h-auto flex flex-col mx-auto shadow-lg mt-3 mb-3 px-2 py-5 lg:w-[80%]">
      <div className="px-7 py-2 mb-5">
        <h3 className="text-2xl font-bold mb-2">
          Contáctenos para solicitar nuestros servicios o para cualquier duda
        </h3>
        <p>
          Puede utilizar el siguiente formulario para contactar con nosotros vía
          correo, recibirá un correo en el menor tiempo posible respondiendo sus
          dudas o interrogantes.
        </p>
      </div>
      <ContactForm />
      <div className="px-7 py-2 mb-5 flex flex-col items-center justify-center lg:flex-row lg:justify-around lg:gap-8">
        <div
          className="w-full h-[120px] border-[1px] mb-3 border-slate-200 rounded-md duration-500 flex flex-col items-center justify-center hover:shadow-xl hover:duration-500 hover:border-none
        lg:flex-row lg:justify-center"
        >
          <FaRoute className="text-5xl my-2 text-indigo-600 px-2 lg:w-[30%]  lg:text-3xl" />
          <div className="border-[1px] border-black invisible lg:visible lg:h-[90%]" />
          <p className="text-center ml-2 lg:w-[60%]">
            San Miguel esq. 768 e/ Galeano y Rayos. Centro Habana, Cuba.
          </p>
        </div>
        <div
          className="w-full h-[120px] border-[1px] mb-3 border-slate-200 rounded-md duration-500 flex flex-col items-center justify-center hover:shadow-xl hover:duration-500 hover:border-none
        lg:flex-row lg:justify-center"
        >
          <FaEnvelope className="text-5xl my-2 text-indigo-600 px-2 lg:w-[30%]  lg:text-3xl" />
          <div className="border-[1px] border-black invisible lg:visible lg:h-[90%]" />
          <p className="text-center ml-2 lg:w-[60%]">easy2art@gmail.com</p>
        </div>
        <div
          className="w-full h-[120px] border-[1px] mb-3 border-slate-200 rounded-md duration-500 flex flex-col items-center justify-center hover:shadow-xl hover:duration-500 hover:border-none
        lg:flex-row lg:justify-center"
        >
          <FaPhone className="text-5xl my-2 text-indigo-600 px-2 lg:w-[30%]  lg:text-3xl" />
          <div className="border-[1px] border-black invisible lg:visible lg:h-[90%]" />
          <p className="text-center ml-2 lg:w-[60%]">535-521-5696</p>
        </div>
      </div>
      <div className="px-7 py-2 mb-5 flex flex-col lg:flex-row lg:justify-around lg:items-center">
        <h3 className="text-2xl text-center font-bold mb-2 lg:w-[70%] lg:text-left">
          Puede buscarnos en nuestras redes sociales:
        </h3>
        <div className="flex flex-row justify-center items-center py-3 rounded-md border-[1px] border-slate-200 lg:w-[15%] lg:justify-around">
          <a href="https://www.facebook.com/painter.contrushon">
            <FaFacebook className="text-5xl text-indigo-600 mr-4 cursor-pointer" />
          </a>
          <a href="https://chat.whatsapp.com/LkD7gg49UnB7wYzzvvkuev">
            <FaWhatsapp className="text-5xl text-indigo-600 mr-4 cursor-pointer" />
          </a>
          {/* <FaTelegram className="text-5xl text-indigo-600 cursor-pointer" /> */}
        </div>
      </div>
    </section>
  );
};

export default CompanyContact;
