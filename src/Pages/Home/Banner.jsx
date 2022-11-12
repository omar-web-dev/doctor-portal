import { primary } from 'daisyui/src/colors';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import Banding from './Banding';

const Banner = () => {
    const brandingInfo = [
        {
            id : 1,
            icon : <FaRegClock/>,
            title : 'Opening Hours',
            description : 'Lorem Ipsum is simply dummy text of the pri',
            bgClass : 'bg-gradient-to-r to-secondary from-primary fond-bold '
        },
        {
            id : 2,
            icon : <FaMapMarkerAlt/>,
            title : 'Visit our location',
            description : 'Brooklyn, NY 10036, United States',
            bgClass : 'bg-accent'
        },
        {
            id : 3,
            icon : <FaPhoneAlt/>,
            title : 'Contact us now',
            description : '+088 012 456 789',
            bgClass : 'bg-gradient-to-r to-secondary from-primary'
        },
    ]
    return (
        <div className=" bg-base-100 py-10">
            <div className="flex items-center  lg:flex-row-reverse">
                <div className='lg:w-1/2'>
                    <img src={"https://i.ibb.co/qnJqRvg/chair.png"} className="max-w-full rounded-lg shadow-2xl" alt='banner' />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold">
                        Your New Smile Starts Here
                    </h1>
                    <p className="py-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                    <button className="bg-gradient-to-r from-primary to-secondary text-gray-50 btn btn-primary">Get Started</button>
                </div>
            </div>
            <div className='gap-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {brandingInfo.map(bc => <Banding key={bc=bc.id} bandingCard={bc}/> )}
            </div>
        </div>
    );
};

export default Banner;