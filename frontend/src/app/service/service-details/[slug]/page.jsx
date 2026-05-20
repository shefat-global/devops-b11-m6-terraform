'use client';
import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Header/Menu/Menu';
import TopNav from '@/components/Header/TopNav/TopNav';
import Partner from '@/components/Partner/Partner';
import Breadcrumb from '@/components/Section/Breadcrumb';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import ClipLoader from 'react-spinners/ClipLoader';


const ServiceDetails = ({ params }) => {

    const getTextFromHTML = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    }

    const { slug } = params;

    const [serviceDetails, setServiceDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    
  ///  console.log(serviceDetails);
        
    useEffect(() => {
        if(slug){
            const fetchItem = async () => {
                try {
                    const response = await fetch(`${API_BASE_URL}/service/${slug}`);
                    const data = await response.json();
                    setServiceDetails(data);
                } catch (error) {
                    console.error('Error fetching data',error);
                } finally {
                    setLoading(false);
                }
                };
            fetchItem();
        }
    },[slug]);    
        
    
    return (
        <div className='overflow-x-hidden'>
        <header id="header">
           <TopNav />
           <Menu />               
        </header>

        
        {
            loading ? (
                <div className='flex justify-center items-center h-[500px]'>
                    <ClipLoader color='#3498db' size={50} />          
                </div>
            ): (

            <main className="content">
            <Breadcrumb link="Our Services" img="/images/header.webp" title={serviceDetails.service_name} desc={serviceDetails.service_short}/>  

                <div className='content-detail-block lg:py-[100px] sm:py-16 py-10'>
                    <div className='container'>
                        <div className='flex gap-y-8 max-xl:flex-col'>

                            <div className='w-full xl:w-3/4'>                        
                                <div className='w-full xl:pr-[80px]'>
                                    <div className='heading3'>
                                        {serviceDetails.service_name}
                                    </div>
                                    <div className='mt-5 mb-5 bg-img'>
                                        <Image src={`${IMAGE_BASE_URL}/${serviceDetails.image}`} alt="service" width={5000} height={5000} className='w-full h-full rounded-xl'/>
                                    </div>
                                    <div className='body2 text-secondary'>                                    
                                        {getTextFromHTML(serviceDetails.service_desc)}
                                    </div>
                                </div>
                            </div>

                            <div className='w-full xl:w-1/4'>
                                <div className='px-8 py-8 rounded-xl border more-infor border-line'>
                                    <div className='heading6'>
                                    The best of our Services
                                    </div>
                                    <div className='mt-2 body3 text-secondary'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius libero ex. Necessitatibus sit, alias corrupti hic nulla possimus aut! Voluptatem modi beatae nemo suscipit delectus rem voluptate enim incidunt!
                                    </div>
                                    <div className='mt-4 list-nav'>
                                        <Link className='p-12 rounded-lg nav-item flex-between' href="/">
                                            <div className='text-button text-secondary'>                                        
                                                Payment Solution   
                                            </div>
                                        </Link>

                                        <Link className='p-12 rounded-lg nav-item flex-between' href="/">
                                            <div className='text-button text-secondary'>                                        
                                                Financial Planning
                                            </div>
                                        </Link>

                                        <Link className='p-12 rounded-lg nav-item flex-between' href="/">
                                            <div className='text-button text-secondary'>                                        
                                                Online Bangking   
                                            </div>
                                        </Link>

                                        <Link className='p-12 rounded-lg nav-item flex-between' href="/">
                                            <div className='text-button text-secondary'>                                        
                                                personal banking   
                                            </div>
                                        </Link>
                                    </div>
                                </div>    
                                <div className='relative mt-6 rounded-lg ads-block md:mt-8'>
                                    <div className='bg-img'>
                                        <Image width={5000} height={5000} src='/images/ads.webp' alt='ads'/>
                                    </div>
                                    <div className='flex absolute top-0 left-0 flex-col justify-between p-8 w-full h-full text'>
                                        <div className='title'>
                                            <div className='text-white heading5'>  
                                                Let's Talk 
                                            </div>
                                            <div className='mt-4 text-white body3'>
                                                If you have project contact us
                                            </div>
                                        </div>
                                        <div className='mt-6 button-block md:mt-10'>
                                            <Link className='inline-block bg-white button-main hover:bg-black hover:text-white text-button' href="/contact">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>                        
                            </div>

                        </div>
                    </div>
                </div>

            </main>

         )
        }

        <Partner className='lg:mt-[100px] sm:mt-16 mt-10' />

        <footer id="footer">
           <Footer />
        </footer>
       </div>
    );
};

export default ServiceDetails;