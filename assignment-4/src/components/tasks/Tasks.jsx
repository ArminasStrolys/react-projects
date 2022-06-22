import React, { useState } from "react";
import Data from "../data/data.json";

const Tasks = (props) => {
  const [showTitleEdit, setShowTitleEdit] = useState({
    title: true,
    tag: true
  });

  const handleDelete = (e) => {
    e.preventDefault();
    props.getIdFromChild(props.id);
  };
  const handleTitleEdit = (e) => {
    e.preventDefault();
    showTitleEdit.title === false && setShowTitleEdit.title(true);
    setShowTitleEdit.tag(false)
    props.getTitleState(showTitleEdit.title, props.title, props.tags, props.id);
  };
  const handleTagEdit = (e) => {
    e.preventDefault();
    showTitleEdit.tag === false && setShowTitleEdit.tag(true);
    setShowTitleEdit.title(false)
    props.getTagState(showTitleEdit.tag, props.tags, props.id);
    console.log(props.tags);
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
