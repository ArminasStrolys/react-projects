import React from "react";
import Data from "../data/data.json"

const Tasks = (props) => {

  return (
    <div className="task">
      <p>{props.title}</p>

      <span>Tags: {props.tags}</span>
      <p>Task {props.index + 1}/{Data.tasks.length}</p>

      <form className="form-buttons" action="">
        <button className="btn edit">Edit</button>
        <button className="btn delete">Delete</button>
        <button className="btn tag">Add / Edit tags</button>
      </form>
    </div>
  );
};

export default Tasks;
