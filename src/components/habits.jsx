import React, { Component } from "react";
import Habit from "./habit";
import HabitaddForm from "./habitaddForm";

class Habits extends Component {
  //보통 데이터 처리할 때 데이터 있는 쪽에서 같이 처리하는 것이 좋음

  //깡통 개념임.
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitaddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
            />
          ))}
        </ul>
      </>
    );
  }
}
export default Habits;
