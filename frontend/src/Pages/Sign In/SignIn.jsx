import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './signIn.css'
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const SignIn = () => {
  const url = 'http://localhost:4000/user/signIn'
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  useEffect(()=>{
    const authorized = localStorage.getItem('user')
    if (authorized){
      navigate('/')
    }
  },[])
 
  const handleSignIn = async ()=>{
    const userInfo =
    {
      email:email,
      password:password
    }
    let result = await axios.post(url,userInfo)
    result = result.data
    if(result.name){
        localStorage.setItem("user",JSON.stringify(result))
        navigate('/')
    }else{
      alert('email or password is incorrect')
    }
  }
  return (
    <div className='sign-in'>
      <div className='sign-in_form'>
        <h1>Sign In</h1>
        <Form.Floating className="mb-3">
          <Form.Control
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="floatingInputCustom">EMAIL ADDRESS</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />
          <label htmlFor="floatingPasswordCustom">PASSWORD</label>
        </Form.Floating>
        <div className="form-footer">
          <div>
            <a href="/">Forgot Password?</a>
            <p>Don't have an accout? <a href='/createAccount'>Create Account</a></p>
          </div>
          <div>
            <button onClick={handleSignIn}>
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn