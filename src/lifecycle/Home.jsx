import React, { Component } from "react";
import Child from "./Child";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      isShowChild: true,
    };
    console.log("Constructor");
  }
  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps");
    // currentState.number = 10;
    return currentState;
  }
  render() {
    console.log("render");
    return (
      <div className="container p-5 bg-success">
        <h1>Life cycle: {this.state.number}</h1>
        <button
          className="btn btn-primary"
          onClick={() =>
            this.setState({
              number: this.state.number + 1,
            })
          }
        >
          +
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            this.setState({
              like: this.state.like + 1,
            })
          }
        >
          Increase like
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            this.setState({
              isShowChild: false,
            })
          }
        >
          Hide child
        </button>
        {this.state.isShowChild && <Child number={this.state.number} />}
      </div>
    );
  }
  componentDidMount() {
    // this.setState({
    //   number: 100,
    // });
    console.log("componentDidMount");
  }
}

export default Home;
