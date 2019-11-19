import React from 'react'

const NavBar= ()=>{
    let NavLinks;
    const signOut= ()=>{
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
        <div>
            {NavLinks}
        </div>
    )
}

export default NavBar