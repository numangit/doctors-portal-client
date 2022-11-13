import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <input {...register("firstName")} placeholder="First name" />
            <select {...register("category", { required: true })}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
            </select>
            <textarea {...register("aboutYou")} placeholder="About you" />
            <p>{data}</p>
            <input type="submit" />
        </form>
    );
};

export default Login;