import React from 'react'

const ProductCard = ( {product} ) => {

  const { title, price, currency_id, available_quantity, thumbnail, condition } = product

  return (
    <div className="col mb-4">
      <div className="card">
        <img src={thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">${ price }</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
