import React from 'react';

import { FiMoreHorizontal } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'

function TaskItem ({task}) {

    const {
        name,
        progress_percentage
    } = task

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
           <div className="container-proggres-edit">
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
                <FiMoreHorizontal 
                    className="more-menu"
                    size={20}
                />
           </div>
        </div>
    )

}

export default TaskItem;