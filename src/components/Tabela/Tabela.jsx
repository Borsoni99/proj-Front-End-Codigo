import React from "react";
import "./style.css"; // Add your CSS file for styling
import weather from "../../data/weather.json";

const Table = () => {
  return (
    <div className="table-container">
      {weather.map((row) => (
        <div key={row.Date} className="table-card">
          <div className="card-header">
            <span>Data: {row["Formatted Date"]}</span>
          </div>
          <div className="card-body">
            <div>Summary: {row.Summary}</div>
            <div>Precip Type: {row["Precip Type"]}</div>
            <div>Temperature: {row["Temperature (C)"].toFixed(2)} (C)</div>
            <div>
              Apparent Temperature: {row["Apparent Temperature (C)"].toFixed(2)}{" "}
              (C)
            </div>
            <div>Humidity: {row.Humidity}</div>
            <div>Wind Speed: {row["Wind Speed (km/h)"].toFixed(2)} (km/h)</div>
            <div>
              Wind Bearing: {row["Wind Bearing (degrees)"].toFixed(2)} (degrees)
            </div>
            <div>Visibility: {row["Visibility (km)"].toFixed(2)} (km)</div>
            <div>Loud Cover: {row["Loud Cover"]}</div>
            <div>
              Pressure: {row["Pressure (millibars)"].toFixed(2)} (millibars)
            </div>
            <div>Daily Summary: {row["Daily Summary"]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
