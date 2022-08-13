import React from 'react'
import { Carousel } from 'react-bootstrap'
import promo1 from '../assets/promo1.jpg'
import promo2 from '../assets/promo2.png'
import promo3 from '../assets/promo3.jpg'
import '../index.css'

const Promotions = () => {
  return (
    <div className="carousel">
        <Carousel id='carousel'>
            <Carousel.Item interval={1000}>
            <img
                className="d-block w-100 carouselImg"
                src={promo1}
                alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <img
                className="d-block w-100"
                src={promo2}
                alt="Second slide"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                id="thirdimage"
                className="d-block w-100"
                src={promo3}
                alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>   
    </div>
   
  )
}

export default Promotions