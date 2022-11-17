import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleSignIn, setLoading } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')
    const location = useLocation();
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        // navigate('/');
        navigate(from, { replace: true });
    }

    const handleSignUp = data => {
        console.log(data)
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                // const user = result.user;
                navigate(from, { replace: true });
                setLoading(false);
            }).catch((error) => {
                console.log(error.message);
            });
    }

    //REMINDER: you will need to install react hook form to use this kind of form.
    //stop and restart the react app if the error handling does'nt work.
    return (
        <div className="shadow-md p-10 mx-2 lg:mx-auto w-full lg:w-96 rounded-xl my-5 lg:my-24 border">
            <h2 className="text-xl text-center font-bold my-3">SignUp</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div>
                    {signUpError && <p className='text-red-600'>{signUpError.slice(22, -2)}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="">Name :</span></label>
                    <input {...register("name",
                        {//name validation and error handling 
                            required: "Name is required"
                        })}
                        type="text" className="input input-bordered w-full" />
                    {errors.name && <p className="text-red-500 text-sm" role="alert">{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="">Email :</span></label>
                    <input {...register("email",
                        {//email validation and error handling 
                            required: "Email Address is required"
                        })}
                        type="email" className="input input-bordered w-full" />
                    {errors.email && <p className="text-red-500 text-sm" role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Password :</span></label>
                    <input {...register("password",
                        {//password validations and error handling 
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: 'Password must be 6 characters or longer'
                            },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                message: 'Password must have uppercase, number and special characters'
                            }
                        })}
                        type="password" className="input input-bordered w-full" />
                    {errors.password && <p className="text-red-500 text-sm" role="alert">{errors.password?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-3' value="SignUp" type="submit" />
            </form>
            <p className="text-sm my-1">Already have an account? <Link className="text-secondary" to="/login">Please Login</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SignUp;