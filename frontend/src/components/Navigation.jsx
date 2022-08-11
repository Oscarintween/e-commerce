import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import tire from '../assets/tire.png'
import { Link } from 'react-router-dom';
import '../index.css'
import { useCart } from '../context/CartContext';

const Navigation = () => {
    const items = useCart()
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
                <div className='brand fs-3'>
                    <Link to='/'>
                        <img src={tire} className="logo react" alt="spinning tire" />
                    </Link>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <h1 style={{color:'#E50002'}}>Motoshop</h1>
                </Nav>
                
                <div className='fs-1 me-auto'>
                    <Link className='navlinks' to='/profile'>
                        
                            {authorized?JSON.parse(authorized).name + "'s Profile":''}
                        
                    </Link> 
                </div>
                <Nav>
                    <div className='fs-3'>
                        <Link className='navlinks' to='/'>
                            Home
                        </Link>
                    </div>
                    <div className='fs-3'>
                        <Link className='navlinks' to='/catalog'>
                            Catalog
                        </Link>
                    </div>
                        
                    {
                        authorized 
                        ? 
                        <Nav onClick={logout} className='fs-3'>
                            <Link className='navlinks' to='/'>
                                LogOut 
                            </Link>  
                        </Nav> 
                        :
                    <NavDropdown className='fs-3' title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link to='/signIn'>
                                Sign In
                            </Link>
                        </NavDropdown.Item>
                    <NavDropdown.Divider />
                        <NavDropdown.Item >
                            <Link to="/createAccount">
                                Create Account
                            </Link>                           
                        </NavDropdown.Item>
                    </NavDropdown>
                    }
                    
                    <Nav>
                        <Link className='product-count' to='/cart'>
                            <i className="bi bi-cart4 fs-2 cart-icon"><small>{items.length}</small></i>
                        </Link>
                    </Nav>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation