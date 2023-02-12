import React , { useEffect , useState } from 'react';

import axios from 'axios';
import BoardItem from './BoardItem';
import { URL , API } from '../../Helper/API-URL';
import Modal from '../Modal/Modal';

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
            let arrNew = [...data]
            arrNew.sort((a,b)=>{
                return new Date(b.created_at) - new Date(a.created_at)
            })
            setDataBoard(arrNew)
        })
        .catch(console.log)
    }

    useEffect(()=>{
        fetchDataBoard()
    },[])

    let moveTaskAction = (taskId,todoId,valueMove,indexLength) => {
        if (indexLength === 0 && valueMove === -1  ) {

        }else if (indexLength === dataBoard.length -1 && valueMove === 1) {

        }else {
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
                setAddNewTask(dataBoard[indexLength+valueMove].id)
                setRemoveNewTask(dataBoard[indexLength].id)
                setIdOfTask(data)
            })
            .catch(err=>{console.log(err, '  <<<< ERROR MESSAGE')})   
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
            <Modal
                id="-add-board-1"
                dataBoard={dataBoard}
                setDataBoard={setDataBoard}
                type={"add-board"}
            />
        </div>
    )

}

export default Board;