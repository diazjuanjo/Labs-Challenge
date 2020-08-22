import React from 'react'
import ProductCard from './ProductCard'

const Catalogo = ({products}) => {
  console.log(products)
  return (
    <div className="row row-cols-1 row-cols-md-3">
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
