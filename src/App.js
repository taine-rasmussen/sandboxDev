import React from 'react'
import './App.css';
import { Route, Routes  } from 'react-router-dom'

// Components
import Landing from './Components/Landing'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />}/>
      </Routes>
    </div>
  );
}

export default App;
