import React, { Component } from "react";

export default class Parent extends Component {
  state = {
    counter: 0,
  };

  increaseCounter = (e) => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Component Comunication.</h2>
        <p>
          Counter <b>{this.state.counter}</b>
        </p>
        <Child increaseCounter={this.increaseCounter} msg="Child 1 message." />
        <Child increaseCounter={this.increaseCounter} msg="Child 2 message." />
      </>
    );
  }
}

function Child(props) {
  return (
    <>
      <h3>{props.msg}</h3>
      <button onClick={props.increaseCounter}>+</button>
    </>
  );
}
