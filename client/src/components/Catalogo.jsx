import React from 'react'
import ProductCard from './ProductCard'

const Catalogo = ({products}) => {
  // console.log(products)
  return (
    <div className="row mt-4">
      { products.map( product => (
        <ProductCard 
          key = { product.id}
          product = { product }
        />
      ))}
    </div>
  )
}

export default Catalogo
