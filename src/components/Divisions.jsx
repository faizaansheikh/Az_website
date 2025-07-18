import { bgcolor } from '../utils'
import React from 'react'
import img from '../images/1.1.jpg'
import Image from 'next/image'
function Divisions() {
    const arr = [
        {
            img: img,
            title: 'Medical',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },
        {
            img: img,
            title: 'Education',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },
        {
            img: img,
            title: 'Scientific',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },
        {
            img: img,
            title: 'Energy',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },
         {
            img: img,
            title: 'Application',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },
         {
            img: img,
            title: 'Project',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },

    ]
    return (
        <div className='lg:mx-[200px] '>
            <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-6' style={{ borderBottom: `2px solid ${bgcolor}` }}>Divisions</h2>
            {arr.map((x, i) => (
                <div key={i} className='flex justify-center items-center'>
                    {i % 2 === 0 ? (
                        <>
                            <div className="group relative w-full h-[300px] border-2 border-black rounded-l-[130px] cursor-pointer overflow-hidden shadow-xl">
                                {/* Background Image */}
                                <Image
                                    src={img}
                                    alt="Banner"
                                    className="object-cover w-full h-full rounded-l-[130px] "
                                />

                                {/* Blur Overlay (always blurred on mobile, hover-blurred on desktop) */}
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm md:backdrop-blur-[0px] md:group-hover:backdrop-blur-[6px] transition-all duration-300 ease-in-out rounded-l-[130px]" />

                                {/* Text Wrapper */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                    {/* Title */}
                                    <h1 className="text-4xl md:text-5xl font-bold mb-2 transition-all duration-500 md:group-hover:-translate-y-6">
                                        {x.title} Division
                                    </h1>

                                    {/* Description */}
                                    <p
                                        className="
                                            text-[12px] md:text-xl mt-2
                                            md:hidden
                                            group-hover:block
                                            opacity-100 translate-y-0
                                            md:opacity-0 md:translate-y-4
                                            md:group-hover:opacity-100 md:group-hover:translate-y-0
                                            transition-all duration-500"
                                    >
                                        {x.desc}
                                    </p>
                                </div>
                            </div>





                            <div className='w-full h-[300px]'> </div>
                        </>
                    ) : (
                        <>
                            <div className='w-full h-[300px]'> </div>
                            <div className="group relative w-full h-[300px] border-2 border-black rounded-r-[130px] cursor-pointer overflow-hidden">
                                {/* Background Image */}
                                <Image
                                    src={img}
                                    alt="Banner"
                                    className="object-cover w-full h-full rounded-r-[130px]"
                                />

                                {/* Blur Overlay (always blurred on mobile, hover-blurred on desktop) */}
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm md:backdrop-blur-[0px] md:group-hover:backdrop-blur-[6px] transition-all duration-300 ease-in-out rounded-r-[130px]" />

                                {/* Text Wrapper */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                    {/* Title */}
                                    <h1 className="text-4xl md:text-5xl font-bold mb-2 transition-all duration-500 md:group-hover:-translate-y-6">
                                        {x.title} Division
                                    </h1>

                                    {/* Description */}
                                    <p
                                        className="
                                            text-[12px] md:text-xl mt-2
                                            md:hidden
                                            group-hover:block
                                            opacity-100 translate-y-0
                                            md:opacity-0 md:translate-y-4
                                            md:group-hover:opacity-100 md:group-hover:translate-y-0
                                            transition-all duration-500"
                                    >
                                        {x.desc}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            ))}



        </div>
    )
}


export default Divisions