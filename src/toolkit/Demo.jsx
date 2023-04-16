import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { demoReduxAction } from "./redux/slice";

const Demo = () => {
  const { tasks, task } = useSelector((state) => state.demoReduxReducer);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(task?.name || "");
  }, [task]);
  return (
    <div className="container">
      <h1>Task list</h1>
      <div className="d-flex">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            !task
              ? dispatch(
                  demoReduxAction.addTask({
                    name: inputRef.current.value,
                    id: Date.now(),
                    isCompleted: false,
                  })
                )
              : dispatch(
                  demoReduxAction.updateTask({
                    ...task,
                    name: inputRef.current.value,
                  })
                );
          }}
        >
          {task ? "Update task" : "Add task"}
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.isCompleted ? "Done" : "Not done"}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch(demoReduxAction.editTask(item.id))}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(demoReduxAction.deleteTask(item.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
