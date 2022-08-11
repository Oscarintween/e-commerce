import React,{useState,useEffect} from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatchCart } from '../../context/CartContext'

const Product = () => {
  const dispatch = useDispatchCart()
  // const [cart,setCart] = useState((JSON.parse(localStorage.getItem("cart")) || []))
  const url = 'http://localhost:4000/motorcycles/'
  const {id}= useParams()
  const[bikeInfo,setBikeInfo] = useState([])

  const getBike = async()=>{
      const data = await axios.get(url+id)
      setBikeInfo(data.data)
      
  }
  const addToCart = (item)=>{ 
    console.log(item)
    dispatch({type:"ADD",item})
    // console.log(cart)
    // setCart([...cart,info])
    // console.log('after',cart)
    // localStorage.setItem("cart",JSON.stringify(cart))
  }
  const removeFromCart = (info)=>{
    // setCart(cart.filter((i)=>i._id!==info._id))
    // localStorage.setItem("cart",JSON.stringify(cart))
  }
  useEffect(()=>{
    getBike()
  },[])
  return (
    <div className='product'>
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