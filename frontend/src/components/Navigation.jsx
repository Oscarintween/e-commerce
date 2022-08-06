import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import tire from '../assets/tire.png'
import { Link } from 'react-router-dom';
import '../index.css'

const Navigation = () => {
    const navigate = useNavigate()
    const authorized = localStorage.getItem('user')
    const logout =()=>{
        localStorage.clear()
        navigate('/signIn')
    }
  return (
    <div>
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className='brand fs-3' href="/">
                    <img src={tire} className="logo react" alt="spinning tire" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <h1 style={{color:'#E50002'}}>Motoshop</h1>
                </Nav>
                
                <Nav className='fs-1 me-auto'>
                    <Link style={{color:'red',textDecoration:'none'}} to='/profile'>
                        <h3>
                            {authorized?JSON.parse(authorized).name + "'s Profile":''}
                        </h3>
                    </Link> 
                </Nav>
                <Nav>
                    <Nav.Link href='/' className='fs-3'>Home</Nav.Link>
                    <Nav.Link href='/catalog' className='fs-3'>Catalog</Nav.Link>
                    {
                        authorized 
                        ? 
                        <Nav.Link href='/signIn' onClick={logout} className='fs-3'>
                            Log Out  
                        </Nav.Link> 
                        :
                    <NavDropdown className='fs-3' title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href='/signIn'>
                            Sign In
                        </NavDropdown.Item>
                    <NavDropdown.Divider />
                        <NavDropdown.Item href="/createAccount">
                            Create Account
                        </NavDropdown.Item>
                    </NavDropdown>
                    }
                    
                    <Nav.Link href="/cart">
                    <i style={{color:'red'}} className="bi bi-cart4 fs-2"></i>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation