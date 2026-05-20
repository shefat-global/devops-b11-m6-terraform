'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr'; 

const Menu = () => {

    const pathname = usePathname();
   // console.log(pathname);

    const [fixedHeader, setFixedHeader] = useState(false);
    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    return (
        <>
         <div className={`header-menu bg-white ${fixedHeader ? 'fixed' : ''}`}>
            <div className='container flex justify-between items-center h-20'>
                <Link className='menu-left-block' href="/">
                    <Image 
                         src={'/images/logo.jpg'}
                         width={2000}
                         height={1000}
                         alt='logo'
                         priority={true}
                         className='w-[149px] max-sm:w-[132px]'
                    />
                </Link>

                <div className='h-full menu-center-block'>
                    <ul className='flex items-center h-full menu-nav xl:gap-2'>
                        <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/' ? 'active' : ''}`}>
                            <Link className='flex gap-1 items-center nav-link text-title' href={'/'}>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/about' ? 'active' : ''}`}>
                            <Link className='flex gap-1 items-center nav-link text-title' href={'/about'}>
                                <span>About Us</span>
                            </Link>
                        </li>
                        <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/service' ? 'active' : ''}`}>
                            <Link className='flex gap-1 items-center nav-link text-title' href={'/service'}>
                                <span>Our Services</span>
                            </Link>
                        </li>
                        <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/case-studies' ? 'active' : ''}`}>
                            <Link className='flex gap-1 items-center nav-link text-title' href={'/case-studies'}>
                                <span>Case Studies</span>
                            </Link>
                        </li>
                        <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/blog' ? 'active' : ''}`}>
                            <Link className='flex gap-1 items-center nav-link text-title' href={'/blog'}>
                                <span>Blog</span>
                            </Link>
                        </li>
                        <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/contact' ? 'active' : ''}`}>
                            <Link className='flex gap-1 items-center nav-link text-title' href={'/contact'}>
                                <span>Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center menu-right-block'>
                    <div className='icon-call'>
                        <i className='text-4xl icon-phone-call'></i>
                    </div>
                    <div className='ml-3 text'>
                        <div className='text caption1'>
                            Free Consultancy
                        </div>
                        <div className='number text-button'>
                            +123 456 789
                        </div>
                    </div>
                </div>

                <div className='menu-humburger lg:hidden pointer' onClick={()=> setOpenMenuMobile(!openMenuMobile) }>
                    <Icon.List className='text-2xl' width='bold' />
                </div>

            </div>

        <div id='menu-mobile-block' className={` ${openMenuMobile && 'open'} `}>
            <div className='menu-mobile-main'>
                <div className='container'>
                    <ul className='pt-1 pb-1 h-full menu-nav-mobile'>
                        <li className='gap-2 pt-2 pr-3 pb-2 pl-3 h-full nav-item-mobile flex-column pointer'>
                            <a className='flex justify-between items-center nav-link-mobile' href="/">
                                <span className='font-bold body1'>Home</span>
                            </a>
                        </li>
                        <li className='gap-2 pt-2 pr-3 pb-2 pl-3 h-full nav-item-mobile flex-column pointer'>
                            <a className='flex justify-between items-center nav-link-mobile' href="/about">
                                <span className='font-bold body1'>About</span>
                            </a>
                        </li>
                        <li className='gap-2 pt-2 pr-3 pb-2 pl-3 h-full nav-item-mobile flex-column pointer'>
                            <a className='flex justify-between items-center nav-link-mobile' href="/service">
                                <span className='font-bold body1'>Our Services</span>
                            </a>
                        </li>
                        <li className='gap-2 pt-2 pr-3 pb-2 pl-3 h-full nav-item-mobile flex-column pointer'>
                            <a className='flex justify-between items-center nav-link-mobile' href="/case-studies">
                                <span className='font-bold body1'>Case Studies</span>
                            </a>
                        </li>
                        <li className='gap-2 pt-2 pr-3 pb-2 pl-3 h-full nav-item-mobile flex-column pointer'>
                            <a className='flex justify-between items-center nav-link-mobile' href="/blog">
                                <span className='font-bold body1'>Blog</span>
                            </a>
                        </li>
                        <li className='gap-2 pt-2 pr-3 pb-2 pl-3 h-full nav-item-mobile flex-column pointer'>
                            <a className='flex justify-between items-center nav-link-mobile' href="/contact">
                                <span className='font-bold body1'>Contact Us</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

         </div>   
        </>
    );
};

export default Menu;