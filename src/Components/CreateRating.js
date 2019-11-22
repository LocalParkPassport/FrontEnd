import React, { useState } from 'react';
import { AxiosWithAuth } from '../AxiosWithAuth';

const CreateRating = (park) => {

    const [inputs, setInputs] = useState({
        rating: '',
        comments: ''
    })

    const handleChanges = e => {
        e.persist();
        setInputs(inputs => ({ ...inputs, user_id: localStorage.getItem('user_id') ,[e.target.name]: e.target.value}));
    };

    const handleSubmit = e => {
        e.preventDefault();
        AxiosWithAuth()
            .post(`https://parks-passport.herokuapp.com/api/parks/${park.id}/ratings`, inputs)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log("There was an error...", err)
        })
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input onChange={handleChanges} type="number" min="1" max="5" name="rating" value={inputs.rating} required />
                </label>
                <input onChange={handleChanges} type="text" name="comments" placeholder="Enter comment here..." value={inputs.comments} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
 
export default CreateRating;