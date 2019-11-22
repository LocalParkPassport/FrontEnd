import React from 'react'
import axios from 'axios'
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
//     username: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     password: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//   });

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
        .then(res => window.location.href = '/login')
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
            <>
            <form onSubmit={this.submitForm}>
                 <input
                    type= 'text'
                    name= 'username'
                    placeholder= 'Username'
                    value= {this.state.credentials.username}
                    onChange= {this.handleChanges}
                    minLength="5"
                    maxLength="20"
                    required
                />
                <input
                    type= 'password'
                    name= 'password'
                    placeholder= 'Password'
                    value= {this.state.credentials.password}
                    onChange= {this.handleChanges}
                    minLength="5"
                    maxLength="15"
                    required
                />
                <button>Sign Up!</button>
            </form>
            </>
        )
    }
}

export default Signup