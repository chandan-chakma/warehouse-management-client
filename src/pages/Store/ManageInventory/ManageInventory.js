import React from 'react';
import { Link } from 'react-router-dom';
import UseInventories from './../../../Hook/UseInventories';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventories, setInventories] = UseInventories();
    const handleDelete = (id) => {
        const processed = window.confirm("do you want to delete")
        if (processed) {
            const url = `https://intense-dawn-90843.herokuapp.com/product/${id}`;

            fetch(url, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);

                })


        }

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
                inventories.map(inventory => <div className='d-flex justify-content-between align-items-center style w-50 mx-auto border m-3 p-3'
                    key={inventory._id}
                >
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={inventory.img} alt="" />
                        <div className='ps-3'>
                            <h2>{inventory.name}</h2>
                            <p>Price:{inventory.price}</p>

                        </div>


                    </div>
                    <div>
                        <button onClick={() => handleDelete(inventory._id)} className='btn btn-danger mt-2'>Delete</button>

                    </div>





                </div>)
            }


        </div>
    );
};

export default ManageInventory;