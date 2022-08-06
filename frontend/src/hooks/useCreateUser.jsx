import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


export const useCreateUser = () => {
    const navigate = useNavigate()
    const url = 'http://localhost:4000/user/register'
    const [error, SetError] = useState(null)
    const [isLoading,SetIsLoading]= useState(null)
    const {dispatch} = useAuthContext()

    const createUser = async (name, email, password) =>{
        SetIsLoading(true)
        SetError(null)
       
        const userInfo = {
            name:name,
            email:email,
            password:password
        }
        const resp =await axios.post(url,userInfo)
        console.log(resp)
        // if(!resp.ok){
        //     SetIsLoading(false)
        //     SetError(resp.error)
        // }
        // if (response.ok){
        //     //save user to local storage
        //     localStorage.setItem('user',JSON.stringify(resp))
        //     //update the auth context
        //     dispatch({type:'LOGIN',payload:resp})
        //     //update loading state
        //     SetIsLoading(false)
        // }
    }
    return{createUser,isLoading, error}
}

