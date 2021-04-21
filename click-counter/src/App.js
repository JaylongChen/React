import "./App.css";
import React from "react";

class ClickCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });
  }

  reset(e) {
    e.preventDefault();
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Button Count</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default ClickCount;
