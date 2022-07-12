import React from 'react';
import './SocialLogin.css';
import google from '../../../images/google/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
import auth from './../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className=''>

            <button onClick={() => signInWithGoogle()} className='w-50 background d-flex justify-content-center align-items-center mx-auto mt-4 py-2 border-0 rounded'>
                <img style={{ width: '25px' }} src={google} alt="" srcset="" />
                <span className='G ps-1'>G</span>
                <span className='o'>o</span>
                <span className='oo'>o</span>
                <span className='G'>g</span>
                <span className='l'>l</span>
                <span className='o'>e</span></button>

        </div>
    );
};

export default SocialLogin;