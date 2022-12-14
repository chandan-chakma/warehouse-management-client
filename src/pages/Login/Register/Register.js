import React, { useState } from 'react';
import './Register.css'
import SocialLogin from './../SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const navigateLogin = () => {
        navigate('/signin')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        console.log("updated profile")
        alert('updated profile')
        navigate('/')

    }

    if (user) {
        console.log("user", user)
    }
    return (
        <div>
            <div className='register-form'>
                <h2 style={{ textAlign: 'center' }}>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your Name' />

                    <input type="email" name="email" id="" placeholder='Email Address' required />

                    <input type="password" name="password" id="" placeholder='Password' required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                    <input
                        disabled={!agree}
                        className='w-50 mx-auto btn btn-primary mt-2'
                        type="submit"
                        value="Register" />
                </form>
                <p>Already have an account? <Link to="/signin" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

            </div>
            <SocialLogin ></SocialLogin>

        </div>


    );
};

export default Register; 