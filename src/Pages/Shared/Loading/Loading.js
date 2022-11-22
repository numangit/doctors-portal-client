// import Lottie from "lottie-react";
// import loadPic from "../../../assets/99318-hms-loading.json";
import React from 'react';
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className="w-full flex justify-center items-center h-40 mx-auto">
            <div>
                {/* <p className='text-center'>loading...</p> */}

                {/* tailwind loader component */}
                {/* <progress className="progress w-56"></progress> */}

                {/* lottie file loader animation */}
                {/* <Lottie className="w-64" animationData={loadPic} loop={true} /> */}

                {/* react-loader-spinner loader */}
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </div>
    );
};

export default Loading;