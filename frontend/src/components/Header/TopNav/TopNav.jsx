'use client'
import React from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr'; 
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import ClipLoader from 'react-spinners/ClipLoader';

const TopNav = () => {

    const [header, setHeader] = useState([]);
     const [loading, setLoading] = useState(true);
    //console.log(header)
 
     useEffect(() => {
         const fetchItem = async () => {
             try {
                 const response = await fetch(`${API_BASE_URL}/sitesetting`);
                 const data = await response.json();
                 setHeader(data);
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
       <div className='bg-site_blue_color'>
            <div className='container flex items-center justify-between h-[44px]'>

                <div className='flex items-center left-block'>
                    {/* <div className='flex items-center location max-lg:hidden'>
                        <Icon.MapPin className='text-xl text-white' />
                        <span className='ml-2 text-white caption1'>{header.address}</span>
                    </div> */}
                    <div className='flex items-center mail lg:ml-1'>
                        <Icon.Envelope className='text-xl text-white' />
                        <span className='ml-2 text-white caption1'>{header.email}</span>
                    </div>
                </div>

                <div className='flex gap-5 items-center right-block'>
                      <div className='w-px h-6 line bg-grey max-sm:hidden'>
                      </div>  
                      <div className='list-social flex items-center gap-2.5'>  

                        {
                            header.facebook && (
                                <Link className='flex justify-center items-center w-7 h-7 rounded-full border-2 item border-grey' href={header.facebook} target='_blank'>
                                     <i className='icon-facebook text-[10px]'></i>
                                 </Link>                                 
                            ) 
                        }

                        {                            
                            header.youtube && (
                                <Link className='flex justify-center items-center w-7 h-7 rounded-full border-2 item border-grey' href={header.youtube}  target='_blank'>
                                    <i className='icon-youtube text-[10px]'></i>
                                </Link>                                    
                            ) 
                        }                    
                       
                  
                        
                        {/* <Link className='flex justify-center items-center w-7 h-7 rounded-full border-2 item border-grey' href='https://www.linkedin.com/' target='_blank'>
                            <i className='icon-in text-[10px]'></i>
                        </Link>  
                        <Link className='flex justify-center items-center w-7 h-7 rounded-full border-2 item border-grey' href='https://www.twitter.com/' target='_blank'>
                            <i className='icon-twitter text-[10px]'></i>
                        </Link>  
                        <Link className='flex justify-center items-center w-7 h-7 rounded-full border-2 item border-grey' href='https://www.instragram.com/' target='_blank'>
                            <i className='icon-insta text-[10px]'></i>
                        </Link>  
                         */}
                         
                      </div>
                </div>
                

            </div>
       </div>
      </>
    );
};

export default TopNav;