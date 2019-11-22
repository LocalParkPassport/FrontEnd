import React, { useEffect, useState } from "react";
import axios from 'axios';
import ParkCard from './ParkCard';
import './parklist.css'
import { Data } from './Data';
// console.log(Data);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBar from './NavBar.js'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



// MATERIALIZE STYLES
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
// MATERIALIZE STYLES



export default function ParkList() {
  const classes = useStyles()

  // - Park from API
  const [parkList, setParkList] = useState({
    arr: [],
    searchArr: []
  });

  // - Search
  const [searchQuery, setSearchQuery] = useState({
    query: "",
  })

  useEffect(() => {
      axios
        .get("https://parks-passport.herokuapp.com/api/parks")
        .then(res => { 
          console.log(res.data);
          setParkList({ ...parkList ,arr: res.data});
        })
        .catch(err => {
      console.error(err);
    });
    }, []);


    const handleChange = e => {
      // Handles input field
      setSearchQuery({
        ...searchQuery,
        [e.target.name]: e.target.value
      }) 

      // // Handles Query
      // setParkList({
      //   ...parkList,
      //   searchArr: parkList.arr.filter(park => {
      //     return park.name.includes(searchQuery.query)
      //   })
      // })
    }


   

  
    return (
      <div>
      <NavBar />
      <div className='searchandadd'>

      <div className='empty'>

      </div>

      <div className='searchfield'>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          name="query"
          value={searchQuery.query}
          onChange={handleChange}
          className={classes.textField}
          margin="normal"
        />  
      </div>

        <div class='addpark'>
        { (window.location.pathname !== '/create' &&  localStorage.getItem('token')) &&
          <a id="create-btn" href='/create'>
            <FontAwesomeIcon icon={['fas', 'plus-circle']} className='addparkbutton' size="3x"/>
          </a>
        }
        </div>

      </div>

      <section className="ParkList">
        {parkList.arr.map((park, key) => {
          return <ParkCard key={key} park={park} />;
        })}
      </section>
      </div>
    );
}