import React from "react";
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
    </div>
  );
};

export default Diary;
