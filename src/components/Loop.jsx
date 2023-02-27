import React, { Component } from "react";

export default class Loop extends Component {
  studentList = [
    {
      id: 1,
      name: "Dung",
      age: 24,
    },
    {
      id: 2,
      name: "Nam",
      age: 25,
    },
    {
      id: 3,
      name: "Hai",
      age: 26,
    },
  ];
  renderStudentList = () => {
    // const studentUIs = [];
    // for (let item of this.studentList) {
    //   studentUIs.push(
    //     <div className="col-4">
    //       <div className="card">
    //         <h1>Name: {item.name}</h1>
    //         <h2>Age: {item.age}</h2>
    //       </div>
    //     </div>
    //   );
    // }
    // return studentUIs;
    const studentUI = this.studentList.map((item) => {
      return (
        <div key={item.id} className="col-4">
          <div className="card">
            <h1>Name: {item.name}</h1>
            <h2>Age: {item.age}</h2>
          </div>
        </div>
      );
    });
    return studentUI;
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderStudentList()}</div>
      </div>
    );
  }
}
