import React, { useState } from 'react';
import { AxiosWithAuth } from '../AxiosWithAuth';
import axios from 'axios';


const CreatePark = (props) => {

    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        location: '',
        restrooms: false,
        fishing: false,
        camping: false,
        tennis: false,
        basketball: false,
        golf: false,
        dogPark: false,
        img: '',
        user_id: localStorage.getItem('user_id')

    });

    const handleChange = e => {
        e.persist();
        let id = localStorage.getItem('user_id');
        console.log(id);
        setInputs(inputs => ({ ...inputs, user_id: localStorage.getItem('user_id'), [e.target.name]: e.target.value }));
        console.log(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputs);
        AxiosWithAuth()
            .post(`https://parks-passport.herokuapp.com/api/parks`, inputs)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log("an error occured...", err.message);
            })
    };

    return (
        <div>
            <h1>Create a Park Form</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Name" name="name" value={inputs.name} />
                <input onChange={handleChange} type="text" placeholder="description" name="description" value={inputs.description} />
                <input onChange={handleChange} type="text" placeholder="location" name="location" value={inputs.location} />
                <label>
                    Fishing?
                <input onChange={handleChange} type="radio" name="fishing" value={inputs.fishing} />
                </label>
                <label>
                    Camping?
                    <input onChange={handleChange} type="radio" name="camping" value={inputs.camping} />
                </label>
                <label>
                    Tennis?
                    <input onChange={handleChange} type="radio" name="tennis" value={inputs.tennis} />
                </label>
                <label>
                    Basketball?
                    <input onChange={handleChange} type="radio" name="basketball" value={inputs.basketball} />
                </label>
                <label>
                    Golf?
                    <input onChange={handleChange} type="radio" name="golf" value={inputs.golf} />
                </label>
                <label>
                    Dog Park?
                    <input onChange={handleChange} type="radio" name="dogPark" value={inputs.dogPark} />
                </label>
                <label>
                    Park Image?
                    <input onChange={handleChange} type="text" name="img" value={inputs.img} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePark;
