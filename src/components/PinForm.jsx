import React, { useState } from "react";
import { CREATE_PIN } from "../routes/routes";

const initialPin = {
  id: null,
  f_type: "",
  f_title: "",
  f_registration_date: "",
  f_name: "",
  f_data: "",
  f_category: "",
  f_description: "",
};

let pinCategories = [
  { id: 1, name: "Madera" },
  { id: 2, name: "Pladur" },
  { id: 3, name: "Interiores" },
  { id: 4, name: "Pullovers" },
];

const PinForm = () => {
  const [file, setFile] = useState(null);
  const [pin, setPin] = useState(initialPin);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    //console.log(e.target.files[0]);
  };

  const handleChange = (e) => {
    setPin({
      ...pin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* if (!file) {
      alert("Debe seleccionar un archivo");
      return;
    } */

    const actualTime = Date.now();
    let today = new Date(actualTime);
    today = today.toLocaleDateString();

    const formdata = new FormData();
    //Hay que prestar atencion al nombre pues se va a utilizar despues en el backend.('image').
    formdata.append("image", file);
    formdata.append("f_title", pin.f_title);
    formdata.append("f_category", pin.f_category);
    formdata.append("f_description", pin.f_description);
    formdata.append("f_registration_date", today);

    fetch(CREATE_PIN, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error));

    setFile(null);
    document.getElementById("inputFile").value = null;
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white relative w-[620px] mt-5 rounded-lg p-8 sm:p-12 shadow-sm shadow-indigo-600">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="mb-3 block text-base font-bold text-indigo-600">
              Categoría
            </label>
            <select
              className="w-full rounded p-3 text-gray-80 border-gray-500 dark:border-slate-600 outline-none focus:border-primary shadow-sm shadow-indigo-600"
              name="f_category"
              onChange={handleChange}
              value={pin.f_category}
              required
            >
              <option value="" disabled>
                {" "}
                -- Seleccione una opción --{" "}
              </option>
              {pinCategories.map((pin) => (
                <option key={pin.id} value={pin.name}>
                  {pin.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="mb-3 block text-base font-bold text-indigo-600">
              Título
            </label>
            <input
              type="text"
              name="f_title"
              placeholder="Escriba su texto"
              className="w-full rounded p-3 text-gray-800 border-gray-500 dark:border-slate-600 outline-none focus:border-primary shadow-sm shadow-indigo-600"
              onChange={handleChange}
              value={pin.f_title}
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-3 block text-base font-bold text-indigo-600">
              Imagen
            </label>
            <input
              className="w-full rounded p-3 text-gray-800 border-gray-500 dark:border-slate-600 outline-none focus:border-primary focus:outline-none shadow-sm shadow-indigo-600
            file:bg-white file:text-black file:rounded file:border file:border-indigo-600 file:p-2 file:cursor-pointer file:hover:bg-indigo-600 file:hover:text-white file:mr-8 cursor-pointer"
              id="inputFile"
              //name="file_data"
              type="file"
              onChange={handleFile}
            />
          </div>
          <div className="mb-6">
            <label className="mb-3 block text-base font-bold text-indigo-600">
              Descripción
            </label>
            <textarea
              rows="6"
              name="f_description"
              onChange={handleChange}
              placeholder="Escriba su texto"
              className="w-full rounded p-3 text-gray-800 border-gray-500 dark:border-slate-600 outline-none focus:border-primary 
              shadow-sm shadow-indigo-600"
            ></textarea>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              type="submit"
              className=" w-full rounded p-3 text-black border border-indigo-600 outline-none focus-visible:shadow-none focus:border-primary hover:bg-indigo-600 hover:text-white"
              disabled
            >
              Crear Pin y Salir
            </button>
            <button
              type="submit"
              className="w-full rounded p-3 text-black border border-indigo-600 outline-none focus-visible:shadow-none focus:border-primary hover:bg-indigo-600 hover:text-white"
            >
              Crear Pin
            </button>
            <button
              type="submit"
              className="w-full rounded p-3 text-black border border-indigo-600 outline-none focus-visible:shadow-none focus:border-primary hover:bg-indigo-600 hover:text-white"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PinForm;

<div
  class="w-full lg:w-1/2 xl:w-5/12 px-4"
  data-aos="fade-up"
  data-aos-delay="500"
  data-aos-duration="2000"
>
  <div class="bg-gray-100 dark:bg-slate-800 relative rounded-lg p-8 sm:p-12 shadow-lg">
    <form>
      <div class="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          class="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
          name="full_name"
          id="full_name"
        />
      </div>
      <div class="mb-6">
        <input
          type="email"
          placeholder="Your Email"
          class="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
          name="email"
          id="email"
        />
      </div>
      <div class="mb-6">
        <input
          inputMode="numeric"
          placeholder="Your Phone"
          class="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
          name="phone_number"
          id="phone_number"
        />
      </div>
      <div class="mb-6">
        <textarea
          rows="6"
          placeholder="Your Message"
          class="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
          name="message"
          id="message"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="
                                    w-full
                                    text-gray-100
                                    hover:text-gray-700
                                    bg-yellow-400
                                    rounded
                                    border border-primary
                                    dark:border-slate-600
                                    p-3
                                    transition
                                    ease-in-out
                                    duration-500
                                    hover:bg-yellow-300
                                    "
        >
          Send Message
        </button>
      </div>
    </form>
    <div></div>
  </div>
</div>;
