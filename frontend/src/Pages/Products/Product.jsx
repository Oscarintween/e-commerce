import React,{useState,useEffect} from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
  const {id}= useParams()
  const[bikeInfo,setBikeInfo] = useState([])
  const getBike = async()=>{
    const url = 'http://localhost:4000/motorcycles/'
      const data = await axios.get(url+id)
      setBikeInfo(data.data)
      console.log(bikeInfo)
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
      <div className="product-description">
          {bikeInfo.description}
        </div>
    </div>
  )
}

export default Product