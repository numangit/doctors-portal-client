import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            {/* bg image added using tailwind */}
            <div className="bg-[url('/src/assets/images/bg.png')] hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-10 lg:p-16  my-10 lg:my-20">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
                    <div className='mx-auto'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p className='text-center'>You picked {format(selectedDate, 'PP')}.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;