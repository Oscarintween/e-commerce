import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './catalog.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Catalog = () => {
  const [bikes, setBikes] = useState([])
  const getBikes = async()=>{
    const url = 'http://localhost:4000/motorcycles'
      const data = await axios.get(url)
      await setBikes(data.data)
      console.log(bikes)
  }
  useEffect(()=>{
    getBikes()
  },[])
  return (
    
    <div className='catalog'>
      <div className="navBackground">

      </div>
      <h1>Catalog</h1>
      <Row xs={1} md={3} className="g-4">
        {bikes.map((bike)=>(
          <Col>
          <Card border='light' className="text-center">
            <Card.Img className='images' variant="top" src={bike.image} />
              <Card.Body>
                <Card.Title>{`${bike.brand} ${bike.model}`}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Catalog