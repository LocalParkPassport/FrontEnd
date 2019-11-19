// Import Libraries here
import React from 'react';
import './App.css';

// Import Components here
import ParkList from './Components/ParkList'
import AppBar from './Components/AppBar'


// Application here
function App() {
  return (
    <div className="App">
      {<AppBar    />}
      {<ParkList  />}
    </div>
  );
}

export default App;
