import { createContext, useEffect, useState } from "react";
import { COMPANY_WORKS_DONE } from "../constants/constants";
// import { helpHttp } from "../helpers/helpHttp";
// import { GET_ALL_PINS, GET_PIN_BY_CATEGORY } from "../routes/routes";

const WorkContext = createContext();

const WorkProvider = ({ children }) => {
  const [dbPins, setDbPins] = useState([]);
  // const [loading, setLoading] = useState(false);

  // let api = helpHttp();

  // const getAllPins = () => {
  //   setLoading(true);
  //   api
  //     .get(GET_ALL_PINS)
  //     .then((res) => {
  //       console.log("Esta es la respuesta: ", res)
  //       setLoading(false);
  //       if (!res.error) {
  //           setDbPins(res.data);
  //       } else {
  //           setDbPins([]);
  //         console.log("Negativo", res.msg);
  //       }
  //     })
  //     .catch((error) => console.error("Cae aqui?: ",error));
  // };

  useEffect(() => {
    getAllPins();

    //Old form to fetch data
    // If i want to send a body a need to JSON.stringify(data)
    /* fetch(GET_ALL_PINS)
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (!res.error) {
          setDbPins(res.data);
          //console.log("Satisfactorio", res.msg);
          //console.log("Informacion", res.data);
        } else {
          setDbPins([]);
          console.log("Negativo", res.msg);
        }
      })
      .catch((error) => console.error(error)); */
  }, []);

  // const getPinsByCategory = (cat) => {
  //   try {
  //     const cuerpo = {
  //       body: {
  //         category: cat,
  //       },
  //     };

  //     api
  //       .post(GET_PIN_BY_CATEGORY, cuerpo)
  //       .then((res) => {
  //         if (!res.error) {
  //           setDbPins(res.data);
  //         } else {
  //           setDbPins([]);
  //           console.log("Negativo", res.msg);
  //         }
  //       })
  //       .catch((error) => console.error(error));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getAllPins = () => setDbPins(COMPANY_WORKS_DONE)

  const getPinsByCategory = (c) => {
    let data = COMPANY_WORKS_DONE.filter(p => p.category === c);
    setDbPins(data)
  }

  const data = {
    // COMPANY_WORKS_DONE,
    dbPins,
    getPinsByCategory,
    getAllPins,
    // loading,
  };

  return <WorkContext.Provider value={data}>{children}</WorkContext.Provider>;
};

export { WorkProvider };

export default WorkContext;
