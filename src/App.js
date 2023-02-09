import React from 'react'

import Navbar from './Components/Navbar/Navbar';
import Board from './Components/Board/Board';

import './style.css'

function App () {

    return (
        <div className="main-container">
            <Navbar/>
            <div className="board-container">
                <Board/>
            </div>
        </div>
    )

}

export default App;