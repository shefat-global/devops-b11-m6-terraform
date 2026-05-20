'use client';
import Footer from '@/components/Footer/Footer';
import Menu from '@/components/Header/Menu/Menu';
import TopNav from '@/components/Header/TopNav/TopNav';
import Partner from '@/components/Partner/Partner';
import Breadcrumb from '@/components/Section/Breadcrumb';
import React from 'react';
import AboutSection from '../../components/Section/AboutSection';
import Counter from '@/components/Section/Counter';
import serviceData from "@/data/service.json";
import Service from '@/components/Service/Service';
import { useState,useEffect } from 'react';
import Loader from '@/components/Loader/Loader';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';

const AboutPage = () => {

   const [loading, setLoading] = useState(true);
   const [aboutPage, setAboutPage] = useState(true);
   //console.log(aboutPage);

   useEffect(() => {
     const timer = setTimeout(()=> setLoading(false), 1500)
     return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
         const fetchItem = async () => {
               try {
                  const response = await fetch(`${API_BASE_URL}/aboutpage`);
                  const data = await response.json();
                  setAboutPage(data);
               } catch (error) {
                  console.error('Error fetching data',error);
               } finally {
                  setLoading(false);
               }
         };
         fetchItem();
   },[]); 

 

    return (
        <div className='overflow-x-hidden'>
         <header id="header">
            <TopNav />
            <Menu />               
         </header>

         <main className="content">
            {
               loading ? (
                  <div className='flex justify-center items-center h-[500px]'>
                     <Loader />
                  </div>
               ) : (
                  <>
                     <Breadcrumb link="About Us" img="/images/header.webp" title="About Us" desc="A brief history of the company."/>
                     <AboutSection about={aboutPage} />
                     <Counter about={aboutPage} classname='lg:pb-[50px] sm:pb-16 pb-10' />
                     <Service className='pb-10' />
                  </>
               )
            }
           
         </main>

         <Partner className='lg:mt-[100px] sm:mt-16 mt-10' />

         <footer id="footer">
            <Footer />
         </footer>
        </div>
    );
};

export default AboutPage;