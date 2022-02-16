import React from 'react';
import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className='pl-title'>Mes inspirations et créations</h1>
                <p className='pl-desc'>
                    Je vous presente ci-dessous, mes différentes créations qui sont codées soit en équipe soit par mes soins.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                <Product key={item.id} img={item.img} link ={item.link} title={item.title} />
                ))}
                
            </div>
        </div>
    )
}

export default ProductList
