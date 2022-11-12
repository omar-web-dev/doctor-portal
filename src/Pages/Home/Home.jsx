import React from 'react';
import Banner from './Banner';
import Testimonial from '../Testimonial/Testimonial';
import Appointment from '../Appointment/Appointment';
import Services from '../Services/Services';
import Contact from './Contact/Contact';

const Home = () => {
    
    return (
        <div>
            <div className='max-w-[1440px] mx-auto'>
                <Banner />
                <Services/>
                <Appointment/>
                <Testimonial/>
                <Contact/>
            </div>
        </div>
    );
};

export default Home;