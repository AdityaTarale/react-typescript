import React, { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

/**
 * !Note
 * 
 * You can just include PropsTypes or StateTypes if your component doesn't need
 * props or state, If you don't have props specify an empty object {} and if you 
 * don't have state you can simply omit the StateTypes
 */