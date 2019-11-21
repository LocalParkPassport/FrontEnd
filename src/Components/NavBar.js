import React from 'react';
import { Link, Route } from 'react-router-dom';
import Icon from '../Images/icon.png';



const NavBar = () => {
    let NavLinks;
    const signOut = () => {
        localStorage.clear()
        window.location.href='/'
    }
    if(localStorage.getItem('token')){
        NavLinks=(
            <div>
                <button onClick={signOut}>Sign Out</button>
            </div>
        )
    }else{
        NavLinks=(
            <div>
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        )
    }
    return(
        <div className='NavBar'>
            <div className='logo'>
            <img src={Icon} />
            </div>
            {NavLinks}
        </div>
    )
}

export default NavBar