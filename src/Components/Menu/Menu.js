import React from 'react';

import { FaArrowRight , FaArrowLeft } from 'react-icons/fa'
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBinLine} from 'react-icons/ri'
import axios from 'axios'

import { API , URL } from '../../Helper/API-URL'

import './Menu.css'

function Menu ({id,todo_id,moveTaskAction,index}) {

    let handleMoveTask = (val) => {
        document.getElementById(`menu-container-task-${id}`).style.display = "none"
        moveTaskAction(id,todo_id,val,index)
    }

    return (
        <div 
            className="menu-container"
            id={`menu-container-task-${id}`}
            onClick={e=>e.preventDefault()}
        >

            <div 
                className="title-container-icon" 
                style={{marginTop:14}}
                onClick={e=>handleMoveTask(1)}
            >
                <FaArrowRight className="icon"/>
                <span 
                    className="title"
                    size={18}
                >
                    Move Right
                </span>
            </div>

            <div 
                className="title-container-icon"
                onClick={e=>handleMoveTask(-1)}
            >
                <FaArrowLeft
                    className="icon"
                    size={18}
                />
                <span className="title">
                    Move Left
                </span>
            </div>

            <div className="title-container-icon">
                <BiEditAlt
                    className="icon"
                    size={18}
                />
                <span className="title">
                    Edit
                </span>
            </div>

            <div className="title-container-icon-dlt">
                <RiDeleteBinLine
                    className="icon"
                    size={18}
                />
                <span className="title">
                    Delete
                </span>
            </div>

        </div>
    )

}

export default Menu;