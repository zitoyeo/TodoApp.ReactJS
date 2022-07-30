import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncresment = () => {
    //state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야 한다.
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    console.log(this.props);
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncresment}
        >
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
