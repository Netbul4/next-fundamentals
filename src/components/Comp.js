import React, { Component } from "react";

// functional expresed component.
const Comp = (props) => <h2>{props.msg}</h2>

// function-based component.
//function Comp(props){
//    return <h2>{props.msg}</h2>;
//}

// class-based component.
//class Comp extends Component {
//  render() {
//    return <h2>{this.props.msg}</h2>;
//  }
//}

export default Comp; 