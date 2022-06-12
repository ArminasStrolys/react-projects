import React from 'react';
import Tasks from '../tasks/Tasks';

const MainForm = () => {
    return (
<>
    <form className='main-form' action="">
        <input type="text" placeholder='Enter task' />
        <button>Add task</button>
    </form>
    <Tasks />
</>
    );
}

export default MainForm;
