import React from "react";
import FoodAdder from "./FoodAdder";
import "./Diary.css";

const Diary = () => {
  return (
    <div className="diary">
      <div className="calories">
        <h2>Калории:</h2>
        <ul className="calories__list">
          <li>360</li>
          <li>120</li>
        </ul>
      </div>
      <FoodAdder />
    </div>
  );
};

export default Diary;
