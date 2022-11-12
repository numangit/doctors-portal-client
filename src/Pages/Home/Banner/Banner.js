import React from 'react';
import chair from "../../../assets/images/chair.png";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {
    return (
        <div>
            {/* bg image added using tailwind */}
            <div className="bg-[url('/src/assets/images/bg.png')] hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-8">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;