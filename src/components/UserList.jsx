import React, { Component } from "react";
import UserItem from "./UserItem";

export default class UserList extends Component {
  fullName = "Dung";
  age = 26;
  users = [
    {
      id: 1,
      name: "Duc",
      age: 24,
    },
    {
      id: 2,
      name: "Nam",
      age: 20,
    },
    {
      id: 3,
      name: "Lan",
      age: 22,
    },
  ];
  renderUsers = () => this.users.map((item) => <UserItem key={item.id} user={item} />);

  render() {
    return <div>{this.renderUsers()};</div>;
  }
}
