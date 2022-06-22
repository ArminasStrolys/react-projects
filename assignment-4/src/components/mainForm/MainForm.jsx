import React, { useState, useEffect } from "react";
import Tasks from "../tasks/Tasks";
// this row is responsible for live update
import Data from "../data/data.json";

const MainForm = () => {
  
  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [titleChange, setTitleChange] = useState({
    titleState: false,
    tagState: false,
    title: '',
    tags: '',
    id: ''
  })
  const [toDoData, setToDoData] = useState([]);
  const [addTask, setAddTask] = useState({
    id: 0,
    title: "",
    tags: [],
  });
  
    // Fetches data from json file
  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => setToDoData(data))
      .catch((error) => console.log(error));
  }, []);

  const getIdFromChild = (data) => {
    deleteEntry(data);
  };

  const getTitleState = (title, tags, id) => {
    setTitleChange({...titleChange, tagState: false, titleState: true, title: title, tags: tags, id: id})
  }

  const getTagState = (title, tags, id) => {
    setTitleChange({...titleChange, tagState: true, titleState: false, title: title, tags: tags, id: id})
  }

  const handleTasks = (e, data) => {
    e.preventDefault();
    const copyTask = { ...addTask };
    copyTask[data] = e.target.value;
    setAddTask(copyTask);
    createEntry();
  };

  const handleCloseModal = (e) => {
    e.preventDefault()
    setTitleChange({...titleChange, titleState: false, tagState: false})
  }


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
        tags: addTask.tags
      })
    );
  };

  // Edit entry in json file
  const editEntry = () => {
    fetch("http://localhost:3001/tasks/" + titleChange.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addTask),
    }).then(
      setAddTask({
        title: addTask.title,
        tags: addTask.tags
      }) 
    );
    setTitleChange({...titleChange, titleState: false, tagState: false})
  };

  // Deletes entry in json file
  const deleteEntry = (data) => {
    fetch("http://localhost:3001/tasks/" + data, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
  };

  return (
    <>

      <form onSubmit={handleTasks} className="main-form" action="">
        <input className="task-input"  type="text" placeholder="Enter task" onChange={(e) =>
            setAddTask({ ...addTask, title: e.target.value, id: randomId(0, 999999999),}) } required  />

        <input className="tag-input" type="text" placeholder="Optional: add tags"
          onChange={(e) => setAddTask({ ...addTask, tags: [e.target.value] })} />
          
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
          getTagState={getTagState}
        />
      ))}


      <div style={{display: titleChange.titleState === true ? "block" : "none"}} className="hidden-title">

        <form onSubmit={(e)=>e.preventDefault()} className="title-form" action="">
        <label>Title change: </label>
            <input type="text" defaultValue={titleChange.title} key={titleChange.title} onChange={(e) => setAddTask({ ...addTask, title: e.target.value, tags: titleChange.tags })}/>
            <div className="title-buttons">
          
            <button onClick={editEntry} className="approve">Approve</button>
            <button onClick={handleCloseModal} className="decline">Cancel</button>
            </div>
        </form>
      </div>

      <div style={{display: titleChange.tagState === true ? "block" : "none"}} className="hidden-tags">

        <form onSubmit={(e)=>e.preventDefault()} className="title-form" action="">
        <div className="tag-container">
        <span>{titleChange.tags}</span>
        </div>
        <label>Add tags: </label>
            <input type="text"  defaultValue={''} key={titleChange.tagState} onChange={(e) =>  setAddTask({ ...addTask, title: titleChange.title, tags: [e.target.value] }) }/>
            <div className="title-buttons">
            {console.log(addTask)}
            <button onClick={editEntry} className="approve">Approve</button>
            <button onClick={handleCloseModal} className="decline">Cancel</button>
            </div>
        </form>
      </div>

    </>
  );
};

export default MainForm;
