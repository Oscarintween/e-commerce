import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

const LoggedIn = () => {
    const authorized = localStorage.getItem("user")
    

  return (
    authorized ? <Outlet />:<Navigate to='signIn' />
    )
}

export default LoggedIn