import React from 'react'
import Card from './Card'
const products = [
    {
        name: "Product 1",
        price: 99.99,
        imageSrc: "https://via.placeholder.com/300x200.png?text=Product+1"
    },
    {
        name: "Product 2",
        price: 89.99,
        imageSrc: "https://via.placeholder.com/300x200.png?text=Product+2"
    },
    {
        name: "Product 3",
        price: 79.99,
        imageSrc: "https://via.placeholder.com/300x200.png?text=Product+3"
    },
    {
        name: "Product 4",
        price: 69.99,
        imageSrc: "https://via.placeholder.com/300x200.png?text=Product+4"
    },
    {
        name: "Product 5",
        price: 59.99,
        imageSrc: "https://via.placeholder.com/300x200.png?text=Product+5"
    }
]

function Cards() {
  return (
        products.map(product=><Card name={product.name} price = {product.price} image={product.imageSrc}/>)
  )
}

export default Cards