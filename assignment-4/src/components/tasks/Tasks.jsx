import React, { useState } from "react";
import Data from "../data/data.json";

const Tasks = (props) => {

  const handleDelete = (e) => {
    e.preventDefault();
    props.getIdFromChild(props.id);
  };
  const handleTitleEdit = (e) => {
    e.preventDefault();
    props.getTitleState(props.title, props.tags, props.id);
  };
  const handleTagEdit = (e) => {
    e.preventDefault();
    props.getTagState(props.tags, props.id);
  };

  return (
    <>
      <span className="task-number">
        {props.index + 1} / {Data.tasks.length}
      </span>
      <div className="task">
        <p>{props.title}</p>
        <span>Tags: {props.tags}</span>

        <form className="form-buttons" action="">
          <button onClick={handleTitleEdit} className="btn edit">
            Edit
          </button>
          <button onClick={handleDelete} className="btn delete">
            Delete
          </button>
          <button onClick={handleTagEdit} className="btn tag">
            Add / Edit tags
          </button>
        </form>
      </div>
    </>
  );
};

export default Tasks;
