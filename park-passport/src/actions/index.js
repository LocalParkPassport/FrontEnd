import {AxiosWithAuth} from '../AxiosWithAuth'

export const LOGIN= 'LOGIN'

export const login= (credentials)=> dispatch=>{
    dispatch({type: LOGIN})
    return(
        AxiosWithAuth()
        .post('/auth/login')
        .then(res=>{

        })
        .catch(err=>{
            console.log('login error', err)
        })
    )
}