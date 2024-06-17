import Meals from "@/Components/Meals";
import React from "react";

const Mealspage = () => {
  return (
    <div className="text-center mt-12">
      <h2 className="text-red-700 text-2xl font-semibold mb-4">
        All Meals Here
      </h2>
      <h2>Find Your Meal By Searching .......</h2>
    <Meals/>
    </div>
  );
};

export default Mealspage;
