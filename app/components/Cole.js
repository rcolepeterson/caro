"use client";
import React from "react";
const Cole = ({ label }) => {
  const [mycount, setCount] = React.useState(20);
  const updateCount = () => {
    console.log("updateCount");
    //do some stuff
    setCount(300);
  };

  return (
    <div>
      <h1 className="uppercase">{label}</h1>
      <p>{mycount}</p>
      <button classname="border-10" onClick={() => {}}>
        Update
      </button>
    </div>
  );
};

export default Cole;
