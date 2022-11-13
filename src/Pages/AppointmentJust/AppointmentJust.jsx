import React from 'react';
import Primary from '../../Components/Primary';
import AppointmentCards from './AppointmentCards';

const AppointmentJust = () => {
    const appointmentData = [
        {
            id : 1,
            title : 'Teeth Cleaning' ,
            time : '08:00AM - 09:00AM',
            site : '10'
        },
        {
            id : 2,
            title : 'ABC Cleaning',
            time : '9:00AM - 10:00AM',
            site : '32'
        },
        {
            id : 3,
            title : 'DBC Cleaning'  ,
            time : '10:00AM - 11:00AM',
            site : '65'
        },
        {
            id : 4,
            title : 'ALM Cleaning'  ,
            time : '11:00AM - 12:00PM',
            site : '12'
        },
        {
            id : 5,
            title : 'TSP Cleaning'  ,
            time : '12:00PM - 01:00PM',
            site : '21'
        },
        {
            id : 6,
            title : 'ARL Cleaning'  ,
            time : '01:00PM - 02:00PM',
            site : '23'
        },
    ]
    return (
        <>
        {appointmentData.map(ap => <AppointmentCards key={ap.id} ap={ap}/>)}
        </>
    );
};

export default AppointmentJust;