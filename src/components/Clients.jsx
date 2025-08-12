'use client'
import { bgcolor } from '@/utils'
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img from '../images/home.jpg'
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import GlassEffect from './GlassEffect';
function Clients() {
    const items = [
        { title: 'Pharmaceutical ' },
        { title: 'Oil & Gas Industry ' },
        { title: 'Environmental Laboratories ' },
        { title: 'Power and Utility ' },
        { title: 'Universities and Research Labs' },
        { title: 'Petrochemicals ' },
        { title: 'Food Safety & Health industries ' },
        { title: 'Metals, Materials and Mining ' },
        { title: 'Biotechnology  ' },
        { title: 'Industrial Labs' },


        { title: 'Water and Wastewater ' },
        { title: 'Cement ' },
        { title: 'Nano Technology' },
        { title: 'Chemicals & Polymers' },
        { title: 'Governmental Labs' },
        { title: 'Public Health & Medical Sciences ' },
        { title: 'Forensic Toxicology ' },
        { title: 'Agriculture ' },
        { title: 'Flavors / Fragrances  ' },
        { title: 'Clinical Toxicology Research' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };
    console.log('load');

    return (
        <div className='lg:mx-[200px] '>
            <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-6' >Our Customers</h2>
            <p className='text-center text-md px-4 md:mx-0 md:text-xl pb-6 mb-6' style={{ borderBottom: `2px solid ${bgcolor}` }}>
                We have business partnership with a number of premier manufacturers and suppliers of scientific instrumentation around the globe.
                We are fully capable of meeting the challenges of providing scientific solutions to laboratories with latest technology, instrumentation
                and services in the technical, medical and industrial fields.
            </p>
            <Carousel
                arrows
                autoPlaySpeed={3000}
                infinite
                keyBoardControl
                pauseOnHover
                showDots
                // renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 800 },
                        items: 5,
                        partialVisibilityGutter: 0
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 300 },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                swipeable
            >
                {items.map((x, index) => (
                    <div
                        data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                        key={index}
                        className="mx-2 mb-10"
                    >
                        <div className="text-xl 
                        border border-[#071E4C] 
                        transition-transform duration-500 
                        hover:scale-90 hover:border-black hover:rotate-3
                        h-[120px] 
                        flex items-center justify-center 
                        cursor-pointer 
                        rounded-[10px] 
                        shadow-xl shadow-[grey] hover:shadow-2xl hover:bg-[white]/90
                        text-wrap
                        px-2
                        text-center
                        text-black
                        bg-[white]/80
                        mt-4
                        backdrop-blur-xl
                        
                        "
                        // style={{backgroundColor:bgcolor}}
                        >
                            {x.title}
                        </div>

                    </div>


                ))}
            </Carousel>

        </div>
    )
}

export default Clients