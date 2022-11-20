import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <h3 className='text-5xl text-primary font-bold'>Oops Something Went Wrong!</h3>
                <p className='text-2xl'>Error : {error.statusText || error.message}</p>
                <h4 className="text-2xl"> Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4>
            </div>
        </div>
    );
};

export default DisplayError;