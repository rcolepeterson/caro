import React from "react";
// this react component take a string as a prop and renders it to the page.

const MyComponent = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-orange-500 uppercase font-bold">{label}</h1>
    </div>
  );
};

export default MyComponent;
