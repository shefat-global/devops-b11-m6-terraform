'use client';
import React from 'react';
import Link from 'next/link';

const ServiceItem = ({ data, number }) => {
    return (
        <div className='p-8 bg-white rounded-lg border service-item border-line hover-box-shadow'>

            <Link className='h-full service-item-main' href={'/service/service-details/[slug]'} 
                as={`/service/service-details/${data.service_name.toLowerCase().replace(/ /g,'-')}`}>

                <div className='flex justify-between items-center heading'>
                    <i className={`${data.icon} text-blue md:text-6xl text-5xl`}></i>
                    <div className='number heading3 text-placeholder text-state-400'>
                        {number+1}                        
                    </div>                    
                </div>
                <div className='mt-6 duration-300 heading6 hover:text-blue'>
                        {data.service_name}
                </div>
                <div className='mt-2 text-secondary'> 
                    {data.service_short}
                </div>

            </Link>
        </div>
    );
};

export default ServiceItem;