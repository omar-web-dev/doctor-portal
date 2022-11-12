import React from 'react';
import Primary from '../../Components/Primary';

const Appointment = () => {
    return (
        <div className="card rounded-none bg-base-100  image-full">
            <figure>
                <img src="https://i.ibb.co/h8pXZ0N/appointment.png" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-primary">Appointment</h2>
                <h1 className=" text-4xl lg:text-5xl  font-bold">
                    Your New Smile Starts Here
                </h1>
                <p className="py-6">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <Primary className=''>Get Started</Primary>
            </div>
        </div>
    );
};

export default Appointment;