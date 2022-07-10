import React from 'react';
import './inventory.css';

const Inventory = ({ inventory }) => {
    const { name, price, description, img, supplier } = inventory;
    return (
        <div className='inventory my-4 mx-2'>
            <img src={img} alt="" srcset="" />
            <h2 className="my-3 text-center">{name}</h2>
            <h2 className='fs-4'>{description}</h2>
            <p className="fs-2">Price: {price}</p>
            <h6>{supplier}</h6>
            <button className="text-center my-3 fs-3 py-2 px-1">update</button>

        </div>
    );
};

export default Inventory;