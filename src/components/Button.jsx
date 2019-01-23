import React, { Component } from "react";
import "./Button.css";
class Button extends Component {
  //state = {counter: 0}
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  // componentDidMount() {
  //   this.setState({ counter: this.props.init });
  // }
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <button onClick={this.handleClick} style={{ color: this.props.color }}>
        Clicked # {this.state.counter} times
      </button>
    );
  }
}

export default Button;
