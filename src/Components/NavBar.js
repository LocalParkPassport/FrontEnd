import React from 'react';
import { Link, Route } from 'react-router-dom';
import Icon from '../Images/icon.png';
import "./navbar.css"
 


function NavBar() {
    const signOut = () => {
        localStorage.clear()
        window.location.href='/'
    } 
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
                    <div id="nav__contain">
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
