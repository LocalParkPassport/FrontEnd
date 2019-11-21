import React, { useState } from 'react';
import { AxiosWithAuth } from '../AxiosWithAuth';
import axios from 'axios';


const CreatePark = (props) => {

    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        location: '',
        wildlife: false,
        dog_park: false,
        hiking_trail: false,
        disc_golf: false,
        open_spaces: false,
        climbing_trees: false,
        rating: 0

    });

    const handleChange = e => {
        e.persist();
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
        console.log(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        AxiosWithAuth()
            .post('https://parks-passport.herokuapp.com/api/parks', inputs)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log("an error occured...", err.message);
                console.log(props);
            })
    };

    return (
        <div>
            <h1>Create a Park Form</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Name" name="name" value={inputs.nameInput} />
                <input onChange={handleChange} type="text" placeholder="description" name="description" value={inputs.description} />
                <input onChange={handleChange} type="text" placeholder="location" name="location" value={inputs.location} />
                <label>
                    Wildlife
                <input onChange={handleChange} type="radio" name="wildlife" value={inputs.wildlife} />
                </label>
                <label>
                    Dog Park?
                    <input onChange={handleChange} type="radio" name="dog_park" value={inputs.dog_park} />
                </label>
                <label>
                    Hiking trails?
                    <input onChange={handleChange} type="radio" name="hiking_trail" value={inputs.hiking_trail} />
                </label>
                <label>
                    Disc golf?
                    <input onChange={handleChange} type="radio" name="disc_golf" value={inputs.disc_golf} />
                </label>
                <label>
                    Open spaces?
                    <input onChange={handleChange} type="radio" name="open_spaces" value={inputs.open_spaces} />
                </label>
                <label>
                    Climbing trees?
                    <input onChange={handleChange} type="radio" name="climbing_trees" value={inputs.climbing_trees} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePark;
