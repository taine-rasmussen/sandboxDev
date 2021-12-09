import React from 'react'
import './App.css';
import { Route, Routes  } from 'react-router-dom'

// Components
import Landing from './Components/Landing'
import Login from './Components/Login/Login'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route exact path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
