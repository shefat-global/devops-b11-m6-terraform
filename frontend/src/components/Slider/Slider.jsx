'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import * as Icon from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/bundle'
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import ClipLoader from 'react-spinners/ClipLoader';

const Slider = () => {


     const [sliders, setSliders] = useState([]);
     const [loading, setLoading] = useState(true);
     //console.log(sliders)
 
     useEffect(() => {
         const fetchItem = async () => {
             try {
                 const response = await fetch(`${API_BASE_URL}/sliders`);
                 const data = await response.json();
                 setSliders(data);
             } catch (error) {
                 console.error('Error fetching data',error);
             } finally {
                 setLoading(false);
             }
         };
         fetchItem();
     },[]);

    
    return (
        <>
    
{
    loading ? (
        <div className='flex justify-center items-center h-[500px]'>
                <ClipLoader color='#3498db' size={50} />          
        </div>
    ) : (

        <div className='slider-block'>
        <div className='justify-center items-center prev-arrow'>
        <Icon.CaretLeft className='text-white heading6' weight='bold'/>
        </div>

    <div className='slider-main'>
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
            prevEl: '.prev-arrow',
            nextEl: '.next-arrow'
        }}
        loop={true}
        pagination={{ clickable: true }}
        speed={400}
        modules={[Pagination,Autoplay,Navigation]}
        className='relative h-full'
        autoplay={{
            delay: 4000
        }}
        >

{
    sliders.map((slider)=> (
        <SwiperSlide key={slider.id}>
    <div className='slider-item slider-first'>
        <div className='bg-img'>
            <Image
                src={`${IMAGE_BASE_URL}/${slider.image}`}
                width={4000}
                height={3000}
                alt={slider.heading}
                priority={true}
                className='object-cover w-full h-full'
            /> 
        </div>
    
    <div className='container'>
        <div className='text-content flex-column-between'>
            <div className='heading2'>
                <div className='overflow-hidden relative'>
                    <span className='block overflow-hidden relative text-white'>{slider.heading}</span>
                    <span className='block absolute top-0 left-0 w-full h-full text-white'>{slider.heading}</span>
                </div>                
            </div>

        <div className='mt-3 text-white body2 text-secondary'> 
            {slider.description} 
        </div>

        <div className='mt-6 button-block md:mt-10'>
            <Link className='text-white bg-blue-700 button-main hover:bg-blue-500' href={slider.link}> 
                Discovery Now 
            </Link> 
        </div> 
       </div> 
    </div> 
    </div> 
</SwiperSlide>  

    ))
}


        </Swiper>

    </div>


    <div className='justify-center items-center next-arrow'>
        <Icon.CaretRight className='text-white heading6' weight='bold'/>
        </div>

    </div>
        
    )
}    
        
    
           
        </>
    );
};

export default Slider;