import React from 'react'
import facebookLogo from '../assets/facebook.png'
import twitterLogo from '../assets/twitter.png'
import instagramLogo from '../assets/instagram.png'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className='footer'>
            <div className="colum1">
                <ul>
                    <span className='footer-headers'>MOTOSHOP</span>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Our Locations</li>
                </ul>
            </div>
            <div className="colum2">
                <ul>
                    <span className='footer-headers'>Whatever</span>
                    <li></li>
                    <li>Our Locations</li>
                </ul>
            </div>
            <div className="colum3">
                <ul>
                    <span className='footer-headers'>FOLLOW US AT</span> 
                    <li>
                        <img className='smlogo' src={facebookLogo} alt="facebook" />
                        <img className='smlogo' src={twitterLogo} alt="twitter" />
                        <img className='smlogo' src={instagramLogo} alt="instagram" />
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-copyright">
            <p>2022 © Motoshop - All rights resever - developed by Oscar Ramos Ortiz</p>
        </div>
    </div>
  )
}

export default Footer