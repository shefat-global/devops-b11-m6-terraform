'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr'
import { API_BASE_URL } from '@/config/config';

const Footer = () => {

    const [footer, setFooter] = useState([]);
    const [loading, setLoading] = useState(true);
   //console.log(footer)

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/sitesetting`);
                const data = await response.json();
                setFooter(data);
            } catch (error) {
                console.error('Error fetching data',error);
            } finally {
                setLoading(false);
            }
        };
        fetchItem();
    },[]);


    const date = new Date();
    const year = date.getFullYear();


return (
    <div className='footer-block bg-black pt-[60px]'>
        <div className='container'>
            <div className='flex gap-y-10 pb-10 max-lg:flex-col max-lg:items-start'>
                <div className='lg:w-1/4'>
            <div className='flex flex-col gap-5 justify-between footer-company-infor'>
                <Image width={4000} height={4000} className='footer-logo w-[145px]' src='/images/logo.jpg' />
            <div className='text-white text caption1'>
           {footer.footer_message}
            </div>

        <div className='flex gap-2 items-center list-social'>
           
           {
            footer.facebook && ( 
                <Link className='flex justify-center items-center w-7 h-7 rounded-full border-2 item border-gray' href={footer.facebook} target='_blank'>
                <i className='text-sm icon-facebook'></i>
                </Link> 
             ) 
           }
 
            <Link className='flex justify-center items-center w-7 h-7 rounded-full border-2 item border-gray' href='https://linkedin.com/' target='_blank'>
            <i className='text-xs icon-in'></i>
            </Link>

            <Link className='flex justify-center items-center w-7 h-7 rounded-full border-2 item border-gray' href='https://twitter.com/' target='_blank'>
            <i className='text-xs icon-twitter'></i>
            </Link>

            {
            footer.youtube && ( <Link className='flex justify-center items-center w-7 h-7 rounded-full border-2 item border-gray' href={footer.youtube} target='_blank'>
                <i className='text-xs icon-youtube'></i>
                </Link>
                ) 
           }
            

        </div>  
            </div> 
                </div>


    <div className='lg:w-1/2'>
    <div className='flex gap-20 justify-center items-center footer-navigate'>
        <div className='footer-nav-item'> 
        <div className='text-white item-heading text-button-sm'>
                Quick Links
        </div>
        <ul className='mt-1 text-white list-nav'>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                    About Us 
                </Link>
            </li>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                    Services
                </Link>
            </li>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                   Case Studies
                </Link>
            </li>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                 Contact
                </Link>
            </li>
        </ul>
      </div>


    <div className='footer-nav-item max-sm:hidden'>
    <div className='text-white item-heading text-button-sm'>
               Pages
        </div>
        <ul className='mt-1 text-white list-nav'>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                    About Us 
                </Link>
            </li>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                    Services
                </Link>
            </li>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                   Case Studies
                </Link>
            </li>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                 Contact
                </Link>
            </li>
        </ul>
    </div>




    <div className='footer-nav-item'>
    <div className='text-white item-heading text-button-sm'>
               Blog
        </div>
        <ul className='mt-1 text-white list-nav'>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                    All Blog
                </Link>
            </li>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                    Services
                </Link>
            </li>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                   Case Studies
                </Link>
            </li>
            <li className='mt-3'>
                <Link className='caption1 has-line-before line-white text-surface hover-underline' href='/'>
                 Contact
                </Link>
            </li>
        </ul>
    </div> 
    </div> 
    </div>

    <div className='lg:w-1/4'>
        <div className='company-contact'>
            <div className='text-white heading text-button-sm'>
                NewsLetter
            </div>
        <div className='flex items-start mt-3'>
            <div className='text'>
                <div className='text-white cpation2 text-surface'>
                    Need Help? 24/7
                </div>
            <div className='mt-1 text-white fw-700'>
            {footer.phone }
            </div> 
            </div> 
        </div>

        <div className='flex items-center mt-3 locate'>
            <div className='text-white caption1 text-surface'>
            {footer.address}
            </div> 
        </div>

    <form className='send-block mt-5 flex items-center h-[45px] rounded-lg overflow-hidden'>
        <input className='pr-4 pl-3 w-full h-full caption1 text-secondary' type="text" placeholder='Your Email Address' />
        <button className='flex items-center justify-center w-[45px] h-[45px] bg-blue-800 flex-shrink-0'>
            <Icon.PaperPlaneTilt className='text-white' />
        </button>
    </form>

        </div> 
    </div> 
            </div> 


            <div className='border-line'> </div>
    <div className='flex justify-between items-center pt-3 pb-3 footer-bottom'>
        <div className='flex items-center left-block'>
            <div className='text-white copy-right text-surface caption1'>
                @{year} Noriyoshi Tech. All Rights Reserved
            </div> 
        </div>

    <div className='flex gap-3 items-center text-white nav-link'>
        <a href="#" className='text-surface caption1 hover-underline' >Terms of Services</a>
        <span className='text-surface caption1'> | </span>
        <a href="#" className='text-surface caption1 hover-underline' >Privacy Policy</a>

    </div> 
    </div>


        </div> 
    </div>
);

};

export default Footer;