import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function AddTask ({id}) {

    return (
        <div
            className="add-task" 
            data-cy="add-task"
            onClick={e=>
                document.getElementById(`modal${id}`).style.display = "flex"
            }
        >
            <AiOutlinePlusCircle/>
            <span>
                New Task
            </span>
           
        </div>
    )
    
}

export default AddTask;