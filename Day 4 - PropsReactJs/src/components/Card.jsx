import React from 'react'

function Card({name, price, image}) {
  return (
    <div className="product-card">
    <img src={image} alt="Product Image" className="product-image" />
    <h2 className="product-name">{name}</h2>
    <p className="product-price">{price}</p>
    <button className="buy-button">Buy Now</button>
    </div>
  )
}

export default Card