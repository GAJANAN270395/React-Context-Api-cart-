import React, { useState } from 'react';
import SingleProduct from './SingleProduct';

import './style.css';
import faker from 'faker';

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    image: faker.random.image(),
    price: faker.commerce.price(),
  }));
  //  console.log(productArray);

  const [products] = useState(productArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} />
      ))}
    </div>
  );
};

export default Home;
