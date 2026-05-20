'use client'
import React from 'react'
import BlogItem from './Item/BlogItem'
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect, useState } from 'react';


function Blog() {

    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
   // console.log(blog)

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/allblog`);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching data',error);
            } finally {
                setLoading(false);
            }
        };
        fetchItem();
    },[]);



         
  return (
    <section className='list-blog three-col lg:mt-[100px] sm:mt-16 mt-10 pb-[100px]'>
        <div className='container'>
            <h3 className='text-center heading3'>Latest Blog</h3>
            <div className='grid gap-8 mt-6 list lg:grid-cols-3 sm:grid-cols-2 md:mt-10'>
                {
                    blog.slice(0,3).map((item, index) => (
                        <BlogItem data={item} key={index} />
                    ))
                }

            </div>
        </div>

    </section>
  )
}

export default Blog