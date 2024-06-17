import React from "react";
const getTime = async () => {
  const res = await fetch("http://localhost:3000/time");
  const data = await res.json();
  return data.currentTime;
};

const Aboutpage = async () => {
  const currentTime = await getTime();
  console.log(currentTime);
  return (
    <div>
      <h2 className="text-3xl text-red-700 font-bold">About Page</h2>
      <h2 className="text-3xl text-red-700 font-bold">Time :{currentTime} </h2>
    </div>
  );
};

export default Aboutpage;
