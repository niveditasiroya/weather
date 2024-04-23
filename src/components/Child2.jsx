import React from "react";

const Child2 = ({ onClick }) => {
  return (
    <div className="search-form">
      <input type="text" onChange={(e) => onClick(e.target.value)} />
      <button onClick={() => onClick(onClick)}>Change</button>
    </div>
  );
};

export default Child2;
