"use client";
import React from "react";

// client side componenet. it can have state. see the use client at the top.

const Cole = ({ label }) => {
  // state
  const [mycount, setCount] = React.useState(20);
  const [myCaro, setMyCaro] = React.useState("no data");
  const [myHello, setMyHello] = React.useState("no data");
  //more complex state.
  const [state, setState] = React.useState({ start: true, people: [1, 2, 3] });

  const updateCount = () => {
    console.log("updateCount");
    // get a random number between 1 and 1000
    let random = Math.floor(Math.random() * 1000) + 1;
    //do some stuff
    setCount(random);
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
      <h1 className="uppercase">label: {label}</h1>

      {/* display the count which is stored on the state. */}
      <p>{mycount}</p>

      <button
        className="btn bg-slate-600 mb-6 rounded-full p-2"
        onClick={updateCount}
      >
        <h5>Click me to Update</h5>
      </button>
      <button
        className="btn bg-orange-500 p-2 rounded-full"
        onClick={fetchData}
      >
        <h5>Click me to Fetch Caro data</h5>
      </button>
      <p>CaroData: {myCaro}</p>
      <button
        className="btn bg-blue-500 rounded-3xl p-4"
        onClick={fetchHelloData}
      >
        <h5>Click me to Fetch Hello data</h5>
      </button>
      <p>HelloData: {myHello}</p>
      {/* display the state.people using array.map and use a key */}
      {state.people.map((person, index) => {
        return (
          <div className="w-[60px] h-[60px] bg-pink-500 m-1" key={index}>
            <p>{person}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cole;
