import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AppointmentBook from './AppointmentBook';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date())

    return (
        <div>
            <AppointmentBook/>
            <AppointmentBanner selected={selected} setSelected={setSelected}/>      
        </div>
    );
};

export default Appointment;