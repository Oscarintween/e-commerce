import React from 'react'
import './createAccount.css'
import Form from 'react-bootstrap/Form';

const CreateAccount = () => {
  return (
    <div className="create-account">
      <div className='sign-in_form'>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputCustom">NAME</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputCustom">EMAIL ADDRESS</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="password"
            placeholder="password"
          />
          <label htmlFor="floatingInputCustom">PASSWORD</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordCustom">CONFIRM PASSWORD</label>
        </Form.Floating>
        <div className="form-footer">
          <div>
            <p>Already have an accout? <a href='/signIn'>Sign In</a></p>
          </div>
          <div>
            <button>CREATE ACCOUNT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount