import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './context/userContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    // const { username } = useUserContext();
    const { username} = useContext(UserContext);

    return username ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;