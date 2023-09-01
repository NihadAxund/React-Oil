import React from 'react';
import "./total.css"

export default function Total({ priceA, priceB }) {
  const totalPrice = (priceA + priceB).toFixed(2);
  return (
    <div >
      <p style={{fontSize:"30px"}}>Price: </p>
    <div style={{textAlign:"center"}}>
        <p style={{fontSize:"50px",fontWeight:"bold"}}>{totalPrice} $</p>
    </div>
    </div>
  )
}
