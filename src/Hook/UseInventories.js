import React, { useEffect, useState } from 'react';

const UseInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://intense-dawn-90843.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return [inventories, setInventories]

};

export default UseInventories;