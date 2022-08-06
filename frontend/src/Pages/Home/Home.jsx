import React from 'react'
import './home.css'
import video from '../../assets/video.mp4'
import cruiser from '../../assets/cruiser.jpg'
import sports from '../../assets/hondaCBR.jpg'
import motocross from '../../assets/motocross.jpg'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <header>
        <div className='jumbotron'>
          <video autoPlay muted loop id='myVideo'>
            <source src={video} type='video/mp4' />
          </video>
          <div className="quoteLeft">
            <h1>Yesterday is history, tomorrow is a mystery, Ride and live today </h1>
          </div>   
        </div>
      </header>
      <main>
        <div className="main-header">
          <h1>Categories</h1>
        </div>
        <div id = 'categories'>
          <div className="motocross">
            <h2>Motocross</h2>
            <Link to='/catalog'>
              <figure className="motorcycle">
                <img src={motocross} alt="motocross"/>
                <figcaption>
                  <h2>Motocross</h2>
                  <p>If you love off-road adventures or just love to feel the rush of adrenaline, this category is definately for you</p>
                </figcaption>			
              </figure>
            </Link>
          </div>
          <div className="sports">
            <h2>Sports</h2>
            <Link to='/catalog'>
              <figure className="motorcycle">
                <img src={sports} alt="sports"/>
                  <figcaption>
                    <h2>Sports</h2>
                    <p>If you enjoy elegance and beauty along with speed on the road, look no further and choose this category</p>
                  </figcaption>			
              </figure>
            </Link>
          </div>
          <div className="cruiser">
            <h2>Cruiser</h2>
            <Link to='/catalog'>
              <figure className="motorcycle">
                  <img src={cruiser} alt="cruiser"/>
                    <figcaption>
                      <h2>Cruiser</h2>
                      <p>Do you prefer comfort and power and the experience to go long distances across the country, this category has got you covered</p>
                    </figcaption>			
                </figure>
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>  
    </>
  )
}

export default Home