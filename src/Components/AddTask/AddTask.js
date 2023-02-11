import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';


function AddTask () {

    return (
        <div className="add-task" data-cy="add-task">
            <AiOutlinePlusCircle/>
            <span>
                New Task
            </span>
        </div>
    )
    
}

export default AddTask;