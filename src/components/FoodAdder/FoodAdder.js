import React, { useState } from 'react';
import './FoodAdder.css';

const FoodAdder = () => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState(0);

  const handleFoodChange = (e) => {
    setFood(e.target.value);
  }

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      food: '',
      calories: ''
    })
  }

    return (
      <form className="food-adder" onSubmit={handleSubmit}>
        <input name="food" value={food} type="text" required placeholder="Добавьте продукты" onChange={handleFoodChange} />
        <input name="calories" value={calories} type="number" required placeholder="Калории" onChange={handleCaloriesChange} />
        <button className="food-adder__submit"/>
      </form>
    );
}

export default FoodAdder;