import React from "react";
// import CityData from "./CityData";
import NowDate from "./NowDate";
import Greeting from "./Greeting";
import CurrentTime from "./CurrentTime";

const MainCard = (props) => {
  return (
    <div className="main-card">
      {/* <CityData city="" /> */}
      <NowDate />
      <Greeting />
      <CurrentTime />
    </div>
  );
};

export default MainCard;
