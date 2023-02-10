import React from 'react'

import Navbar from './Components/Navbar/Navbar';
import Board from './Components/Board/Board';
import Modal from './Components/Modal/Modal';

import './style.css'

function App () {

    return (
        <div className="main-container">
            <Navbar/>
            <Board/>
            <Modal/>
        </div>
    )

}

export default App;