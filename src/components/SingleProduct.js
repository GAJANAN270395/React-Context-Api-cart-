import React from 'react';

const SingleProduct = ({ prod }) => {
  console.log(prod);
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span>{prod.name}</span>
        <span>{prod.price}</span>
      </div>
    </div>
  );
};
export default SingleProduct;
