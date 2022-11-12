import React from 'react';
import chair from "../../../assets/images/chair.png";
const Banner = () => {
    return (
        <div>
            {/* bg image added using tailwind */}
            <div className="bg-[url('/src/assets/images/bg.png')] hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-8">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn border-0	text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;