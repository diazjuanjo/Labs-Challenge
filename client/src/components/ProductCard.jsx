import React from 'react'

const ProductCard = ( {product} ) => {

  const { title, price, currency_id, available_quantity, thumbnail, condition } = product

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
          <img className="card-img-top" src={thumbnail} alt=""/>
          <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <small className="text-muted">Condicion: {condition}</small>
              <p className="card-text">Disponibilidad: {available_quantity}</p>
          </div>
          <div className="card-footer">
          <h5>$ {price}</h5>
          </div>
      </div>
  </div>
  )
}

export default ProductCard
