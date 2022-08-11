import React,{useContext, useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './catalog.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Catalog = () => {
  const navigate = useNavigate()
  const [bikes, setBikes] = useState([])
  const getBikes = async()=>{
    const url ='http://localhost:4000/motorcycles'
      const data = await axios.get(url)
      setBikes(data.data)
      console.log(bikes)
  }
  useEffect(()=>{
    getBikes()
  },[])
  return (
    
    <div className='catalog'>
      <h1>Catalog</h1>
      <Row xs={1} md={3} className="g-4">
        {bikes.map((bike)=>(
          <Col key={bike.model}>
          <Card border='light' className="text-center">
            <Card.Img onClick={()=>navigate(`/product/${bike._id}`)} className='images' variant="top" src={bike.image} />
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