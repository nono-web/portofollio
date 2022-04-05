import React from 'react';
import './product.css';


const Product = ({ img, link, title }) => {
  return (
    <div className="p">
      <a className="p-link" href={link} target="_blank" real="noreferrer">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div>
          <p className="p-title">{title}</p>
        </div>
        <img src={img} alt="coucou" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
