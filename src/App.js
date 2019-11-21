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
import CreatePark from './Components/CreatePark';
import CreateRating from './Components/CreateRating';
 
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
        <Link to='/Login'>Login</Link>
        <Link to='/Signup'>Signup</Link>
        <Link to='/create'>Create Park</Link>
        <CreateRating />
        <Route exact path='/create' component={CreatePark} />
        <Route exact path='/' component={ParkList} />
        <Route exact path='/Login' render={(props) => (<Login {...props} />)} />
        <Route exact path='/Signup' render={(props) => (<Signup {...props} />)} />
      </div>
    </Router>
  );
}

export default App;
