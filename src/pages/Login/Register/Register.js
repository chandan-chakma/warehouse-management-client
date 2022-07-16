import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import SocialLogin from './../SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(name, email, password)
        navigate('/')
    }
    return (
        <div>
            <div className='w-50 mx-auto m-3'>
                <h2 className='text-center text-primary'>Please SignJin</h2>


                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter your name" />
                    </Form.Group>

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
                <p className='mt-3 text-primary'>Already have an account? <Link to='/signin' className='text-danger text-decoration-none m-2'>Please signin</Link></p>

                <SocialLogin ></SocialLogin>

            </div>

        </div>
    );
};

export default Register; 