import React, { useEffect, useState } from "react";
import axios from 'axios';
import ParkCard from './ParkCard';
import './parklist.css'
import { Data } from './Data';
// console.log(Data);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ParkList() {
  const [parkList, setParkList] = useState([]);
  useEffect(() => {
      axios
        .get("https://parks-passport.herokuapp.com/api/parks")
        .then(res => { 
          console.log(res.data);
          setParkList(res.data);
        })
        .catch(err => {
      console.error(err);
    });
    }, []);





  
    return (
      <div>
      <section className='searchandadd'>
        <FontAwesomeIcon icon={['fas', 'plus-circle']} size="3x"/>
      </section>
      <section className="ParkList">
        {parkList.map(park => {
          return <ParkCard key={park.user_id} park={park} />;
        })}
      </section>
      </div>
    );
}