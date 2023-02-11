import React , { useState } from 'react';

import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai'

import { API , URL } from '../../Helper/API-URL'

import './Modal.css';

function Modal ({id,setDataTask,dataTask}) {

    const [name,setName] = useState("")
    const [progress,setProgress] = useState(0)

    let handleModalClick = (e) => {
        const modal = document.getElementById(`modal${id}`)
        if (e.target===modal) {
            modal.style.display = "none"
        }
    }

    let createNewItemAPi = () => {
        axios({
            method: 'POST', 
            url: `${URL}todos/${id}/items`, 
            data : {
                name,
                progress_percentage: progress
            },
            headers: {
                Authorization: API
            }
        })
        .then(({data})=>{
            console.log(data , ' <<< value data')
            let newData = [...dataTask]
            newData.unshift(data)
            console.log(newData , " <<< NEW DATA")
            setDataTask(newData)
        })
        .catch(err=>console.log(err , ' <<< error add'))
    }

    return (
        <div 
            className="modal" 
            id={`modal${id}`}
            onClick={e=>handleModalClick(e)}
        >
            <div className="modal-content">
                <div className="modal-input-title">
                    <span >
                        Create Task
                    </span>
                    <AiOutlineClose 
                        size={23}
                        style={{color:"#404040"}}
                    />   
                </div>

                <form>

                    <div className="input-content">
                        <span>
                            Task Name
                        </span>
                        <input
                            placeholder="Type your task"
                            onChange={e=>setName(e.target.value)}
                        />
                    </div>

                    <div 
                        className="input-content" 
                        style={{marginTop:16}}
                    >
                        <span>
                            Proggress
                        </span>
                        <input 
                            placeholder="70%" 
                            type={"number"}
                            style={{width:143}}
                            onChange={e=>setProgress(e.target.value)}
                        />
                    </div>

                </form>

                <div className="button-container">
                    <button className="b2">
                        Cancel
                    </button>
                    <button 
                        className="b1"
                        onClick={e=>[createNewItemAPi(),document.getElementById(`modal${id}`).style.display = "none"]}
                    >
                        Save Task
                    </button>
                </div>
                
            </div>
        </div>
    )

}

export default Modal;