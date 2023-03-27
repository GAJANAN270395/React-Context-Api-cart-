import React from 'react';
import SingleProduct from './SingleProduct';
import './style.css';
import faker from 'faker';

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
  }));

  return (
    <div>
      <h1>This is Home.js</h1>
      <SingleProduct />
    </div>
  );
};

export default Home;
