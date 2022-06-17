import React, { useState, useEffect } from "react";
import Tasks from "../tasks/Tasks";
// this row is responsible for live update
import Data from "../data/data.json";

const MainForm = () => {
  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [titleChange, setTitleChange] = useState({
    state: false,
    title: ''
  })
  const [toDoData, setToDoData] = useState([]);
  const [addTask, setAddTask] = useState({
    id: 0,
    title: "",
    tags: "",
  });

  const getIdFromChild = (data) => {
    deleteEntry(data);
  };

  const getTitleState = (titleState, title) => {
    setTitleChange({...titleChange, state: titleState, title: title})
  }


  const handleTasks = (e, data) => {
    e.preventDefault();
    const copyTask = { ...addTask };
    copyTask[data] = e.target.value;
    setAddTask(copyTask);
    createEntry();
  };

  // Fetches data from json file
  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => setToDoData(data))
      .catch((error) => console.log(error));
  }, []);

  // Creates entry in json file
  const createEntry = () => {
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addTask),
    }).then(
      setAddTask({
        id: addTask.id,
        title: addTask.title,
        tags: addTask.tags,
      })
    );
  };

  // Edit entry in json file
//   const editTitle = () => {
//     fetch("http://localhost:3001/tasks", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(addTask),
//     }).then(
//       setAddTask({
//         id: addTask.id,
//         title: addTask.title,
//         tags: addTask.tags,
//       })
//     );
//   };

    // Deletes entry in json file
  const deleteEntry = (data) => {
    fetch("http://localhost:3001/tasks/" + data, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
  };
  
  const handleCloseModal = (e) => {
    e.preventDefault()
    setTitleChange({...titleChange, state: false})
  }

  return (
    <>
      <form onSubmit={handleTasks} className="main-form" action="">
        <input
          className="task-input"
          type="text"
          placeholder="Enter task"
          onChange={(e) =>
            setAddTask({
              ...addTask,
              title: e.target.value,
              id: randomId(0, 999999999),
            })
          }
          required
        />
        <input
          className="tag-input"
          type="text"
          placeholder="Optional: add tags"
          onChange={(e) => setAddTask({ ...addTask, tags: e.target.value })}
        />
        <button type="submit" className="btn-add">
          Add task
        </button>
      </form>
      <h1 className="task-collection-title">Task collection</h1>

      {toDoData.map((data, index) => (
        <Tasks
          key={data.id}
          id={data.id}
          title={data.title}
          tags={data.tags}
          index={index}
          getIdFromChild={getIdFromChild}
          getTitleState={getTitleState}
        />
      ))}
      <div style={{display: titleChange.state === true ? "block" : "none"}} className="hidden-title">
        <form className="title-form" action="">
        <label>Title change: </label>
            <input type="text" placeholder={titleChange.title} />
            <div className="title-buttons">
            <button className="approve">Approve</button>
            <button onClick={handleCloseModal} className="decline">Cancel</button>
            </div>
        </form>
      </div>
      <div className="hidden-tags">
        <form action="">
            <input type="text" placeholder="Tags"/>
        </form>
      </div>
    </>
  );
};

export default MainForm;
