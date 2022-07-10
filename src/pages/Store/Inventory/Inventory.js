import React from 'react';
import './inventory.css';
import { useNavigate } from 'react-router-dom'

const Inventory = ({ inventory }) => {
    const { _id, name, price, description, img, supplier } = inventory;
    const navigate = useNavigate();

    const handleUpdate = (_id) => {
        navigate(`/inventory/${_id}`)

    }
    return (
        <div className='inventory my-4 mx-2'>
            <img src={img} alt="" srcset="" />
            <h2 className="my-3 text-center">{name}</h2>
            <h2 className='fs-4'>{description}</h2>
            <p className="fs-2">Price: {price}</p>
            <h6>{supplier}</h6>
            <button onClick={() => handleUpdate(_id)} className="text-center my-3 fs-3 py-2 px-1">update</button>

        </div>
    );
};

export default Inventory;