import React,{useState,useEffect} from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatchCart } from '../../context/CartContext'
import { Alert } from 'react-bootstrap'


const Product = () => {
  const dispatch = useDispatchCart()
  const url = 'http://localhost:4000/motorcycles/'
  const {id}= useParams()
  const [show, setShow] = useState(false);
  const[bikeInfo,setBikeInfo] = useState([])

  const getBike = async()=>{
      const data = await axios.get(url+id)
      setBikeInfo(data.data)
      
  }
  const addToCart = (item)=>{ 
    console.log(item)
    dispatch({type:"ADD",item})
    setShow(true)
  }
  useEffect(()=>{
    getBike()
  },[])
  return (
    <div className='product'>
      {show &&(
        <Alert variant="info" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Success</Alert.Heading>
        <p>
          The product you selected was added to the cart successfully!
        </p>
      </Alert>
      )}
      <h1>{bikeInfo.brand + " " + bikeInfo.model}</h1>
      <div className="product-container">
        <div className="product-image">
          <img src={bikeInfo.image} alt={bikeInfo.brand} />
        </div>
        <div className="product-details">
          <ul>
            <li>Year - {bikeInfo.year}</li>
            <li>Power - {bikeInfo.horsepower}hp</li>
            <li>Motor - {bikeInfo.motor}cc</li>
            <li>Weight - {bikeInfo.weight}kgs</li>
            <li>Color - {bikeInfo.color}</li>
            <li>Transmission - {bikeInfo.transmission}</li>
            <li>Price - ${bikeInfo.price}</li>
          </ul>
        </div>
      </div>
      {/* {cart.includes(bikeInfo)
      ? */}
      {/* <button className='add-to-cart' onClick={()=>removeFromCart(item)}>REMOVE FROM CART</button>
      : */}
      <button className='add-to-cart' onClick={()=>addToCart(bikeInfo)}>ADD TO CART</button>
    {/* } */}
      
      <div className="product-description">
          {bikeInfo.description}
      </div>      
    </div>
  )
}

export default Product