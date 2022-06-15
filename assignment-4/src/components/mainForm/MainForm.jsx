import React, { useState, useEffect } from 'react';
import Tasks from '../tasks/Tasks';
import Data from "../data/data.json"



const MainForm = () => {

    const [toDoData, setToDoData] = useState([])

    const tester = () => {
        Data.tasks.push(10)
        console.log(Data)
    }


    useEffect(() => {
        fetch("http://localhost:3001/tasks")
          .then((res) => res.json())
          .then((data) => setToDoData(data))
          .catch((error) => console.log(error));
      }, []);

      console.log(Data)
      
    return (


        
<>
    <form className='main-form' action="">
        <input className='task-input' type="text" placeholder='Enter task' required/>
        <input className='tag-input' type="text" placeholder='Optional: add tags' />
        <button className='btn-add'>Add task</button>
    </form>
    <h1 className='task-collection-title'>Task collection</h1>
    <form onSubmit={(e) => e.preventDefault()} action="">
        <button onClick={tester}>CLICK ME</button>
    </form>
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
