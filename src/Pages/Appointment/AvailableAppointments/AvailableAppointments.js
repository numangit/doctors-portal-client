import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <section className='mt-16'>
            <h3 className='text-xl font-bold text-primary uppercase text-center my-2'>Available Appointments on {format(selectedDate, 'PP')}</h3>
        </section>
    );
};

export default AvailableAppointments;