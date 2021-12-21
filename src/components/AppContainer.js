import React from "react";
import FoodAdder from "./FoodAdder";
import "./AppContainer.css";

function AppContainer() {
  return (
    <div className="container">
      <div className="calories">
        <h2>Калории:</h2>
      </div>
      <FoodAdder />
    </div>
  );
}

export default AppContainer;
