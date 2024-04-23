import React from "react";

const TimeGreeting = () => {
  // const current = new Date();

  //greeting according to day of time

  let myDate = new Date();
  let hours = myDate.getHours();
  let greeting = "";

  if (hours < 12) greeting = "morning";
  else if (hours >= 12 && hours <= 17) greeting = "afternoon";
  else if (hours >= 17 && hours <= 24) greeting = "evening";

  return (
    <div>
      <h2>Good {greeting},</h2>
    </div>
  );
};

export default TimeGreeting;
