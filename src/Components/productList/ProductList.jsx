import React from 'react';
import './productList.css';
import CheckoutSteps from '../../Components/Navbar/CheckoutStep';
import Product from '../product/Product';
import { products } from '../../data';
import artnono from '../../img/artnono.png';

const ProductList = () => {
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="pl">
        <div className="pl-texts">
          <img src={artnono} alt="Me" className="pl-img" />
          <h1 className="pl-title">Toutes mes créations : </h1>
        </div>
        <div className="pl-list">
          {products.map((item) => (
            <Product
              key={item.id}
              img={item.img}
              link={item.link}
              title={item.title}
            />
          ))}
        </div>
        <p className="pl-sub">
          Vous avez fait le tour de toutes mes créations ? Il est temps de vous
          donner toutes mes coordonnées. C'est parti !!
        </p>
      </div>
    </div>
  );
};

export default ProductList;
