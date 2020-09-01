import React from "react";

const ProductCard = ({ product }) => {
  const {
    title,
    price,
    currency_id,
    available_quantity,
    thumbnail,
    condition,
  } = product;

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={thumbnail} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Condicion: {condition}</p>
            <p className="card-text">
              <small className="text-muted">
                Disponibilidad: {available_quantity}
              </small>
            </p>
            <div className="card-footer">
              <h5>
                {currency_id} $ {price}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
