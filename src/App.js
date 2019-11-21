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
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
library.add( fas )


// Application here
function App() {
  return (
    <Router>
      <div className='Application'>
        <NavBar/>
        <div className='searchnadd'>
          <FontAwesomeIcon icon={['fas', 'plus-circle']} size="lg"/>
        </div>
        <Route exact path='/' component={ParkList}/>
        <Route exact path='/Login' component={Login}/>
        <Route exact path='/Signup' component={Signup}/>
        <Link to='/Login'>Login</Link>
        <Link to='/Signup'>Signup</Link>
      </div>
    </Router>
  );
}

export default App;
