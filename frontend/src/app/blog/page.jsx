import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Header/Menu/Menu';
import TopNav from '@/components/Header/TopNav/TopNav';
import Partner from '@/components/Partner/Partner';
import Breadcrumb from '@/components/Section/Breadcrumb';
import React from 'react';
import Image from 'next/image';
import BlogList from '@/components/Section/BlogList';
// import blogData from '@/data/blog.json'

const BlogPage = () => {
    return (
        <div className='overflow-x-hidden'>
        <header id="header">
           <TopNav />
           <Menu />               
        </header>

        <main className="content">
           <Breadcrumb link="Our Blog" img="/images/header.webp" title="Our Blog" desc="New blog updates"/>   
           <BlogList />
        </main>

        <Partner className='lg:mt-[100px] sm:mt-16 mt-10' />

        <footer id="footer">
           <Footer />
        </footer>
       </div>
    );
};

export default BlogPage;