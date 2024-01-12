import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "Component has been deleted of DOM");
  }

  render() {
    return <h3>{this.props.hour}</h3>;
  }
}

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log(0, "Initializing Component. Not active in DOM yet.");

    this.state = {
      hour: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.timer = null;
  }

  componentDidMount() {
    console.log(1, "Component is now in DOM.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "Component is Updating.");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.timer = setInterval(() => {
      this.setState({
        hour: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  start = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  stop = () => {
    clearInterval(this.timer);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(4, "Component is rendered in DOM.");
    return (
      <>
        <h2>Class Components Life Cycle</h2>
        {this.state.visible && <Clock hour={this.state.hour} />}
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </>
    );
  }
}
