import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
    const [selected, setSelected] = useState(new Date())
    let footer = <p>You selected {format(selected, 'PP')}</p>
        return (
            <div className='bg-base-100 p-[8%] py-10'>
                <div className="lg:flex items-center  lg:flex-row-reverse">
                    <div className='lg:w-1/2'>
                        <img src={"https://i.ibb.co/qnJqRvg/chair.png"} className="max-w-full rounded-lg shadow-2xl" alt='banner' />
                    </div>
                    <div>
                        <DayPicker 
                        mode='single'
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer}/>
                    </div>
                </div>
            </div>
        );
    };

    export default AppointmentBanner;