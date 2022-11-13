import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className="shadow-md p-10 mx-2 lg:mx-auto w-full lg:w-96 rounded-xl my-5 lg:my-28 border">
            <h2 className="text-xl text-center font-bold my-3">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full ">
                    <label className="label"><span className="">Email :</span></label>
                    <input {...register("email")} type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Password :</span></label>
                    <input {...register("password")} type="text" className="input input-bordered w-full" />
                    <label className="label"><span className="label-text">Forget Password?</span></label>
                </div>
                <input className='btn btn-accent w-full' value="Login" type="submit" />
            </form>
            <p>New to Doctors Portal? <Link className="text-secondary text-sm" to="/signup">Create new account</Link></p>
            <div className="divider">OR</div>
            <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default Login;