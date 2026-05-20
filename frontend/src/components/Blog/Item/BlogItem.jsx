'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import * as Icon from '@phosphor-icons/react/dist/ssr'
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import ClipLoader from 'react-spinners/ClipLoader';


function BlogItem({data,key}) {

  const formattedDate = new Date(data.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
    
  return (
    <div className='blog-item' key={key}>
        <Link className='block overflow-hidden h-full bg-white rounded-2xl border duration-500 blog-item-main border-line hover-box-shadow' 
          href={'/blog/blog-details/[slug]'} 
          as={`/blog/blog-details/${data.post_slug.toLowerCase().replace(/ /g,'-')}`}>
            <div className='overflow-hidden w-full bg-img'>
                <Image width={5000} height={5000} className='block w-full h-full'  src={`${IMAGE_BASE_URL}/${data.image}`} alt={data.post_title} />
            </div>
            <div className='p-4 info sm:p-6'>
                <div className='inline-block px-3 py-1 capitalize bg-blue-100 rounded-full caption2 bg-surface'>
                    {data.category_name}
                </div>
                <div className='mt-2 heading6'>
                    {data.post_title}
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
                </div>
            </div>
        </Link>
    </div>
  )
}

export default BlogItem