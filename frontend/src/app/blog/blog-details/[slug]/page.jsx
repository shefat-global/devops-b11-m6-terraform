'use client';
import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Header/Menu/Menu';
import TopNav from '@/components/Header/TopNav/TopNav';
import Partner from '@/components/Partner/Partner';
import Breadcrumb from '@/components/Section/Breadcrumb';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr'
import { useRef, useEffect, useState } from 'react';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import ClipLoader from 'react-spinners/ClipLoader';


const BlogDetails = ({ params }) => {


      const getTextFromHTML = (html) => {
            const div = document.createElement('div');
            div.innerHTML = html;
            return div.textContent || div.innerText || '';
        }
    
        const { slug } = params;
    
        const [blogDetails, setBlogDetails] = useState([]);
        const [loading, setLoading] = useState(true);
        
       //console.log(blogDetails);
            
        useEffect(() => {
            if(slug){
                const fetchItem = async () => {
                    try {
                        const response = await fetch(`${API_BASE_URL}/allblog/${slug}`);
                        const data = await response.json();
                        setBlogDetails(data);
                    } catch (error) {
                        console.error('Error fetching data',error);
                    } finally {
                        setLoading(false);
                    }
                    };
                fetchItem();
            }
        },[slug]);    


        
     const formattedDate = new Date(blogDetails.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

        
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
           <Breadcrumb link={blogDetails.category_name} img="/images/header.webp" title={blogDetails.post_title} desc="A brief history of the company."/>  

            <div className='content-detail-block lg:py-[100px] sm:py-16 py-10'>
                <div className='container'>
                    <div className='flex gap-y-8 max-xl:flex-col'>

                        <div className='w-full xl:w-3/4'>                        
                            <div className='w-full xl:pr-[80px]'>
                                <div className='heading3'>
                                  {blogDetails.post_title}
                                </div>
                                <div className='mt-5 mb-5 bg-img'>
                                    <Image src={`${IMAGE_BASE_URL}/${blogDetails.image}`}  alt="service" width={5000} height={5000} className='w-full h-full rounded-xl'/>
                                </div>
                                <div className='flex gap-4 items-center mt-2 date'>
                                    <div className='author caption2 text-secondary'>                       
                                    by <span className='text-on-surface'>
                                            Admin
                                        </span>
                                    </div>
                                    <div className='flex items-center item-date'>
                                        <Icon.CalendarBlank weight='bold' />
                                        <span className='ml-1 caption2'> {formattedDate}</span>
                                    </div>
                                    <div className='inline-block px-3 py-1 capitalize bg-blue-100 rounded-full caption2 bg-surface'>
                                        {blogDetails.category_name}
                                    </div>
                                </div>
                              
                                <div className='body2 text-secondary'>
                                    {getTextFromHTML(blogDetails.long_descp)}
                                </div>
                            </div>
                        </div>

                        <div className='w-full xl:w-1/4'>
                            <div className='px-8 py-8 rounded-xl border more-infor border-line'>
                                <div className='heading6'>
                                   Categories
                                </div>                                
                                <div className='mt-2 list-nav'>
                                    <Link className='p-6 rounded-lg nav-item flex-between' href="/">
                                        <div className='text-button text-secondary'>                                        
                                            Payment Solution   
                                        </div>
                                    </Link>

                                    <Link className='p-6 rounded-lg nav-item flex-between' href="/">
                                        <div className='text-button text-secondary'>                                        
                                            Financial Planning
                                        </div>
                                    </Link>

                                    <Link className='p-6 rounded-lg nav-item flex-between' href="/">
                                        <div className='text-button text-secondary'>                                        
                                            Online Bangking   
                                        </div>
                                    </Link>

                                    <Link className='p-6 rounded-lg nav-item flex-between' href="/">
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

export default BlogDetails;