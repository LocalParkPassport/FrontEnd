// Import Libraries here
import React from 'react';
import './App.css';

// Import Components here
import ParkList from './Components/ParkList'
import AppBar from './Components/AppBar'
import Login from './Components/Login'
import Signup from './Components/Signup';

// Application here
function App() {
  return (
    <div className="App">
      <div><h1>Parks Passport Application</h1></div>
      {/* {<AppBar    />}
      {<ParkList  />} */}
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
