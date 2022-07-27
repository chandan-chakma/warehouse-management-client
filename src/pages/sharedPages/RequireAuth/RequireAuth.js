import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useLocation, Navigate } from 'react-router-dom';
import Spinner from './../Spnner/Spinner';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Spinner></Spinner>
    }


    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;