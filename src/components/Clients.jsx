'use client'
import { bgcolor } from '@/utils'
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img from '../images/home.jpg'
import Image from 'next/image';
function Clients() {
    const items = [
        { title: 'Mobile Development' },
        { title: 'Artificial Intelligence' },
        { title: 'Blockchain Development' },
        { title: 'Web Development' },

         { title: 'Mobile Development' },
        { title: 'Artificial Intelligence' },
        { title: 'Blockchain Development' },
        { title: 'Web Development' },
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
            <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-6' style={{ borderBottom: `2px solid ${bgcolor}` }}>Our Clients</h2>


            <div className="relative w-full h-[600px] overflow-hidden bg-black">
                <Image
                    src={img}
                    alt="Banner"
                    className="object-cover w-full h-full absolute p-1"
                />
              
                <div className="absolute inset-0 flex">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex-1 border-r border-white flex items-end justify-center transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-40'
                                }`}
                        >
                            <div className="text-white text-center mb-10 font-semibold text-lg">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/40 p-2 rounded-full"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/40 p-2 rounded-full"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}

export default Clients