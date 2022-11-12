import React from 'react';
import TestimonialCards from './TestimonialCards';

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            img: 'https://i.ibb.co/cJ7zbVt/people1.png',
            name: 'Omar Faruk',
            time: '3 day ago',
            title: 'Nam cu platonem posidonium sanctus debitis te',
            description: 'Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...'
        },
        {
            id: 2,
            img: 'https://i.ibb.co/NCdTQqb/people2.png',
            name: 'Omar Faruk',
            time: '3 day ago',
            title: 'Nam cu platonem posidonium sanctus debitis te',
            description: 'Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...'
        },
        {
            id: 3,
            img: 'https://i.ibb.co/tm83tK0/people3.png',
            name: 'Omar Faruk',
            time: '3 day ago',
            title: 'Nam cu platonem posidonium sanctus debitis te',
            description: 'Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...'
        }
    ]
    return (
        <div className="mt-10 px-[8%] ">
            <div className="flex justify-between">
                <div>
                    <p className='text-primary font-bold'>Testimonial</p>
                    <p className='text-2xl'>What Our Patients Says</p>
                </div>
                <img src="https://i.ibb.co/tQnqL7S/Mask-Group-7-2x-1.png" alt="" />
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {testimonialData.map(tsd => <TestimonialCards key={tsd} tsd={tsd} />)}
            </div>
        </div>
    );
};

export default Testimonial;