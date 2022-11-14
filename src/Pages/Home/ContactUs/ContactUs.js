import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <div className="bg-[url('/src/assets/images/appointment.png')] p-5 lg:p-14">
            <div className='text-center p-'>
                <h4 className="text-xl text-primary font-bold">Contact Us</h4>
                <h2 className="text-4xl text-white mb-7">Stay connected with us</h2>
                <div>
                    <input type="text" placeholder="Email Address" className="my-2 input input-bordered w-full  lg:w-[450px]" />
                </div>
                <div>
                    <input type="text" placeholder="Subject" className="my-2 input input-bordered w-full  lg:w-[450px]" />
                </div>
                <div>
                    <textarea className="my-2 textarea textarea-bordered w-full lg:w-[450px]" placeholder="Your message"></textarea>
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default ContactUs;