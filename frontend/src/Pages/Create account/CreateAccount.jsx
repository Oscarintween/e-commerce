import React,{useState,useEffect} from 'react'
import './createAccount.css'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateAccount = () => {
  const navigate = useNavigate()
  const url = 'http://localhost:4000/user/register'
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmedPassword,setConfirmedPassword] = useState('')
//=========Function to create user in database =================
useEffect(()=>{
  const authorized = localStorage.getItem('user')
  if(authorized){
    navigate('/')
  }
},[])

//=========Function to create user in database =================
  const createUser =  async()=>{
    const userInfo = {
      name:name,
      email:email,
      password:password
    }
    await axios.post(url,userInfo)
    localStorage.setItem("user",JSON.stringify(userInfo.name))
    navigate('/')
  }

  return (
    <div className="create-account">
      <div className='register_form'>
        <h1>Create Account</h1>
        <Form.Floating className="mb-3">
          <Form.Control
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <label htmlFor="floatingInputCustom">NAME</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label htmlFor="floatingInputCustom">EMAIL ADDRESS</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <label htmlFor="floatingInputCustom">PASSWORD</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            type="password"
            value={confirmedPassword}
            onChange={(e)=>setConfirmedPassword(e.target.value)}
          />
          <label htmlFor="floatingPasswordCustom">CONFIRM PASSWORD</label>
        </Form.Floating>
        <div className="register_form_footer">
          <div>
            <p>Already have an accout? <a href='/signIn'>Sign In</a></p>
          </div>
          <div>
            <button onClick={createUser}>
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount