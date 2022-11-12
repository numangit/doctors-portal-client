import React from 'react';
import chair from "../../../assets/images/chair.png";
const Banner = () => {
    return (
        <div>
            {/* bg image added using tailwind */}
            <div className="bg-[url('/src/assets/images/bg.png')] hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg w-1/2 shadow-2xl" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn border-0	 text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;