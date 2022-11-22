import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleSignIn, setLoading, passwordReset } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }


    //show and hide password
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleLogin = data => {
        console.log(data)
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
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

    const handlePasswordReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        passwordReset(email)
            .then(() => {
                console.log('email sent');
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    //REMINDER: you will need to install react hook form to use this kind of form.
    //stop and restart the react app if the error handling does'nt work.
    return (
        <div className="shadow-md p-10 mx-2 lg:mx-auto w-full lg:w-96 rounded-xl my-5 lg:my-24 border">
            <h2 className="text-xl text-center font-bold my-3">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    {loginError && <p className='text-red-600'>{loginError.slice(22, -2)}</p>}
                </div>
                <div className="form-control w-full ">
                    <label className="label"><span className="">Email :</span></label>
                    <input {...register("email", { required: "Email Address is required" })} type="email" className="input input-bordered w-full" />
                    {errors.email && <p className="text-red-500 text-sm" role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Password :</span></label>
                    <div className='relative'>
                        <input {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            type={passwordShown ? "text" : "password"} className="input input-bordered w-full" />

                        <div onClick={togglePassword}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center ">
                            <AiFillEye
                                className={passwordShown ? 'hidden' : 'block'} />
                            <AiFillEyeInvisible
                                className={passwordShown ? 'block' : 'hidden'} />
                        </div>
                    </div>

                    {errors.password && <p className="text-red-500 text-sm" role="alert">{errors.password?.message}</p>}
                    <label htmlFor="my-modal-4" className="label my-1"><span className="label-text">Forget Password?</span></label>
                </div>
                <input className='btn btn-accent w-full' value="Login" type="submit" />
            </form >
            <p className="text-sm my-1">New to Doctors Portal? <Link className="text-secondary" to="/signup">Create new account</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>

            {/* modal */}
            {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Please enter your email</h3>
                    <form onSubmit={handlePasswordReset} >
                        <div className="form-control w-full ">
                            <input name="email" type="email" className="input input-bordered w-full my-2" placeholder='Your email' />
                        </div>
                        <button className="btn mx-auto w-full" type="submit">Send</button>
                    </form>
                </div>
            </div> */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="font-bold text-lg my-1">Reset your password</h3>
                    <p>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                    <form className="my-2" onSubmit={handlePasswordReset} >
                        <div className="form-control w-full">
                            <input name="email" type="email" className="input input-bordered w-full my-2" placeholder='Your email' />
                        </div>
                        <button className="btn mx-auto w-full my-1" type="submit">Send</button>
                    </form>
                </label>
            </label>
        </div >
    );
};

export default Login;