import React, { useState } from "react";

let initialUser = {
  username: "",
  pass: "",
};

const LoginForm = () => {
  const [form, setForm] = useState(initialUser);

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const checkUser = (e) => {
    console.log(form);
    e.preventDefault();
    if(form.username != "admin" || form.pass != "admin"){
        alert("Usuario o contraseña incorrectos");
        return
    } else {
        alert("Bienvenido pipo!!");
    }
  };

  return (
    <div className="flex justify-center mt-16 h-full sm:h-[80vh] sm:ml-0 sm:mt-0 sm:flex sm:justify-center sm:items-center">
      <div className="w-[95%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] border-[1px] rounded-xl border-slate-300">
        <div className="px-8 pt-2">
          <p className="text-2xl font-bold">Formulario de Inicio de Sesión</p>
        </div>
        <form className="bg-white shadow-md px-8 pt-6 pb-8 rounded-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Nombre de usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              placeholder="Ingrese un usuario"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="pass"
              type="password"
              placeholder="Ingrese una contraseña"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={(e) => checkUser(e)}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
