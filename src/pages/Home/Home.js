import React from 'react';
import Inventories from '../Store/Inventories/Inventories';
import Inventory from '../Store/Inventory/Inventory';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>



        </div>
    );
};

export default Home;