import React , { useState , useEffect } from 'react';

import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai'

import { API , URL } from '../../Helper/API-URL'

import './Modal.css';

function Modal (props) {

    const {
        id,
        setDataTask,
        dataTask,
        type,
        todo_id,
        index,
        task,
        setIsDelete,
        dataBoard,
        setDataBoard
    } = props

    useEffect(()=>{
        if (type==="edit-item") {
            setName(task.name)
            setProgress(task.progress_percentage)
        }
    },[task,type])
    

    const [name,setName] = useState("")
    const [progress,setProgress] = useState(0)
    const [description,setDescription] = useState("")

    let handleModalClick = (e) => {
        const modal = document.getElementById(`modal${id}`)
        setIsDelete(false)
        if (e.target===modal) {
            modal.style.display = "none"
        }
    }

    let createNewItemAPI = () => {
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
            let newData = [...dataTask]
            newData.unshift(data)
            setDataTask(newData)
        })
        .catch(err=>console.log(err , ' <<< error add'))
    }

    let editItemAPI = () => {
        axios({
            method: 'PATCH', 
            url: `${URL}todos/${todo_id}/items/${id}`, 
            data : {
                name,
                progress_percentage: progress,
                target_todo_id : todo_id,
            },
            headers: {
                Authorization: API
            }
        })
        .then(({data})=>{
            let newArr = [...dataTask]
            // newArr[index] = data
            newArr = newArr.filter(task=>task.id!==id)
            newArr.unshift(data)
            setDataTask(newArr)
        })
        .catch(err=>{
            console.log(err , ' <<< ERROR')
        })
    }

    let deleteItemApi = () => {
        axios({
            method: 'DELETE', 
            url: `${URL}todos/${todo_id}/items/${id}`, 
            headers: {
                Authorization: API
            }
        })
        .then(({data})=>{
            let newArr = [...dataTask]
            newArr = newArr.filter(task=>task.id!==id)
            setDataTask(newArr)
            setIsDelete(false)
        })
        .catch(err=>{
            console.log(err , ' <<< ERROR')
        })
    }

    let addBoardApi = () => {
        axios({
            method: 'POST', 
            url: `${URL}todos/`, 
            data : {
                title : name,
                description
            },
            headers: {
                Authorization: API
            }
        })
        .then(({data})=>{
            console.log('>><><><><>< )()()()(')
            let newData = [...dataBoard]
            newData.unshift(data)
            setDataBoard(newData)
        })
        .catch(err=>console.log(err , ' <<< error add'))
    }

    let renderTitle = () => {
        if (type==="add-item") return "Create Task"
        else if (type==="edit-item") return "Edit Task"
        else if (type==="delete-item") return "Delete Task"
        else return "Add New Group"
    }

    let renderDataCy = () => {
        if (type==="add-item") return "create-task-modal"
        else if (type==="edit-item") return "edit-task-modal"
        else if (type==="delete-item") return "delete-task-modal"
        else return "Add New Group"
    }

    let handleButton = () => {
        if (type==="add-item") {
            createNewItemAPI() 
        } else if (type==="edit-item") {
            editItemAPI()
        }else if (type === "delete-item") {
            deleteItemApi()
        }else {
            addBoardApi()
        }
        document.getElementById(`modal${id}`).style.display = "none"
    }

    let handleCloseModal = () => {
        document.getElementById(`modal${id}`).style.display = "none"
        setIsDelete(false)
    }

    let handleButtonText = () => {
        if (type==="add-item") return "Save Task"
        else if (type==="edit-item") return "Save Task"
        else if (type==="delete-item") return "Delete"
        else return "Submit"
    }

    let handleHeightModal = () => {
        if (type === "delete-item") return 188
        else if (type === "add-board") return 369
        else return null
    }

    return (
        <div 
            className="modal" 
            id={`modal${id}`}
            onClick={e=>handleModalClick()}

        >

            <div 
                className="modal-content"
                style={{
                    height :  handleHeightModal()
                }}
            >

                <div className="modal-input-title">
                    <span 
                        data-cy={renderDataCy()}
                    >
                        {renderTitle()}
                    </span>
                    <AiOutlineClose 
                        size={23}
                        style={{color:"#404040",cursor:"pointer"}}
                        onClick={e=>handleCloseModal(e)}
                    />   
                </div>

                {
                    type !== "delete-item" ?
                        <form>

                            <div className="input-content">
                                <span>
                                    { type==="add-board" ? "Title" : "Task Name" }
                                </span>
                                <input
                                    placeholder={type==="add-board" ? "Type your todo" : "Type your task"}
                                    onChange={e=>setName(e.target.value)}
                                    value={name}
                                    // defaultValue={type ==="edit-task" ? dataTask[index].name : null}
                                />
                            </div>

                            {
                                type==="add-board" ?
                                    <div 
                                        className="input-content" 
                                        style={{marginTop:16}}
                                    >
                                        <span>
                                            Description
                                        </span>
                                        {/* <input 
                                            placeholder="Type the description" 
                                            style={{height : 88}}
                                            onChange={e=>setDescription(e.target.value)}
                                            value={description}
                                        /> */}
                                        <textarea
                                            placeholder="Type the description" 
                                            style={{height : 88}}
                                            onChange={e=>setDescription(e.target.value)}
                                            value={description}
                                        >

                                        </textarea>
                                    </div> :
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
                                            value={progress}
                                        />
                                    </div>
                            }

                        </form> :
                        <span className="delete-message">
                            Are you sure want to delete this task? your action can’t be reverted.
                        </span>
                }

                <div 
                    className="button-container"
                    style={{marginTop : type==="delete-item"? 16 : null}}
                >
                    <button 
                        className="b2"
                        onClick={e=>handleCloseModal(e)}
                    >
                        Cancel
                    </button>
                    <button 
                        className="b1"
                        style={{
                            backgroundColor : type==="delete-item" ? "#E11428" : null
                        }}
                        onClick={e=>handleButton()}
                    >
                       {handleButtonText()}
                    </button>
                </div>
                
            </div>
        </div>
    )

}

export default Modal;