import React from "react";

const CurrentTime = () => {
  const current = new Date();

  //current time
  const showTime =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();

  return (
    <div>
      <h3>{showTime}</h3>
    </div>
  );
};

export default CurrentTime;
