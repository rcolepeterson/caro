"use client";
import React from "react";
const Cole = ({ label }) => {
  const [mycount, setCount] = React.useState(20);
  const [myCaro, setMyCaro] = React.useState("no data");
  const [myHello, setMyHello] = React.useState("no data");
  const updateCount = () => {
    console.log("updateCount");
    //do some stuff
    setCount(300);
  };

  //function that fetches data from api/caro and saves it on the state.
  const fetchData = async () => {
    const res = await fetch("/api/caro");
    const data = await res.json();
    console.log(data);
    setMyCaro(data.name);
  };

  const fetchHelloData = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    console.log(data);
    setMyHello(data.name);
  };

  return (
    <div className="flex flex-col">
      <h1 className="uppercase">{label}</h1>
      <p>{mycount}</p>

      <button className="btn bg-slate-600 border-10 mb-6" onClick={updateCount}>
        <h5>Update</h5>
      </button>
      <button className="btn bg-blue-500 border-10" onClick={fetchData}>
        <h5>Fetch Caro data</h5>
      </button>
      <p>CaroData: {myCaro}</p>
      <button className="btn bg-blue-500 border-10" onClick={fetchHelloData}>
        <h5>Fetch Hello data</h5>
      </button>
      <p>HelloData: {myHello}</p>
    </div>
  );
};

export default Cole;
