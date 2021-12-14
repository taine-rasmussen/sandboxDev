import React from 'react'
import './App.css';
import { Route, Routes  } from 'react-router-dom'

// Components
import Landing from './Components/Landing'
import Login from './Components/Login/Login'
import Hero from './Components/Hero/Hero'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/hero' element={<Hero />}/>
      </Routes>
    </div>
  );
}

export default App;
