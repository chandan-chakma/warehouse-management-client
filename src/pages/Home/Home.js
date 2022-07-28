import React from 'react';
import { Link } from 'react-router-dom';
import Inventories from '../Store/Inventories/Inventories';
import Inventory from '../Store/Inventory/Inventory';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Link to='/manageInventory'>
                <button className='btn btn-primary text-center d-block mx-auto m-4 py-3 fs-3 px-4 '>Manage Inventory</button>
            </Link>



        </div>
    );
};

export default Home;