import React from 'react';

import './Modal.css';

function Modal (props) {

    const {
        showModal,setShowModal
    } = props

    let handleModalClick = (e) => {
        e.stopPropagation()
        setShowModal(false)
        console.log("WKWKWKWK")
    }

    return (
        <div 
            className="modal" 
            style={{display:showModal?"flex":"none"}}
            onClick={e=>handleModalClick(e)}
        >
            <div className="modal-content">
                dskfskdsfkdsjf
            </div>
        </div>
    )

}

export default Modal;

