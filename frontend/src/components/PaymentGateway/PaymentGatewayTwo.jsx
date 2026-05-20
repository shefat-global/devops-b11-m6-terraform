'use client';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRef } from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr'; 
import { useEffect, useState } from 'react';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import ClipLoader from 'react-spinners/ClipLoader';


const PaymentGatewayTwo = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const [gatewaytwo, setGatewaytwo] = useState([]);
    const [loading, setLoading] = useState(true);
    //  console.log(gatewaytwo)
    
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/gatewaytwo`);
                const data = await response.json();
                setGatewaytwo(data);
            } catch (error) {
                console.error('Error fetching data',error);
            } finally {
                setLoading(false);
            }
        };
        fetchItem();
    },[]);

  return (
    <div>
        <section className='payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10' ref={ref}>
            <div className='container'>

                <div className='flex gap-8 items-center content'>

                    <div className='flex flex-col gap-y-6 w-full xl:w-5/12'>
                        <h3 className='heading3'>  {gatewaytwo.title}  </h3>
                        <div className='body3 text-secondary'>
                                {gatewaytwo.description}
                        </div>
                        <div className='button-block'>
                        <Link className='text-white whitespace-nowrap bg-black rounded-full button-main hover:bg-black-800 bg-blue' href={'/'}>Get Started</Link>
                        </div>                        
                    </div>

                    <div className='w-11/12 xl:w-7/12'>
                        <div className='pl-10 right' 
                                style={{ 
                                transform: isInView ? "none" : "translateY(60px)", 
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"}}>

                                <div className='bg-img'>                            
                                    <Image 
                                        width={5000}
                                        height={5000}
                                        src={`${IMAGE_BASE_URL}/${gatewaytwo.image}`}
                                        alt='gateway'
                                        className='w-full'
                                    />
                                </div>                           
                            

                            <div className='inline-flex gap-4 items-center px-6 py-4 bg-white rounded-2xl feature-item box-shadow'>
                                <i className='p-4 text-2xl bg-red-400 rounded-2xl icon-list'></i>
                                <div className='text'>
                                    <div className='heading7'>{gatewaytwo.project}k+</div>
                                    <div className='heading7 text-secondary'>Projects</div>
                                </div>
                            </div>

                            <div className='inline-flex gap-4 items-center px-6 py-4 bg-white rounded-2xl feature-item box-shadow'>
                                <Icon.Star weight='fill' className='text-3xl text-yellow-600' />
                                <div className='text'>
                                    <div className='heading7'>  {gatewaytwo.review} </div>
                                    <div className='heading7 text-secondary'>Satisfaction</div>
                                </div>
                            </div> 

                            <div className='inline-flex gap-4 items-center px-6 py-4 bg-white rounded-2xl feature-item box-shadow'>
                                <i className='p-4 text-2xl bg-red-600 rounded-2xl icon-user'></i>
                                <div className='text'>
                                    <div className='heading7'>{gatewaytwo.exerience} Years</div>
                                    <div className='heading7 text-secondary'>Product Designer</div>
                                </div>
                            </div> 

                         </div>  

                    </div>

                </div>             

            </div>
        </section>
    </div>
  )
}

export default PaymentGatewayTwo;

