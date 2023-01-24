import React from "react";
import {
  FaEnvelopeOpenText,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaRoute,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const CompanyContact = () => {
  return (
    <section className="w-full h-auto flex flex-col mx-auto shadow-lg mt-3 mb-3 px-2 py-5 lg:w-[80%]">
      <div className="px-7 py-2 mb-5">
        <h3 className="text-2xl font-bold mb-2">
          Contáctenos para solicitar nuestros servicios o para cualquier duda
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          magni ipsam repudiandae fugit beatae quaerat. Distinctio quam
          voluptate, id est eaque nobis, doloribus, voluptates repudiandae ipsum
          debitis numquam qui. Quo iusto alias dicta odio maxime.
        </p>
      </div>
      <div className="px-6 py-2">
        <div className="mb-4">
          <label className="block text-md font-bold mb-2" htmlFor="username">
            Nombre Completo:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Escriba aqui..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-bold mb-2" htmlFor="username">
            Correo:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Escriba aqui..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-bold mb-2" htmlFor="username">
            Mensaje:
          </label>
          <textarea
            name=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            cols="30"
            rows="10"
            placeholder="Escriba aqui..."
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white 
                hover:bg-indigo-700 sm:w-[40%] md:w-[36%] lg:w-[32%] xl:w-[17%] md:py-2 md:px-2 md:text-lg"
          >
            Enviar Mensaje <FaEnvelopeOpenText className="ml-2 text-xl" />
          </button>
        </div>
      </div>
      <div className="px-7 py-2 mb-5 flex flex-col items-center justify-center lg:flex-row lg:justify-around lg:gap-8">
        <div className="w-full h-[120px] border-[1px] mb-3 border-slate-200 rounded-md duration-500 flex flex-col items-center justify-center hover:shadow-xl hover:duration-500 hover:border-none
        lg:flex-row lg:justify-center">
            <FaRoute className="text-5xl my-2 text-indigo-600 px-2 lg:w-[30%]  lg:text-3xl"/>
            <div className="border-[1px] border-black invisible lg:visible lg:h-[90%]"/>
            <p className="text-center ml-2 lg:w-[60%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, repellat.</p>
        </div>
        <div className="w-full h-[120px] border-[1px] mb-3 border-slate-200 rounded-md duration-500 flex flex-col items-center justify-center hover:shadow-xl hover:duration-500 hover:border-none
        lg:flex-row lg:justify-center">
            <FaEnvelope className="text-5xl my-2 text-indigo-600 px-2 lg:w-[30%]  lg:text-3xl"/>
            <div className="border-[1px] border-black invisible lg:visible lg:h-[90%]"/>
            <p className="text-center ml-2 lg:w-[60%]">e4syart@gmail.com</p>
        </div>
        <div className="w-full h-[120px] border-[1px] mb-3 border-slate-200 rounded-md duration-500 flex flex-col items-center justify-center hover:shadow-xl hover:duration-500 hover:border-none
        lg:flex-row lg:justify-center">
            <FaPhone className="text-5xl my-2 text-indigo-600 px-2 lg:w-[30%]  lg:text-3xl"/>
            <div className="border-[1px] border-black invisible lg:visible lg:h-[90%]"/>
            <p className="text-center ml-2 lg:w-[60%]">450-2896-5693</p>
        </div>
      </div>
      <div className="px-7 py-2 mb-5 flex flex-col lg:flex-row lg:justify-around lg:items-center">
        <h3 className="text-2xl text-center font-bold mb-2 lg:w-[70%] lg:text-left">
          Puede buscarnos en nuestras redes sociales:
        </h3>
        <div className="flex flex-row justify-center items-center py-3 rounded-md border-[1px] border-slate-200 lg:w-[30%] lg:justify-around">
          <FaWhatsapp className="text-5xl text-indigo-600 mr-4 cursor-pointer" />
          <FaFacebook className="text-5xl text-indigo-600 mr-4 cursor-pointer" />
          <FaTelegram className="text-5xl text-indigo-600 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default CompanyContact;
