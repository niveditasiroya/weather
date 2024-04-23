import React from "react";

const NowDate = () => {
  //for current Date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div>
      <h3>Date: {date}</h3>
    </div>
  );
};

export default NowDate;
