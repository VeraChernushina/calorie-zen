import React from 'react';
import './FoodAdder.css';

class FoodAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: '',
      calories: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.food, this.state.calories);
    this.setState({
      food: '',
      calories: ''
    })
  }

  render() {
    return (
      <form className="food-adder" onSubmit={this.handleSubmit}>
        <input name="food" value={this.state.food} type="text" required placeholder="Добавьте продукты" onChange={this.handleChange} />
        <input name="calories" value={this.state.calories} type="number" required placeholder="Калории" onChange={this.handleChange} />
        <button className="food-adder__submit"></button>
      </form>
    );
  }
}

export default FoodAdder;