import React from 'react'
import './cart.css'
import { useCart, useDispatchCart } from '../../context/CartContext'
import {PayPalScriptProvider,PayPalButtons} from '@paypal/react-paypal-js'


const CartPage = () => {
  const items = useCart()
  const dispatch = useDispatchCart()
  const totalPrice = items.reduce((total,bike)=>total + parseInt(bike.price.replaceAll(',','')) ,0);
  const deleteBike = (index)=>{
    dispatch({type:"REMOVE",index})
  }
  return (
    <div className='cart'>
      <div className="cart-container">
        <div className="cart-headers">
          <div className="item-image">
            <h2>Image</h2>
          </div>
          <div className="item-name">
            <h2>Name</h2>
          </div>
          <div className="item-price">
            <h2>Price</h2>
          </div>
        </div>
       
          {items.length === 0
          ?
          <h2>No items in Cart</h2>
          :
            items.map((item,index)=>(
             <div key={index} className="cart-items">
                <div className='delete-icon'>
                <i className="bi bi-trash text-danger" onClick={()=>deleteBike(index)}></i>
                </div>
                <div className="item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="item-name">
                  <h3>{item.brand + ' ' + item.model}</h3>
                </div>
                <div className="item-price">
                  <h3>${item.price}</h3>
                </div>
              </div>
           )         
          )}
        
      </div>
      <div className='total-price'>
        <div className="total-price-header">
          <h2>TOTAL PRICE</h2>
        </div>
        <div>
          <h2>${totalPrice.toLocaleString()}</h2>
        </div>
        <PayPalScriptProvider 
        options={{
          "client-id":
          "AWm1TQOdD4Ec37EmR-jqAuOO0ragfJKV4FhZU7nwjYfED0F2HZoZtKlZ2NmgoqjUljEA4eV05jiRZwyY"
        }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPrice,
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              const name = details.payer.name.given_name;
              alert("Transaction completed by " + name);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default CartPage