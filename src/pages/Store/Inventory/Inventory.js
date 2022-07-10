import React from 'react';
import './inventory.css';

const Inventory = ({ inventory }) => {
    const { name, price, description, img, supplier } = inventory;
    return (
        <div className='inventory'>
            <img src={img} alt="" srcset="" />
            <h2>{name}</h2>
            <h2>{description}</h2>
            <p>Price: {price}</p>
            <h6>{supplier}</h6>
            <button>update</button>

        </div>
    );
};

export default Inventory;