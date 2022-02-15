import React from 'react'
import './product.css'


const Product = ({img,link,title}) => {
    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" real='noreferrer'>
                <img src={img} alt="coucou" className='p-img' />
            </a>
            <p className='p-title'>{title}</p>
        </div>
    )
}

export default Product
