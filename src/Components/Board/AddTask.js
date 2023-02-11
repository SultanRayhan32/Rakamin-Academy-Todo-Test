import React , { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Modal from '../Modal/Modal';


function AddTask () {

    const [showModal,setShowModal] = useState(false)

    return (
        <div
            className="add-task" 
            data-cy="add-task"
            onClick={e=>setShowModal(true)}
        >
            <AiOutlinePlusCircle/>
            <span>
                New Task
            </span>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </div>
    )
    
}

export default AddTask;