import React from 'react';

const Banding = ({bandingCard}) => {
    const {title, icon, description, bgClass} = bandingCard
    return (
        <div className={`card text-gray-100 card-side p-5 shadow-xl py-10 ${bgClass} `}>
            <figure className='h-[86px] w-[86px]'>
              {icon}
            </figure>
            <div className="card-body py-0">
                <h2 className="card-title text-5 font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Banding;