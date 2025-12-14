
import React, { use } from 'react';
import AuthContext from '../contexts/AuthContext';

const useAuth = () => {
    const auth = use(AuthContext)
    return  auth
};

export default useAuth;