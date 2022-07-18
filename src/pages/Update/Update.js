import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Update.css'



const Update = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])


    const { name, img, price, description, supplier } = inventory;

    return (
        <div className='d-flex justify-content-center align-items-center mt-5 '>
            <div className='update border rounded p-4 '>
                <img src={img} alt="" srcset="" />
                <h3 className='mt-3'>{name}</h3>
                <p className='fs-5'>{description}</p>
                <p className='fs-5'>{supplier}</p>
                <p className='fs-4'>Price:{price}</p>
                <button className='btn btn-primary w-25'>Delivered</button>



            </div>



        </div>
    );
};

export default Update;