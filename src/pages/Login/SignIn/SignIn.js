import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './../SocialLogin/SocialLogin';



const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)


    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='w-50 mx-auto m-3'>
            <h2 className='text-center text-primary'>Please Signin</h2>


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
            <p className='mt-3 text-primary'>New to warehouse management? <Link to='/register' className='text-danger text-decoration-none m-2'>Please Register</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default SignIn;