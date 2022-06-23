import React from "react";
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
    props.getTagState(props.title, props.tags, props.id);
  };

  return (
    <>
      <span className="task-number">
        {props.index + 1} / {Data.tasks.length}
      </span>
      <div className="task">
        <p>{props.title}</p>
        <span>
          Tags:{" "}
          {props.tags.map((value) => value.length > 0 && "#" + value + " ")}
        </span>

        <form className="form-buttons" action="">
          <button onClick={handleTitleEdit} className="btn edit">
            Edit title
          </button>
          <button onClick={handleDelete} className="btn delete">
            Delete task
          </button>
          <button onClick={handleTagEdit} className="btn tag">
            Add tags
          </button>
        </form>
      </div>
    </>
  );
};

export default Tasks;
