'use client';
import Image from 'next/image';
import React from 'react';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';

const AboutSection = ({about}) => {
    return (
        <div className='about-block lg:py-[100px] sm:py-16 py-10 bg-white'>
            <div className='container'>
                <div className='flex gap-y-6 row max-lg:flex-col lg:items-center'>
                    <div className='w-full lg:w-1/2'>
                        <div className='overflow-hidden w-full rounded-3xl bg-img'>
                            <Image  src={`${IMAGE_BASE_URL}/${about.image}`} width={4000} height={4000} alt='image' className='block w-full h-full' />
                        </div>
                    </div>
                    <div className='flex-col w-full lg:w-1/2 lg:pl-20'>
                        <div className='heading3'>
                           {about.title}
                        </div>
                        <div className='mt-8 nav-infor'>
                            <div className='mt-4 title text-secondary'>
                                {about.description}
                            </div>
                        </div>
                        <div className='flex gap-5 items-center pb-2 mt-6 button-block md:mt-10'>
                            <a href="" className='text-white bg-blue-800 button-main hover-button-black text-button rounder-full'>Get Started</a>

                            <a href="" className='flex gap-2 items-center bg-white rounded-full border-2 border-blue-800 button-main text-on-surface hover:bg-black hover:text-white hover:border-transparent text-button'> {about.phone}</a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default AboutSection;