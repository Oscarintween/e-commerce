import React from 'react'
import './signIn.css'
import Form from 'react-bootstrap/Form';

const SignIn = () => {
  return (
    <div className='sign-in'>
      <div className='sign-in_form'>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputCustom">EMAIL ADDRESS</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordCustom">PASSWORD</label>
        </Form.Floating>
        <div className="form-footer">
          <div>
            <a href="/">Forgot Password?</a>
            <p>Don't have an accout? <a href='/createAccount'>Create Account</a></p>
          </div>
          <div>
            <button>SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn