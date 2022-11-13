import React from 'react';

import Primary from '../../Components/Primary';


const AppointmentBook = () => {
    return (
        <div className='border bg-red-500'>
            <div>
                <h3 className='text-red-500'>Teeth Cleaning</h3>
                <p>8:00 AM - 9:00 AM</p>
                <Primary>Book Appointment</Primary>
            </div>
        </div>
    );
};

export default AppointmentBook;