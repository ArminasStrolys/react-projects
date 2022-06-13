import React from 'react';
import Tasks from '../tasks/Tasks';

const MainForm = () => {
    return (
<>
    <form className='main-form' action="">
        <input className='task-input' type="text" placeholder='Enter task' required/>
        <input className='tag-input' type="text" placeholder='Optional: add tags' />
        <button className='btn-add'>Add task</button>
    </form>
    <h1 className='task-collection-title'>Task collection</h1>
    <Tasks />
    <Tasks />
    <Tasks />
</>
    );
}

export default MainForm;
