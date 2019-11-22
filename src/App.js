// Router 
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// Import Libraries here
import React from 'react';
import './App.css';
// Import Components here
import ParkList from './Components/ParkList'
import AppBar from './Components/AppBar'
import Login from './Components/Login'
import Signup from './Components/Signup';
import NavBar from './Components/NavBar'
import { LinearProgress } from '@material-ui/core';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import CreatePark from './Components/CreatePark';
import CreateRating from './Components/CreateRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add( fas )


// Application here
function App() {
  // {/* https://frontend-mlk73awwy.now.sh/login */}
  // {/* https://frontend-mlk73awwy.now.sh/Login */} 
  return (
    <div className='Application'> 
        <Router>
          <Switch>
            <Route exact path='/' component={ParkList} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/create' component={CreatePark} />
          </Switch>
        </Router>

        
      </div>
  );
}

export default App;
