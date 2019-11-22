import React from 'react';
import { Link, Route } from 'react-router-dom';
import Icon from '../Images/icon.png';
 


function NavBar() {
    const signOut = () => {
        localStorage.clear()
        window.location.href='/'
    }
    console.log(localStorage.getItem('token'))
    return (
        <div className='NavBar'>
            <div className='logo'>
            <img src={Icon} />
            </div>
            <div>

                {
                    localStorage.getItem('token') ?
                    <div>
                      <button onClick={signOut}>Sign Out</button>
                    </div>   
                    : 
                    (
                    <div>
                        <a href='/login'>Sign in</a>
                        <a href='/signup'>Sign up</a> 
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default NavBar
