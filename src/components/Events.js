import React, { Component } from "react";

export class EventsES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(e) {
    console.log("increasing value");
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrease(e) {
    console.log("decreasing value");
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Events in class components ES6.</h2>
        <nav>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </nav>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

// Property Initializers.
export class EventsES7 extends Component {
  state = {
    counter: 0,
  };

  increase = (e) => {
    console.log("increasing value");
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrease = (e) => {
    console.log("decreasing value");
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Events in class components ES7.</h2>
        <nav>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </nav>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

function Button (props){
  return <button onClick={props.myOnClick}>Component button.</button>
}

export class MoreEvents extends Component {
  handleClick = (e, msg) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <h2>More about events.</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Sending a parameter trough event.")
          }
        >
          Hello
        </button>
        <Button myOnClick={(e) =>
            this.handleClick(e, "Sending a parameter trough event.")
          }/>
      </div>
    );
  }
}
