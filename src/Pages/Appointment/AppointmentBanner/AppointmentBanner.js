import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            {/* bg image added using tailwind */}
            <div className="bg-[url('/src/assets/images/bg.png')] hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-10 lg:p-16  my-10 lg:my-17">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" data-aos="fade-left" alt="" />
                    <div className='mx-auto' data-aos="fade-right">
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            // could have done this way onSelect={setSelectedDate}, but an error occurs if the date is clicked twice so to avoid that i have used the method below
                            onSelect={(data => {
                                if (data) {
                                    setSelectedDate(data)
                                }
                            })}
                        />
                        <p className='text-center'>You picked {format(selectedDate, 'PP')}.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;