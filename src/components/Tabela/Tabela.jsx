import React, { useEffect, useState } from "react";
import "./style.css";
import weather from "../../data/weather.json";

const Table = ({ selectedVariables, startDate, endDate }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    var resultDate = weather.filter(function (entry) {
      var entryDate = entry["Formatted Date"];
      return entryDate >= startDate && entryDate <= endDate;
    });

    const filteredData = resultDate.map((row) => {
      const filteredRow = {};
      selectedVariables.forEach((variable) => {
        filteredRow[variable] = row[variable];
      });
      filteredRow["Formatted Date"] = row["Formatted Date"];
      return filteredRow;
    });

    setFilteredData(filteredData);
  }, [selectedVariables, startDate, endDate]);

  return (
    <div style={{ padding: "5vw", margin: "15hv" }}>
      <h1>Tabela</h1>
      <div className="table-container">
        {filteredData.map((row, index) => (
          <div key={index} className="table-card">
            <h2>Data: {row["Formatted Date"]}</h2>
            {Object.entries(row).map(
              ([key, value]) =>
                key !== "Formatted Date" && (
                  <div key={key} className="card-body">
                    <div>{`${key}: ${
                      typeof value === "number" ? value.toFixed(2) : value
                    }`}</div>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
