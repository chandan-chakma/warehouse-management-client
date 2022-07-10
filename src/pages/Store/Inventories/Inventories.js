import React from 'react';
import UseInventories from '../../../Hook/UseInventories';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = UseInventories();

    return (
        <div className='m-4'>
            <h1 className='text-center'>Our Inventory</h1>
            {
                inventories.map(inventory => <Inventory
                    key={inventory._id}
                    inventory={inventory}

                >

                </Inventory>)
            }

        </div>
    );
};

export default Inventories;