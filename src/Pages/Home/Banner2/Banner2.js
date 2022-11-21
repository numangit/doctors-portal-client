import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import treatment from '../../../assets/images/treatment.png';

const Banner2 = () => {
    return (
        <div className="hero lg:px-24 lg:py-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="m-6 rounded-lg shadow-2xl w-[322px] lg:w-96 lg:m-10" data-aos="fade-up" data-aos-duration="1000" alt="" />
                <div className='P-4 lg:p-24'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner2;