import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Grafic from "../components/Grafico/Grafico";

const GraficoPag = () => {
  return (
    <div className="Principal">
      <div className="div">
        <Header />
        <Main />
        <Grafic />
        <Footer />
      </div>
    </div>
  );
};

export default GraficoPag;
