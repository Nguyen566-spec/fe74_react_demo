import React, { createRef, PureComponent } from "react";

export class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.numberRef = createRef();
    this.interval = {};
    console.log("Constructor child");
  }
  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps child");
    currentState.number = nextProps.number;
    return currentState;
  }
  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (this.props.number !== nextState.number) {
  //       return true;
  //     }
  //     return false;
  //   }
  render() {
    console.log("render child");
    return (
      <div className="p-4 bg-warning">
        <h2 ref={this.numberRef}>Number: {this.state.number}</h2>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("this.refs number", this.numberRef.current.innerHTML);
    return this.numberRef.current.innerHTML;
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapShot", snapShot);
    if (prevProps.number === 105) {
      console.log("Call API");
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Hello world");
    }, 1000);
    console.log("componentDidMount child");
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Child;
