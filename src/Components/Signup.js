import React from 'react'
import axios from 'axios'

class Signup extends React.Component{
    state={
        credentials:{
            username: '',
            password: ''
        }
    }
    submitForm= e => {
        e.preventDefault()
        axios
        .post('https://parks-passport.herokuapp.com/api/auth/register', this.state.credentials)
        .then(res=>{
            localStorage.setItem('token', res.data.token)
            console.log(res)
        })
        .then(res => this.props.history.push('/Login'))
        .catch(err => {
            console.log('login error', err)
        })
    }
    handleChanges = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.credentials)
    }
    render(){
        return(
            <form onSubmit={this.submitForm}>
                 <input
                    type= 'text'
                    name= 'username'
                    placeholder= 'Username'
                    value= {this.state.credentials.username}
                    onChange= {this.handleChanges}
                />
                <input
                    type= 'password'
                    name= 'password'
                    placeholder= 'Password'
                    value= {this.state.credentials.password}
                    onChange= {this.handleChanges}
                />
                <button>Sign Up!</button>
            </form>
        )
    }
}

export default Signup