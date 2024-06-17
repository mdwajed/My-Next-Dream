"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Cedarville_Cursive } from "next/font/google";
const cursive = Cedarville_Cursive({ weight: ["400"], subsets: ["latin"] });
const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  console.log(meals);

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      console.log(data);
      setMeals(data.meals || []);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className={cursive.className}>
      <input
        onChange={handler}
        className="outline-none bg-slate-200 border-transparent p-3 text-slate-900 mt-4"
        type="text"
        placeholder="search your meals"
      />
      <button
        onClick={loadData}
        className="btn btn-primary p-3 bg-red-700 text-white"
      >
        Search
      </button>
      <div className="px-12  text-left">
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="flex gap-8 justify-center items-center my-4"
            >
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={350}
                height={56}
              />

              <div>
                <h3 className="mb-2">Meal : {meal.strMeal}</h3>
                <h3>Instructions : {meal.strInstructions}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
};

export default Meals;
