import React from 'react'

import Navbar from './Components/Navbar/Navbar';
import Board from './Components/Board/Board';
// import Menu from './Components/Menu/Menu';

import './style.css'

function App () {

    return (
        <div className="main-container">
            <Navbar/>
            <Board/>
            {/* <Menu/> */}
        </div>
    )

}

export default App;