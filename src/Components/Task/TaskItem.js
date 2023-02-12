import React , { useState } from 'react';

import { FiMoreHorizontal } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';

import Menu from '../Menu/Menu';

function TaskItem ({task,moveTaskAction,index}) {

    const {
        name,
        progress_percentage,
        id,
        todo_id,
    } = task

    const [checkMenu,setCheckMenu] = useState(false)

    const checkProggresPercentage = () => {
        if (progress_percentage === 100) {
            return {
                    backgroundColor : "#43936C",
                    width:"100%",
                    borderRadius : 32
                }
        }else {
            return { width: `${progress_percentage}%` }
        }
    }

    return (
        <div className="task-content">
           <span className="task-title">
                {name}
           </span>
           <div className="container-proggres-edit" style={{position:"relative"}}>
                <div className="proggres-bar-border">
                    <div 
                        className="proggres-bar-color"
                        style={checkProggresPercentage()}
                    >

                    </div>
                </div>

                {
                    progress_percentage === 100 ? 
                        <HiCheckCircle 
                            size={17.5}
                            className="check-hundred-percentage"
                        /> :
                        <span className="percentage-text">
                            {progress_percentage + "%"}
                        </span>
                }
                {
                    checkMenu && 
                        <div 
                            className="menu-fake"
                            onClick={e=>[document.getElementById(`menu-container-task-${id}`).style.display = "none",setCheckMenu(false)]}
                        >

                        </div>
                }
                <FiMoreHorizontal 
                    className="more-menu"
                    size={20}
                    // onClick={e=>}
                    onClick={e=>[document.getElementById(`menu-container-task-${task.id}`).style.display = "flex",setCheckMenu(true)]}
                />
                <Menu id={id} todo_id={todo_id} moveTaskAction={moveTaskAction} index={index}/>
           </div>
        </div>
    )

}

export default TaskItem;