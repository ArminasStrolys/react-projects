import React from "react";

const Tasks = () => {
  return (
    <div className="task">
      <p> A single task here</p>

      <span>#Monday </span>

      <form className="form-buttons" action="">
        <button className="btn edit">Edit</button>
        <button className="btn delete">Delete</button>
        <button className="btn tag">Add / Edit tags</button>
      </form>
    </div>
  );
};

export default Tasks;
