import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



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
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://intense-dawn-90843.herokuapp.com/signin', { email })
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken)

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast("sent email")

        }
        else {
            toast("Enter your email")
        }

    }

    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>{error.message}</p>

            </div>
    }



    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='w-50 mx-auto m-3'>
            <h2 className='text-center text-primary'>Please Sign in</h2>


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                {errorElement}

                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
            <p className='mt-2'>Forget password <span className='btn btn-primary' onClick={resetPassword}>Reset password</span></p>
            <p className='mt-3 text-primary'>New to warehouse management? <Link to='/register' className='text-danger text-decoration-none m-2'>Please Register</Link></p>

            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default SignIn;