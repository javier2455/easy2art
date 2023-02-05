import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelopeOpenText } from "react-icons/fa";

const ContactForm = () => {
  const [loadingEmail, setLoadingEmail] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoadingEmail(true);
    // console.log("Test");
    emailjs.sendForm('service_39uw55h', 'template_osqb78f', form.current, 'kTYMLwW3EWZdsgSGQ')
      .then((result) => {
        setLoadingEmail(false);
        console.log(result.text);
        console.log("Mensaje enviado");
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="px-6 py-2">
      <form ref={form} /* onSubmit={sendEmail} */>
        <div className="mb-4">
          <label className="block text-md font-bold mb-2" htmlFor="username">
            Nombre Completo:
          </label>
          <input
            name="user_name"
            id="user_name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Escriba aqui..." />
        </div>
        <div className="mb-4">
          <label className="block text-md font-bold mb-2" htmlFor="email">
            Correo:
          </label>
          <input
            name="user_email"
            id="user_email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Escriba aqui..." />
        </div>
        <div className="mb-4">
          <label className="block text-md font-bold mb-2" htmlFor="username">
            Mensaje:
          </label>
          <textarea
            name="message"
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            cols="30"
            rows="10"
            placeholder="Escriba aqui..."
          ></textarea>
          {/* <input
              className="flex w-full items-center justify-center rounded-md border border-transparent      bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 sm:w-[40%] md:w-[36%] lg:w-[32%] xl:w-[17%] md:py-2 md:px-2 md:text-lg"
              type="submit"
              value="Send" /> */}
          <button
            disabled={loadingEmail}
            className={`flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white 
            hover:bg-indigo-700 sm:w-[40%] md:w-[36%] lg:w-[32%] xl:w-[17%] md:py-2 md:px-2 md:text-lg
            ${loadingEmail && "bg-indigo-300 cursor-not-allowed hover:bg-indigo-300"}`}
            onClick={(e) => sendEmail(e)}
          >
            Enviar Mensaje <FaEnvelopeOpenText className="ml-2 text-xl" />
          </button>
        </div>
      </form>
      {/* <div className="mb-4">
        <button

          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white 
                hover:bg-indigo-700 sm:w-[40%] md:w-[36%] lg:w-[32%] xl:w-[17%] md:py-2 md:px-2 md:text-lg"
        >
          Enviar Mensaje <FaEnvelopeOpenText className="ml-2 text-xl" />
        </button>
      </div> */}
    </div>
  );
};

export default ContactForm;
