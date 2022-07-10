import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <h2>Welcome to {inventoryId}</h2>

        </div>
    );
};

export default Update;