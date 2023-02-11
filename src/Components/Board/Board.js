import React , { useEffect , useState } from 'react';

import axios from 'axios';
import BoardItem from './BoardItem';
import { URL , API } from '../../Helper/API-URL'

import './Board.css';

function Board () {

    const [dataBoard,setDataBoard] = useState(null)

    useEffect(()=>{
        axios({
            method: 'GET', 
            url: `${URL}todos`, 
            headers: {
                Authorization: API
            }
        })
        .then(({data})=>{
            setDataBoard(data)
        })
        .catch(console.log)
    },[])

    let renderBoard = () => {
        return dataBoard.map((board,index)=>{
            return <BoardItem 
                board={{...board,index,last:dataBoard.length}}
            />
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