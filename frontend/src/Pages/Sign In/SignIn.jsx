import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './signIn.css'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {Toast,ToastContainer} from 'react-bootstrap'

const SignIn = () => {
  const url = 'http://localhost:4000/user/signIn'
  const navigate = useNavigate()
  const initialValues = {email:'',password:''}
  const [formValues,setFormValues] = useState(initialValues)
  const [formErrors,setFormErrors] = useState({})
  const [invalidUser,setInvalidUser] = useState(false)

  //============function to validate input fields==================

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email && !values.password) {
      errors.email = "Email is required!"
      errors.password= "Password is required"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormValues({...formValues,[name]:value})
    
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    const errors = validate(formValues)
    setFormErrors(errors)
    if(Object.keys(errors).length === 0 ){
      handleSignIn()
    }
  }

  useEffect(()=>{
    const authorized = localStorage.getItem('user')
    if (authorized){
      navigate('/')
    } 
  },[])
 
  const handleSignIn = async ()=>{
    try {
      let response = await axios.post(url,formValues)
      response = response.data
      console.log(response)
      if(response.token){
        localStorage.setItem("user",JSON.stringify(response))
        navigate('/profile')
      }
    } catch (err) {
        if(err.response.status===400){
          setInvalidUser(true)
        }
    }

  }
  return (
    <div className='sign-in'>
      {
      invalidUser
      ?(
      <ToastContainer className='p-3 alert-window' position='top-start'>
        <Toast bg='danger'  onClose={() => setInvalidUser(false)} show={invalidUser} delay={3000} autohide>
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Alert</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>Email or Password is incorrect!</Toast.Body>
        </Toast>
      </ToastContainer>
      
      ):(
      <div></div>)
      }

      <div className='sign-in_form'>
        <h1>Sign In</h1>
        <Form.Floating className="mb-3">
          <Form.Control
            type="text"
            name='email'
            value={formValues.email}
            onChange={handleChange}
            />
              <p className='error-message'>{formErrors.email}</p>
          <label htmlFor="floatingInputCustom">EMAIL ADDRESS</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            type="password"
            name='password'
            value={formValues.password}
            onChange={handleChange}
          />
            <p className='error-message'>{formErrors.password}</p>
          <label htmlFor="floatingPasswordCustom">PASSWORD</label>
        </Form.Floating>
        <div className="form-footer">
          <div>
            <a href="/">Forgot Password?</a>
            <p>Don't have an accout? <a href='/createAccount'>Create Account</a></p>
          </div>
          <div>
            <button onClick={handleSubmit}>
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn