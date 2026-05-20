import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Header/Menu/Menu';
import TopNav from '@/components/Header/TopNav/TopNav';
import Partner from '@/components/Partner/Partner';
import Breadcrumb from '@/components/Section/Breadcrumb';
import React from 'react';
import serviceData from "@/data/service.json";
import Service from '@/components/Service/Service';
import Image from 'next/image';


const ServicePage = () => {
    return (
        <div className='overflow-x-hidden'>
        <header id="header">
           <TopNav />
           <Menu />               
        </header>

        <main className="content">
           <Breadcrumb link="Our Services" img="/images/header.webp" title="Our Services" desc="A brief history of the company."/>  

           <div className='mt-[100px]'>
                <div className='container'>
                    <div className='flex gap-8 max-lg:flex-col-reverse'>

                        <div className='w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10'>
                            <div className='heading3'>
                                 Credit card management
                                <div className='body2 text-secondary mt-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius libero ex. Necessitatibus sit, alias corrupti hic nulla possimus aut! Voluptatem modi beatae nemo suscipit delectus rem voluptate enim incidunt!
                                </div> 
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2'>
                            <div className='bg-image w-full overflow-hidden rounder-xl'>
                                <Image src="/images/assessment.webp" alt="service" width={5000} height={5000} className='w-full h-full block'/>
                            </div>
                        </div>

                    </div>
                </div>
           </div>

           <Service data={serviceData} className='pb-10' />
        </main>

        <Partner className='lg:mt-[100px] sm:mt-16 mt-10' />

        <footer id="footer">
           <Footer />
        </footer>
       </div>
    );
};

export default ServicePage;