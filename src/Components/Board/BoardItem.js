import React , { useState } from 'react';

import Task from '../Task/Task';
import AddTask from './AddTask';
import Modal from '../Modal/Modal';



function BoardItem ({board}) {

    const {
        title,
        description,
        last,
        index,
        id
    } = board

    const [dataTask,setDataTask] = useState([])

    let checkIndex = () => {
        if (index === 0){ 
            return {marginLeft : 24} 
        }
        else if (index === last -1){ 
            return {marginRight: 24 }
        } else return null
    }

    return (
        <div 
            className="board-content"
            style={checkIndex()}
        >

            <div className="title">
                {title}
            </div>

            <span className="desc">
                {description}
            </span>

            <Task data={{id,setDataTask,dataTask}}/>

            <AddTask
                id={id}
            />

            <Modal
                id={id}
                dataTask={dataTask}
                setDataTask={setDataTask}
            />
            {/* {
                showModal &&
            } */}

        </div>
    )

}

export default BoardItem;