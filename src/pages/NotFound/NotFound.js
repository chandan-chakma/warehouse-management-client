import React from 'react';
import error from "../../images/404/000-404.png";

const NotFound = () => {
    return (
        <div className='text-center my-5 '>
            <h2 className='display-1'>Page not <span className='text-danger '>Found !!</span></h2>
            <img className='mt-5' src={error} alt="" />

        </div>
    );
};

export default NotFound;