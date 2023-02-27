import React, { Component } from "react";

export default class DataBinding extends Component {
  fullName = "";
  age = 28;
  text = () => {
    console.log(`Hello world ${this.fullName}`);
  };
  hello = (message) => {
    alert(message);
  };
  state = {
    isLogin: true,
  };
  login = () => {
    this.setState({
      isLogin: false,
    });
  };
  logout = () => {
    this.setState({
      isLogin: true,
    });
  };
  renderNav = () => {
    if (this.state.isLogin) {
      return (
        <nav>
          <button onClick={() => this.login()}>Login</button>
          <button>Sign up</button>
        </nav>
      );
    }
    return (
      <nav>
        <h1>Hello, Dung</h1>
        <button onClick={() => this.logout()}>Logout</button>
      </nav>
    );
  };
  render() {
    return (
      <>
        {this.renderNav()}
        <h1>Name: {this.fullName}</h1>
        <h2>Age: {this.age}</h2>
        <button onClick={() => this.text()}>Click me</button>
        <button onClick={() => this.hello("Hello")}>Click me</button>
      </>
    );
  }
}
