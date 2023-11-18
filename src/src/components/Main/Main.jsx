import React, { useState } from "react";
import MAPA from "../../pages/Mapa";
import Grafic from "../Grafico/Grafico";
import TableComponent from "../Tabela/Tabela";
import "./style.css";

const Main = () => {
  const [selectedFormat, setSelectedFormat] = useState("map"); // Default to 'map'

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const renderFormat = () => {
    switch (selectedFormat) {
      case "map":
        return <MAPA />;
      case "graph":
        return <Grafic />;
      case "table":
        return <TableComponent />;
      default:
        return null;
    }
  };

  return (
    <main>
      <div className="overlap">
        <div className="filtro">
          <div className="overlap-2">
            <div className="hero">
              <div className="hero-content">
                <div className="text-block-hero">
                  <div className="flexcontainer"></div>
                  <h2 className="title">Filtre os Dados</h2>
                </div>
                <p className="text">
                  <span className="span">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculusmus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    <br />
                  </span>
                </p>
              </div>
            </div>
            <div className="container">
              <div className="filter-container">
                <div className="filter">
                  <div className="form-group">
                    <div className="input-group date">
                      <label htmlFor="start">Data de Início: </label>
                      <input type="date" placeholder="Data de Início" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group date">
                      <label htmlFor="finish">Data Final: </label>
                      <input type="date" placeholder="Data Final" />
                    </div>
                  </div>
                  <div className="input-block">
                    <label htmlFor="variavel-label">Variaveis: </label>
                    <input
                      type="text"
                      className="variaveis"
                      placeholder="Variáveis"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="frequencia-label">Frequencia: </label>
                    <input
                      type="text"
                      className="frequencia"
                      placeholder="Frequência"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="estacao-label">Estação: </label>
                    <input
                      type="text"
                      className="estacao"
                      placeholder="Estação"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="monitoramento-label">
                      Ponto de Monitoramento:{" "}
                    </label>
                    <input
                      type="text"
                      className="monitoramento"
                      placeholder="Ponto de Monitoramento"
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="operacao-label">Operação: </label>
                    <input
                      type="text"
                      className="operacao"
                      placeholder="Operação"
                    />
                  </div>
                </div>
                <div className="buttons">
                  <button className="search-button">Pesquisar</button>
                  <div className="formato-group">
                    <select
                      className="formato-button"
                      value={selectedFormat}
                      onChange={handleFormatChange}
                    >
                      <option value="map">Mapa</option>
                      <option value="graph">Grafico</option>
                      <option value="table">Tabela</option>
                    </select>
                  </div>
                  <button className="report-button">Visusalizar Dados</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderFormat()}
    </main>
  );
};

export default Main;
