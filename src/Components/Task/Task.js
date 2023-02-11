import React , { useEffect } from 'react';
import axios from 'axios';

import TaskItem from './TaskItem';
import { URL , API } from '../../Helper/API-URL'

import './Task.css'

function Task ({data}) {

    const {
        dataTask,
        setDataTask,
        id
    } = data

    useEffect(()=>{
        axios({
            method: 'GET', 
            url: `${URL}todos/${id}/items`, 
            headers: {
                Authorization: API
            }
        })
        .then(({data})=>{
            setDataTask(data)
        })
        .catch(console.log)
    },[])

    let renderTask = () => {
        return dataTask.map((task)=>{
            return <TaskItem task={task}/>
        })
    }

    return (
        <div className="task-container">
            {dataTask&&renderTask()}
        </div>
    )

}

export default Task;