import React, { useState } from 'react';
import { useEffect } from 'react';

const UseUpdate = (inventoryId) => {
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventoryId])

    return [inventory]
};

export default UseUpdate;