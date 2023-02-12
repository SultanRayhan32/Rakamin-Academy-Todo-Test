import React , { useEffect , useState } from 'react';

import axios from 'axios';
import BoardItem from './BoardItem';
import { URL , API } from '../../Helper/API-URL'

import './Board.css';

function Board () {

    const [dataBoard,setDataBoard] = useState(null)
    const [addNewTask,setAddNewTask] = useState(null)
    const [removeNewTask,setRemoveNewTask] = useState(null)
    const [idOfTask,setIdOfTask] = useState(null)

    let fetchDataBoard = () => {
        axios({
            method: 'GET', 
            url: `${URL}todos`, 
            headers: {
                Authorization: API
            }
        })
        .then(({data})=>{
            console.log(data , ' <<< data board')
            setDataBoard(data)
        })
        .catch(console.log)
    }

    useEffect(()=>{
        fetchDataBoard()
    },[])

    let moveTaskAction = (taskId,todoId,valueMove,indexLength) => {
        // console.log(todoId + valueMove , ' 3333')
        // if (todoId + valueMove >= 0 && todoId + valueMove <= dataBoard.length-1) {
        if (indexLength === 0 && valueMove === -1  ) {

        }else if (indexLength === dataBoard.length -1 && valueMove === 1) {

        }else {
            console.log(indexLength)
            console.log(dataBoard[indexLength+valueMove])
            axios({
                method: 'PATCH', 
                url: `${URL}todos/${todoId}/items/${taskId}`, 
                data : {
                    target_todo_id : dataBoard[indexLength+valueMove].id,
                },
                headers: {
                    Authorization: API
                }
            })
            .then(({data})=>{
                console.log("***************** WKWKWK ***********************")
                // setEditedTaskId(dataBoard[indexLength+valueMove].id)
                setAddNewTask(dataBoard[indexLength+valueMove].id)
                setRemoveNewTask(dataBoard[indexLength].id)
                setIdOfTask(data)
                // fetchDataBoard()
                // let arrNew = [...dataBoard]
                // let beforeValue
            })
            .catch(err=>{console.log(err, '  <<<< ERROR KENAPAA')})   
        }
    }

    let renderBoard = () => {
        return dataBoard.map((board,index)=>{
            return (<BoardItem 
                board={
                        {
                            ...board,
                            index,
                            last:dataBoard.length, 
                            moveTaskAction : moveTaskAction,
                            addNewTask,
                            removeNewTask,
                            idOfTask,
                        }
                    }                
            />)
        })
    }

    return (
        <div 
            className="board-container" 
            data-cy="board-container" 
            id="board-container"
        >
            {dataBoard && renderBoard()}
        </div>
    )

}

export default Board;