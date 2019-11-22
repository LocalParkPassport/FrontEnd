import React, { useState } from 'react';
import { AxiosWithAuth } from '../AxiosWithAuth';
import axios from 'axios';
import NavBar from './NavBar'


const CreatePark = (props) => {
    // const [check, setCheck] = useState({
    //     restrooms: false,
    //     fishing: false,
    //     camping: false,
    //     tennis: false,
    //     basketball: false,
    //     golf: false,
    //     dogPark: false,
    //     user_id: localStorage.getItem('user_id')
    // });

    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        location: '',
        restrooms: true,
        fishing: true,
        camping: true,
        tennis: true,
        basketball: true,
        golf: true,
        dogPark: true,
        img: '',
        user_id: localStorage.getItem('user_id')

    });
    // console.log(inputs);

    const handleChange = e => {
        e.persist();
        let id = localStorage.getItem('user_id');
        console.log(id);
        setInputs(inputs => ({ ...inputs, user_id: localStorage.getItem('user_id'), [e.target.name]: e.target.value }));
        // setCheck(check => ({ ...check, user_id: localStorage.getItem('user_id'), [e.target.name]: e.target.value }));
        console.log(e.target.value);
    }

    // const handleCheck = e => {
    //     console.log(e.target.value)
    //     setCheck({ ...check, user_id: localStorage.getItem('user_id'), [e.target.name]: e.target.value});
    // }

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
            <NavBar />
            <h1>Create a Park Form</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Name" name="name" value={inputs.name} required />
                <input onChange={handleChange} type="text" placeholder="description" name="description" value={inputs.description} required />
                <input onChange={handleChange} type="text" placeholder="location" name="location" value={inputs.location} required />
                <label>
                    Fishing?
                <input onChange={handleChange} type="checkbox" name="fishing" value={inputs.fishing} />
                </label>
                <label>
                    Camping?
                    <input onClick={handleChange} type="checkbox" name="camping" value={inputs.camping} />
                </label>
                <label>
                    Tennis?
                    <input onClick={handleChange} type="checkbox" name="tennis" value={inputs.tennis} />
                </label>
                <label>
                    Basketball?
                    <input onClick={handleChange} type="checkbox" name="basketball" value={inputs.basketball} />
                </label>
                <label>
                    Golf?
                    <input onClick={handleChange} type="checkbox" name="golf" value={inputs.golf} />
                </label>
                <label>
                    Dog Park?
                    <input onClick={handleChange} type="checkbox" name="dogPark" value={inputs.dogPark} />
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
