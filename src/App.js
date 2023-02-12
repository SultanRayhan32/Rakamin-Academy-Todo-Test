import React from 'react'

import Navbar from './Components/Navbar/Navbar';
import Board from './Components/Board/Board';

import './style.css'

function App () {

    return (
        <div className="main-container">
            <Navbar/>
            <Board/>
        </div>
    )

}

export default App;