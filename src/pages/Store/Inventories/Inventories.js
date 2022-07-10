import React from 'react';
import UseInventories from '../../../Hook/UseInventories';
import Inventory from '../Inventory/Inventory';
import "./inventories.css"

const Inventories = () => {
    const [inventories, setInventories] = UseInventories();

    return (
        <div className='m-4'>

            <h1 className='text-center m-5'>Our Inventory</h1>

            <div className='inventories m-5'>
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}

                    >

                    </Inventory>)
                }

            </div>


        </div>
    );
};

export default Inventories;