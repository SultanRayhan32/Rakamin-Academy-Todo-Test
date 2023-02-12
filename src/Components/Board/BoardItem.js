import React , { useState , useEffect } from 'react';

import Task from '../Task/Task';
import AddTask from './AddTask';
import Modal from '../Modal/Modal';

function BoardItem ({board}) {

    const {
        title,
        description,
        last,
        index,
        moveTaskAction,
        addNewTask,
        removeNewTask,
        idOfTask,
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

    useEffect(()=>{
        if (id === addNewTask) {
            let newArr = [...dataTask]
            newArr.unshift(idOfTask)
            setDataTask(newArr)
        }else if (id === removeNewTask) {
            let newArr = [...dataTask]
            let result = newArr.filter(task=>task.id!==idOfTask.id)
            setDataTask(result)
        }
    },[addNewTask,removeNewTask,idOfTask])

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

            <Task data={{id,setDataTask,dataTask,moveTaskAction,index}}/>

            <AddTask
                id={id}
            />

            <Modal
                id={id}
                dataTask={dataTask}
                setDataTask={setDataTask}
                type={"add-item"}
            />
            {/* {
                showModal &&
            } */}

        </div>
    )

}

export default BoardItem;