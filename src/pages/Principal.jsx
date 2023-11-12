import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

const Principal = () => {
  return (
    <div className="Principal">
      <div className="div">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Principal;
