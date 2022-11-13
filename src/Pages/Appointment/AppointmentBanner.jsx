import React from 'react';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import AppointmentJust from '../AppointmentJust/AppointmentJust';

const AppointmentBanner = ({setSelected, selected}) => {
    const footer = <p>this is a Appointment time</p>
        return (
            <div className='bg-base-100  py-10'>
                <div className="lg:flex items-center  lg:flex-row-reverse">
                    <div className='lg:w-1/2 p-[8%]'>
                        <img src={"https://i.ibb.co/qnJqRvg/chair.png"} className="max-w-full rounded-lg shadow-2xl" alt='banner' />
                    </div>
                    <div className='shadow-md flex justify-center pb-4'>
                        <DayPicker className='mx-auto'
                        mode='single'
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer}
                        />
                    </div>
                </div>
                <AppointmentJust/>
            </div>
        );
    };

    export default AppointmentBanner;