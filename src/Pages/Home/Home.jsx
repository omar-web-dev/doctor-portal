import React from 'react';
import Appointment from '../Appointment';
import Banner from './Banner';
import Services from './Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    
    return (
        <div>
            <div className='max-w-[1440px] mx-auto'>
                <Banner />
                <Services/>
                <Appointment/>
                <Testimonial/>
            </div>
        </div>
    );
};

export default Home;