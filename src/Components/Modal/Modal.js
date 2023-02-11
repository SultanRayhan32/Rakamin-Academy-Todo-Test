import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import './Modal.css';

function Modal ({id}) {


    let handleModalClick = (e) => {
        const modal = document.getElementById(`modal${id}`)
        if (e.target===modal) {
            modal.style.display = "none"
        }
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
            </div>
        </div>
    )

}

export default Modal;

