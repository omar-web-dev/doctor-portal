import React from 'react';
import AppointmentModal from './AppointmentModal';

const AppointmentCards = ({ap}) => {
    const {id, title, time, site} = ap
    return (
        <div>
            <div className='text-center shadow-sm py-10 space-y-2'>
                <h2 className='text-xl font-semibold text-primary'>{title}</h2>
                <p className='text-sm'>{time}</p>
                <p className='text-sm'>{site} SPACES AVAILABLE</p>
                <label htmlFor={`my-modal-${id}`} className="bg-gradient-to-r from-primary to-secondary text-gray-50 btn btn-primary">Book Appointment</label>
                <AppointmentModal title={title} id={id}/>
            </div>
        </div>
    );
};

export default AppointmentCards;