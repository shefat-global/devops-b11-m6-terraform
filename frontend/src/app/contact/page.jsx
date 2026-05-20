'use client'
import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Header/Menu/Menu';
import TopNav from '@/components/Header/TopNav/TopNav';
import Partner from '@/components/Partner/Partner';
import Breadcrumb from '@/components/Section/Breadcrumb';
import React from 'react';
import Image from 'next/image';
import * as Icon from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { API_BASE_URL } from '@/config/config';


const ContactPage = () => {

    const [formData, setFormData] = useState(
        {
            name: '',
            phone: '',
            subject: '',
            email: '', 
            message: ''
        }
    );

   // console.log(formData);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage('');
        setErrorMessage('');

        try{
            const response = await fetch(`${API_BASE_URL}/contact`, {
                 method: 'POST',
                 headers: {
                    'Content-Type': 'application/json',
                    
                 },
                 body: JSON.stringify(formData)
            });
            
            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.error ? JSON.stringify(errorData.errors) : 'Something Went Wrong')
            }
            
            setSuccessMessage('Message sent successfully.');
            setFormData({name: '', phone:'', subject:'', email:'', message:''});

        }catch (error) {
            setErrorMessage('Failed to send message!');
        }finally{
            setIsSubmitting(false)
        }
        
    }
    
    
    return (
        <div className='overflow-x-hidden'>
        <header id="header">
           <TopNav />
           <Menu />               
        </header>

        <main className="content">
           <Breadcrumb link="Contact Us" img="/images/header.webp" title="Contact Us" desc="Get in touch with us."/>  
        
            <div className='form-contact lg:py-[100px] sm:py-16 py-10'>
                <div className='container flex justify-center items-center'>
                    <div className='flex gap-y-8 w-full max:w-5/6 max-lg:flex-col xl:items-center'>

                        <div className='w-full xl:w-2/5'>
                            <div className='p-10 bg-blue-500 rounded-xl infor'>
                                <div className='text-white heading5'>
                                    Get in touch with us.
                                </div>
                                <div className='mt-2 text-white body3'>
                                    We will get back to you soon..
                                </div>
                                <div className='flex flex-wrap gap-3 items-center mt-6 list-social md:mt-10'>
                                    <Link className='flex justify-center items-center w-12 h-12 rounded-full item bg-slate-200' href='https://facebook.com/' target='_blank'>
                                    <i className='text-sm text-black icon-facebook'></i>    
                                    </Link>

                                    <Link className='flex justify-center items-center w-12 h-12 rounded-full item bg-slate-200' href='https://linkedin.com/' target='_blank'>
                                    <i className='text-xs text-black icon-in'></i>
                                    </Link>

                                    <Link className='flex justify-center items-center w-12 h-12 rounded-full item bg-slate-200' href='https://twitter.com/' target='_blank'>
                                    <i className='text-xs text-black icon-twitter'></i>
                                    </Link>

                                    <Link className='flex justify-center items-center w-12 h-12 rounded-full item bg-slate-200' href='https://youtube.com/' target='_blank'>
                                    <i className='text-xs text-black icon-youtube'></i>
                                    </Link>
                                </div>

                                <div className='mt-6 list-more-infor md:mt-10'>
                                    <div className='flex gap-3 items-center item'>
                                        <div className='flex flex-shrink-0 justify-center items-center w-8 h-8 bg-white rounded-full'>
                                            <Icon.Clock className='text text-blue 2xl' weight={'bold'} />
                                        </div> 
                                        <div className='line-y'>
                                        </div>    
                                        <div className='text-white normal-case text-button'>8AM - 5PM</div>  
                                    </div>
                                    <div className='flex gap-3 items-center mt-5 item'>
                                        <div className='flex flex-shrink-0 justify-center items-center w-8 h-8 bg-white rounded-full'>
                                            <Icon.Phone className='text text-blue 2xl' weight={'bold'} />
                                        </div> 
                                        <div className='line-y'>
                                        </div>    
                                        <div className='text-white normal-case text-button'>0123456789</div>  
                                    </div>
                                    <div className='flex gap-3 items-center mt-5 item'>
                                        <div className='flex flex-shrink-0 justify-center items-center w-8 h-8 bg-white rounded-full'>
                                            <Icon.Envelope className='text text-blue 2xl' weight={'bold'} />
                                        </div> 
                                        <div className='line-y'>
                                        </div>    
                                        <div className='text-white normal-case text-button'>support@noriyoshitech.com</div>  
                                    </div>
                                    <div className='flex gap-3 items-center mt-5 item'>
                                        <div className='flex flex-shrink-0 justify-center items-center w-8 h-8 bg-white rounded-full'>
                                            <Icon.MapPin className='text text-blue 2xl' weight={'bold'} />
                                        </div> 
                                        <div className='line-y'>
                                        </div>    
                                        <div className='text-white normal-case text-button'>Dhaka, Bangladesh</div>  
                                    </div>
                                </div>
                                
                            </div>                            
                        

                        </div>

                        <div className='w-full xl:w-3/5 xl:pl-20'>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-between form-block'>
                                <div className='heading'>
                                   <div className='heading5'>
                                        Request A Message
                                   </div>
                                   <div className='mt-2 body3 text-secondary'>
                                       We will back to you within 24 hours.
                                   </div>
                                </div>
                                
                                {successMessage && <p className='text-geen-800'>{successMessage}</p>}
                                {errorMessage && <p className='text-red-800'>{errorMessage}</p>}
                                
                                <div className='grid gap-5 sm:grid-cols-2'>
                                    <div className='w-full'>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className='px-4 py-3 w-full rounded-lg bg-slate-100 text-secondary caption1' />                                    
                                    </div>

                                    <div className='w-full'>
                                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className='px-4 py-3 w-full rounded-lg bg-slate-100 text-secondary caption1' />                                    
                                    </div>

                                    <div className='col-span-2'>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" className='px-4 py-3 w-full rounded-lg bg-slate-100 text-secondary caption1' />                                    
                                    </div>
                                    <div className='col-span-2'>
                                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className='px-4 py-3 w-full rounded-lg bg-slate-100 text-secondary caption1' />                                    
                                    </div>
                                    <div className='col-span-2 w-full'>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" id="message" rows={4} className='px-4 py-3 w-full rounded-lg bg-slate-100 text-secondary caption1'>                                            
                                        </textarea>                                    
                                    </div>      

                                    <div className='button-block'>
                                        <button type="submit" className='text-white bg-blue-500 rounded-full button-main hover:border-blue-800 text-button'
                                            disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}                                            
                                        </button>
                                    </div>                             

                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
               
        </main>

        <Partner className='lg:mt-[100px] sm:mt-16 mt-10' />

        <footer id="footer">
           <Footer />
        </footer>
       </div>
    );
};

export default ContactPage;