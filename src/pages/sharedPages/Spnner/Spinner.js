import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (

        <div className='mt-4 w-100 d-flex justify-content-center align-items-center'>
            <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

        </div>

    );
};

export default Spinner;