import React from "react";

const Tasks = (props) => {
  return (
    <div className="task">
      <p>{props.title}</p>

      <span>Tags: {props.tags}</span>

      <form className="form-buttons" action="">
        <button className="btn edit">Edit</button>
        <button className="btn delete">Delete</button>
        <button className="btn tag">Add / Edit tags</button>
      </form>
    </div>
  );
};

export default Tasks;
