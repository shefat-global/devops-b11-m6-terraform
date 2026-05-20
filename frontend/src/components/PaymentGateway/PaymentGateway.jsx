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


const PaymentGateway = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const [gatewayone, setGatewayone] = useState([]);
    const [loading, setLoading] = useState(true);
  //  console.log(gatewayone)
    
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/gatewayone`);
                const data = await response.json();
                setGatewayone(data);
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
            <section className='payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-surface relative bg-slate-300'>
                <div className='top-0 left-0 flex-shrink-0 w-full h-full bg-img lg:absolute lg:w-1/2'>
                    <Image src={`${IMAGE_BASE_URL}/${gatewayone.image}`} width={5000} height={5000} alt='gateway' className='object-cover w-full h-full' /> 
                </div>

                <div className='container w-full lg:py-[150px] pt-14 py-16'>                   
                    <div className='flex items-center w-full lg:justify-end' ref={ref}>
                        <div className='payment-info lg:w-1/2 xl:pl-20 lg:pl-10'  
                            style={{ 
                            transform: isInView ? "none" : "translateY(60px)", 
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"}}>

                            <div className='flex gap-4 items-center heading max-lg:flex-wrap'>                                
                                <div className='flex items-center'>
                                    <div className='img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0 z-[3]'>
                                        <Image className='h-full rounded-full full' width={300} height={300} src={'/images/avatar3.webp'} alt='avatar' />
                                    </div>
                                </div>
                                <div className='text-button text-secondary'>
                                    Trusted by 5M+ People <br/>
                                    Around the globe
                                </div> 
                            </div>

                            <div className='mt-5 text lg:mt-14'>
                                <h3 className='heading3'>{gatewayone.title}</h3>
                                <div className='mt-4 body3 text-secondary lg:mt-6'>
                                     {gatewayone.description}
                                </div>                                
                            </div>

                            <div className='flex gap-3 items-center mt-8 button-block max-sm:flex-wrap sm:gap-6 lg:mt-12 w-fit'>
                                <Link className='text-white whitespace-nowrap bg-blue-700 rounded-full button-main box-shadow hover:bg-black-800 bg-blue' href={'/'}>Get Started</Link>

                                <div className='relative'>
                                    <Link className='button-main box-shadow hover:bg-black hover:text-white text-on-service bg-white 
                                    flex items-center gap-2 rounded-full relative z-[1]' href={'/'}>
                                        <Icon.Phone className='text-xl' weight='fill' />  
                                        <span className='whitespace-nowrap'> {gatewayone.phone} </span>
                                    </Link>
                                    <Image 
                                        src={'/images/component/gateway1-dot.png'}
                                        className='absolute -right-12 w-[100px] h-auto top-1/2 -translate-y-1/2'
                                        width={4000}
                                        height={4000}
                                        alt='image'
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>            
        </div>
    );
};

export default PaymentGateway;
