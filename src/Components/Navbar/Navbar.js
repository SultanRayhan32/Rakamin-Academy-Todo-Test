import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import './Navbar.css'

function Navbar () {

    return (
        <div className="navbar-container">
            <span>
                Product Roadmap
            </span>
            <button
                onClick={e=>document.getElementById("modal-add-board-1").style.display = "flex"}
            >
                <BsPlusLg size={11}/>
                <span style={{marginLeft:6.5}}>
                    Add New Group
                </span>
            </button>
        </div>
    )

}

export default Navbar;