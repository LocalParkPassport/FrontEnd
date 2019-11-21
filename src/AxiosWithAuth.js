import axios from 'axios'

export const AxiosWithAuth= ()=>{
    const token= localStorage.getItem('token')
    return(
        axios
        .create({
            baseURL:'https://parks-passport.herokuapp.com/api/',
            headers:{
                authorization: token
            }
        })
    )
}