import React from 'react'
import './home.css'
import video from '../../assets/video.mp4'
import cruiser from '../../assets/cruiser.jpg'
import sports from '../../assets/sports.png'
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
              <img src={motocross} alt="motocross" />
            </Link>
          </div>
          <div className="sports ">
            <h2>Sports</h2>
            <Link to='/catalog'>
              <img src={sports} alt="sports" />
            </Link>
          </div>
          <div className="cruiser">
            <h2>Cruiser</h2>
            <Link to='/catalog'>
              <img src={cruiser} alt="cruisers" />
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