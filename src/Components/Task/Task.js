import React , { useEffect } from 'react';
import axios from 'axios';

import TaskItem from './TaskItem';
import NoItem from './NoItem';
import { URL , API } from '../../Helper/API-URL'

import './Task.css'

function Task (props) {

    const {
        dataTask,
        setDataTask,
        moveTaskAction,
        id,
        index
    } = props


    useEffect(()=>{
        axios({
            method: 'GET', 
            url: `${URL}todos/${id}/items`, 
            headers: {
                Authorization: API
            }
        })
        .then(({data})=>{
            let arrNew = [...data]
            arrNew.sort((a,b)=>{
                return new Date(b.updated_at) - new Date(a.updated_at)
            })
            setDataTask(arrNew)
        })
        .catch(console.log)
    },[id,setDataTask])

    let renderTask = () => {
        if (dataTask.length === 0) return <NoItem/>
        return dataTask.map((task)=>{
            return (
                <TaskItem 
                    task={task} 
                    moveTaskAction={moveTaskAction} 
                    index={index}
                    dataTask={dataTask}
                    setDataTask={setDataTask}
                />  
            ) 
        })
    }

    return (
        <div className="task-container">
            {dataTask&&renderTask()}
        </div>
    )

}

export default Task;