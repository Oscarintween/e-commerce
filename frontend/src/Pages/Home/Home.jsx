import React from 'react'
import './home.css'
import video from '../../assets/video.mp4'
import Footer from '../../components/Footer'
// import Link from 'react-router-dom'

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
      {/* <main>
        <div id = 'categories'>
          <div className="motocross">
            <Link to='/'>
              <img src="" alt="" />
            </Link>
          </div>
          <div className="sports">

          </div>
          <div className="cruiser">

          </div>
        </div>
      </main> */}
      <footer>
        <div>
          <Footer />
        </div>
      </footer>  
    </>
  )
}

export default Home