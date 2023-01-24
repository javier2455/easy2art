import React from "react";
import Intro from "../components/Intro";
//import Message from "../components/Message";
import CompanyData from "../components/CompanyData";
import CompanyServices from "../components/CompanyServices";
import CompanyWorks from "../components/CompanyWorks";
import CompanyContact from "../components/CompanyContact";
import CompanyFooter from "../components/CompanyFooter";
import { WorkProvider } from "../context/WorkContext";

const Home = () => {
  return (
    <section className="bg-white">
      <div>
        <Intro />
        {/* <Message /> */}
        <CompanyData />
        <CompanyServices />
        <WorkProvider>
          <CompanyWorks />
        </WorkProvider>
        <CompanyContact />
        <CompanyFooter />
      </div>
    </section>
  );
};

export default Home;
