'use client'
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import 'swiper/css/bundle'
import { useEffect, useState } from 'react';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import ClipLoader from 'react-spinners/ClipLoader';


const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);
    const [loading, setLoading] = useState(true);
    //console.log(testimonial)

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/gettestimonial`);
                const data = await response.json();
                setTestimonial(data);
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
            <div className='testimonial-block bg-slate-100'>
                <div className='container'>
                    <div className='testimonial-main bg-surface lg:pt-20 sm:pt-16 pt-10 lg:pb-12 pb-8 sm:my-16 my-10 lg:rounded-[40px]
                     rounded-2xl flex items-center justify-center'>
                        <div className='content sm:w-2/3 w-[85%]'>
                            <div className='text-center heading3'>
                                Trrusted by Professionls
                            </div>

                    {
                        loading ? (
                            <div className='flex justify-center items-center h-[500px]'>
                            <ClipLoader color='#3498db' size={50} />          
                    </div>
                        ): (


                           

                            <Swiper
                            spaceBetween={16}
                            slidesPerView={1}                                
                            loop={true}
                            pagination={{ clickable: true }}
                            speed={400}
                            modules={[Pagination,Autoplay,Navigation]}
                            className='relative mt-7 h-full lg:mt-10'
                            autoplay={{
                                delay: 4000
                            }}
                        >


                            {
                                testimonial.slice(0,3).map((item, index)=> (

                                    <SwiperSlide className='pb-20 lg:pb-24' key={index}>
                                        <div className='text-2xl font-medium text-center'>
                                            {String.raw`"`} {item.message} {String.raw`"`}
                                        </div>    
                                        <div className='mt-5 text-center text-button'>
                                            {item.name} // {item.position}
                                        </div>                           
                                    </SwiperSlide>     
                                    
                                ))
                            }                         

                                                   

                             </Swiper>
                            
                        )
                    }        

                        
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default Testimonial;
