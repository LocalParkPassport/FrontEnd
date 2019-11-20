// Import Libraries here
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
// Import Components here
import ParkList from './Components/ParkList'
import AppBar from './Components/AppBar'
import Login from './Components/Login'
import Signup from './Components/Signup';
import NavBar from './Components/NavBar'
import { LinearProgress } from '@material-ui/core';

// Application here
function App() {
  return (
    <Router>
      <div>
        <div><h1>Parks Passport Application</h1></div>
        <NavBar/>
        {/* <Route path='/' component={HomePage}/> */}
        <Route path='/' component={ParkList}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Signup' component={Signup}/>
        <Link to='/Login'>Login</Link>
        <Link to='/Signup'>Signup</Link>
        {/* {<AppBar    />}
        {<ParkList  />} */}
      </div>
    </Router>
  );
}

export default App;
