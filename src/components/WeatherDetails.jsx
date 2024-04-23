import React from "react";

const WeatherDetails = (props) => {
  return (
    <div className="weather-details">
      <div className="celsios">
        <h1>{props.celcios}º</h1>
        <h2>{props.weather}</h2>
      </div>
      <div className="types">
        <div>
          <p>
            <i className="fa-solid fa-wind"></i>
            {props.wind} mph
          </p>
        </div>
        <div>
          <p>
            <i className="fa-solid fa-droplet"></i> {props.humidity} %
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
