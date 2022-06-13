import React from 'react';
import Tasks from '../tasks/Tasks';

const MainForm = () => {
    return (
<>
    <form className='main-form' action="">
        <input type="text" placeholder='Enter task' />
        <button className='btn-add'>Add task</button>
    </form>
    <Tasks />
    <Tasks />
    <Tasks />
</>
    );
}

export default MainForm;
