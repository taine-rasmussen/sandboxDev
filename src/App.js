import React from 'react'
import './App.css';
import { Route, Routes  } from 'react-router-dom'

// Components
import Landing from './Components/Landing'
import Login from './Components/Login/Login'
import Hero from './Components/Hero/Hero'
import Gameboard from './Components/TicTacToe/Gameboard'
import Memory from './Components/Memory/Memory'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/hero' element={<Hero />}/>
        <Route exact path='/tictactoe' element={<Gameboard />}/>
        <Route exact path='/memory' element={<Memory />}/>
      </Routes>
    </div>
  );
}

export default App;
