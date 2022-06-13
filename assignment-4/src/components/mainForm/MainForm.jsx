import React, { useState, useEffect } from 'react';
import Tasks from '../tasks/Tasks';
import Data from "../data/data.JSON"

const MainForm = () => {

    const [toDoData, setToDoData] = useState([])

    useEffect(() => {
        fetch(Data)
          .then((res) => res.json())
          .then((data) => setToDoData(data))
          .catch((error) => console.log(error));
      }, []);
console.log(toDoData)
    return (
<>
    <form className='main-form' action="">
        <input className='task-input' type="text" placeholder='Enter task' required/>
        <input className='tag-input' type="text" placeholder='Optional: add tags' />
        <button className='btn-add'>Add task</button>
    </form>
    <h1 className='task-collection-title'>Task collection</h1>
    {/* <Tasks />
    <Tasks />
    <Tasks /> */}
    {toDoData.map((data)=><Tasks
        key={data.id}
        title={data.title}
        tags={data.tags}
    />
    )}
</>
    );
}

export default MainForm;
