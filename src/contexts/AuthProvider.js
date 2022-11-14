import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

//1. create context
export const AuthContext = createContext();
//2.get auth from firebase
const auth = getAuth(app)

//4. wrap <app/> with auth provider in index.js
//5.destructure the children of auth provider and place it inside Auth context
const AuthProvider = ({ children }) => {

    const authInfo = {}

    return (
        //3. place the context provider eith value
        <AuthContext.Provider value={authInfo}>
            {//5.destructure the children of auth provider and place it inside Auth context
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;