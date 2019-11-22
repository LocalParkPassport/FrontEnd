import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeletePark = (props) => {
    console.log(props.park.id);

    let handleDelete = id => {
        axios
            .delete(`https://parks-passport.herokuapp.com/api/parks/${props.park.id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log("An error has occured", err)
            })
    };

    return (
        <div>
            <button onclick={handleDelete}><FontAwesomeIcon icon={['fas', 'trash-alt']}/></button>
        </div>
    );
}
 
export default DeletePark;