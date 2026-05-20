'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr'
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import ClipLoader from 'react-spinners/ClipLoader';

const BlogList = ( ) => {

    const [blog, setBlog] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(sliders)

    useEffect(() => {
        const fetchItem = async () => {
            setLoading(true);
            try {
                const url = selectedCategory
                 ? `${API_BASE_URL}/category/${selectedCategory}/blogs`
                 : `${API_BASE_URL}/allblog`;
                 const response = await fetch(url);  
                 const data = await response.json();
                 setBlog(data);
            } catch (error) {
                console.error('Error fetching data',error);
            } finally {
                setLoading(false);
            }
        };
        fetchItem();
    },[selectedCategory]);

    useEffect(() => {
        const fetchCatItem = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/blogcat`);
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching data',error);
            } finally {
                setLoading(false);
            }
        };
        fetchCatItem();
    },[]);

    
    const getTextFromHTML = (html, limit = 100) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        const text =  div.textContent || div.innerText || '';
        return text.length > limit ? text.substring(0, limit)+'...' : text;
    }

    const handleCategoryClick = (categoryId) =>{
        setSelectedCategory(categoryId);
    }

 
return (
<div className='list-blog lg:py-[100px] sm:py-16 py-10'>
    <div className='container'>
        <div className='flex gap-y-10 max-lg:flex-col'>
            <div className='w-full lg:w-2/3'>

    {
        loading ? ( 
            <div className='flex justify-center items-center h-[500px]'>
                <ClipLoader color='#3498db' size={50} />
            </div>
        ) : (
            <div className='flex flex-col gap-y-10 list'>
            {
                blog.slice(0, 6).map(( item,index ) => {
                    const formattedDate = new Date(item.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });

                    return ( 
<Link className='flex gap-y-5 gap-7 blog-item max-md:flex-col md:items-center' href={'/blog/blog-details/[slug]'}
                as={`/blog/blog-details/${item.post_slug.toLowerCase().replace(/ /g,'-')}`}
                 >
        
                <div className='w-full md:w-1/2'>
                <div className='overflow-hidden w-full rounded-2xl bg-img'>
                    <Image width={5000} height={5000} className='block w-full h-full' src={`${IMAGE_BASE_URL}/${item.image}`} />  
                </div> 
                </div>
        
            <div className='w-full md:w-1/2'>
            <div className='inline-block px-3 py-1 capitalize rounded-full caption2 bg-surface bg-slate-100'>
            {item.category_name}
            </div>
            <div className='mt-2 heading6'>{item.post_title}</div>
            <div className='flex gap-4 items-center mt-2 date'>
                <div className='author caption2 text-secondary'> By <span className='text-onsurface'>Admin</span> 
                </div>
        
                <div className='flex items-center item-date'>
                    <Icon.CalendarBlank weight='bold' />
                    <span className='ml-1 caption2'>{formattedDate}</span> 
                </div> 
            </div>
        
            <div className='pb-4 mt-4 body3 text-secondary'>  {getTextFromHTML(item.long_descp)} </div>
            <div className='font-bold underline read'>Read More</div>
        
            </div>
                
                </Link>
                    )} 
                )
            } 
              </div> 

         )

    }
    


           
            </div>
    

    <div className='w-full lg:w-1/3 lg:pl-[55px]'>
    <div className='search-block rounded-lg bg-surface h-[50px] relative'>
        <input className='pr-12 pl-4 w-full h-full rounded-lg bg-surface bg-slate-100' type="text" placeholder='Search' />
        <Icon.MagnifyingGlass className='absolute right-4 top-1/2 text-xl -translate-y-1/2 cursor-pointer' /> 
    </div>

    <div className='mt-6 cate-block md:mt-10'>
        <div className='heading6'>Blog Category</div> 

        <div className='mt-4 list-nav'>

          <div className={`mt-2 cursor-pointer text-button text-secondary ${selectedCategory === null ? 'font-extrabold': '' }`} 
                onClick={() => handleCategoryClick(null)}>
            All Category
          </div>  

        {
            categories.map((cat)=> (
                <div key={cat.id}  className={`mt-2 cursor-pointer text-button text-secondary ${selectedCategory === cat.id ? 'font-extrabold': '' }`} 
                    onClick={() => handleCategoryClick(cat.id)}>
                    {cat.blog_category}
                </div>           
            ))
        }      
                

        </div>  
    </div>


    <div className='mt-6 recent-post-block md:mt-10'>
        <div className='recent-post-heading heading7'>Recent Post</div>
        <div className='flex flex-col gap-6 mt-4 list-recent-post'>
            {
                blog.slice(0,3).map((item, index) => (
                <Link key={index} className='flex gap-4 items-start cursor-pointer recent-post-item' href={'/blog/blog-details/[slug]'}
                as={`/blog/blog-details/${item.post_slug.toLowerCase().replace(/ /g,'-')}`}>
            <div className='flex-shrink-0 w-20 h-20 rounded item-img'>
                <Image width={5000} height={5000} src={`${IMAGE_BASE_URL}/${item.image}`} className='object-cover w-full h-full'/> 
            </div>

            <div className='w-full item-infor'>
                <div className='flex items-center item-date'>
                <Icon.CalendarBlank weight='bold' />
                <span className='ml-1 caption2'>
                {new Date(item.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</span>  
                </div>
                <div className='mt-1 item-title'>{item.post_title}</div>

            </div>
                
                </Link>

                ))
            }

        </div>

    </div>



    </div> 
        </div> 
    </div>
    
</div>
);

};

export default BlogList;