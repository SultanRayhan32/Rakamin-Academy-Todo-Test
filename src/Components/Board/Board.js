import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import Task from '../Task/Task';

import './Board.css'

function Board () {


    return (
        <div className="board-content">

            <div className="title">
                Group Task 1
            </div>

            <span className="desc">
                January - March
            </span>

            <Task/>

            <div className="add-task" data-cy="add-task">
                <AiOutlinePlusCircle/>
                <span>
                    New Task
                </span>
            </div>

        </div>
    )

}

export default Board;