import React from "react";
import Data from "../data/data.json"

const Tasks = (props) => {

  let deleteId

  const handleDelete = (e) => {
    e.preventDefault()
    deleteId = props.id
    props.data(deleteId)
  }
  const handleTitleEdit = (e) => {
    e.preventDefault()

    console.log(props.title)
  }
  const handleTagEdit = (e) => {
    e.preventDefault()

    console.log(props.tags)
  }

  return (
    <>
          <span className="task-number">{props.index + 1} / {Data.tasks.length}</span>
  <div className="task">
      <p>{props.title}</p>

      <span>Tags: {props.tags}</span>

      <form className="form-buttons" action="">
        <button onClick={handleTitleEdit} className="btn edit">Edit</button>
        <button onClick={handleDelete} className="btn delete">Delete</button>
        <button onClick={handleTagEdit} className="btn tag">Add / Edit tags</button>
      </form>
    </div>
    </>
  
  );
};

export default Tasks;
