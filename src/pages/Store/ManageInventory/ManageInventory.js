import React from 'react';
import { Link } from 'react-router-dom';
import UseInventories from './../../../Hook/UseInventories';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventories, setInventories] = UseInventories();
    const handleDelete = () => {

    }
    return (
        <div className='mt-4'>
            <h1 className='text-center mb-5 text-success'>Manage Inventory</h1>
            <div className='d-flex justify-content-between w-50 mx-auto '>
                <div></div>
                <div>
                    <Link to='/additem'>
                        <button className='btn btn-primary'>Add Item</button></Link>
                </div>
            </div>

            {
                inventories.map(inventory => <div className='d-flex justify-content-between style w-50 mx-auto border m-3 p-3'
                    key={inventory._id}
                >
                    <div className='d-flex justify-content-center align-items-end'>
                        <img src={inventory.img} alt="" />
                        <div className='ps-3'>
                            <h2>{inventory.name}</h2>
                            <p>Price:{inventory.price}</p>
                        </div>

                    </div>

                    <div>
                        <button className='btn btn-danger'>Delete</button>
                    </div>


                </div>)
            }


        </div>
    );
};

export default ManageInventory;