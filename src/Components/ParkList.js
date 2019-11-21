import React, { useEffect, useState } from "react";
import axios from 'axios';
import ParkCard from './ParkCard';
import './parklist.css'
import { Data } from './Data';
// console.log(Data);

export default function ParkList() {
  const [parkList, setParkList] = useState(Data);
  console.log(Data);
  useEffect(() => {
      axios
        .get("https://parks-passport.herokuapp.com/api/parks.data")
        .then(res => {
          console.log(res);
          // setParkList(res);
        })
        .catch(err => {
      console.error(err);
    });
    }, []);
  
    return (
      <section className="ParkList">
        {parkList.map(park => {
          return <ParkCard key={park.user_id} park={park} />;
        })}
      </section>
    );
}