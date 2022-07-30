import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: "Reading",
        count: 0,
      },
      {
        id: 2,
        name: "Running",
        count: 0,
      },
      {
        id: 3,
        name: "Cording",
        count: 0,
      },
    ],
  };

  //보통 데이터 처리할 때 데이터 있는 쪽에서 같이 처리하는 것이 좋음

  handleIncrement = (habit) => {
    const habits = [...this.state.habits]; //기본으로 가지고 있는 state.habits을 ...(스프레드 오퍼레이터)로 복사해옴
    const index = habits.indexOf(habit); //habit에 몇번째 있는지 찾을 수 있는 indexOf()Api사용
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count; //직접 수정했으니 썩 좋은건 아님.

    this.setState(this.state);
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}
export default Habits;
