import React , { useEffect , useState } from 'react';
import axios from 'axios'

import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';
import { URL , API } from '../../Helper/API-URL'

function BoardItem ({board}) {

    const {
        title,
        description,
        last,
        index,
        id
    } = board

    const [dataTask,setDataTask] = useState(null)

    useEffect(()=>{
        axios({
            method: 'GET', 
            url: `${URL}todos/${id}/items`, 
            headers: {
                Authorization: API
            }
        })
        .then(({data})=>{
            console.log(data , ' <<<< DATA')
            setDataTask(data)
        })
        .catch(console.log)
    },[])

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

            <Task/>

            <AddTask/>

        </div>
    )

}

export default BoardItem;