import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }
    //REMINDER: you will need to install react hook form to use this kind of form.
    //stop and restart the react app if the error handling does'nt work.
    return (
        <div className="shadow-md p-10 mx-2 lg:mx-auto w-full lg:w-96 rounded-xl my-5 lg:my-24 border">
            <h2 className="text-xl text-center font-bold my-3">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full ">
                    <label className="label"><span className="">Email :</span></label>
                    <input {...register("email", { required: "Email Address is required" })} type="email" className="input input-bordered w-full" />
                    {errors.email && <p className="text-red-500 text-sm" role="alert">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Password :</span></label>
                    <input {...register("password",
                        {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })}
                        type="password" className="input input-bordered w-full" />
                    {errors.password && <p className="text-red-500 text-sm" role="alert">{errors.password?.message}</p>}
                    <label className="label my-1"><span className="label-text">Forget Password?</span></label>
                </div>
                <input className='btn btn-accent w-full' value="Login" type="submit" />
            </form>
            <p className="text-sm my-1">New to Doctors Portal? <Link className="text-secondary" to="/signup">Create new account</Link></p>
            <div className="divider">OR</div>
            <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default Login;