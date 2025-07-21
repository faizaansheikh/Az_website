import { bgcolor } from '../utils'
import React from 'react'
import img from '../images/1.1.jpg'
import img2 from '../images/2a.jpg'
import img3 from '../images/2b.jpg'
import img4 from '../images/2c.png'
import img5 from '../images/2d.png'
import Image from 'next/image'
function Divisions() {
    const arr = [

        {
            img: img2,
            title: 'Application',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },

        {
            img: img3,
            title: 'Medical',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },
        {
            img: img4,
            title: 'Education',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },

        {
            img: img5,
            title: 'Scientific',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid voluptatem dolor,soluta voluptates temporibus iste, omnis facere animi assumenda eum voluptatum dolores distinctio harum mollitia ducimus et vero eaque quis?'
        },
        {
            img: img4,
            title: 'Energy',
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
                <div key={i} className="relative flex justify-center items-center w-full my-8 ">
                    {/* Timeline vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-8 z-0" style={{ backgroundColor: bgcolor }} />



                    {i % 2 === 0 ? (
                        <>
                            <div className="group relative w-full h-[340px] border-1 border-black rounded-l-[60px] md:rounded-l-[150px] cursor-pointer overflow-hidden bg-[black] shadow-2xl shadow-black z-20">
                                {/* Background Image */}
                                <Image
                                    src={x.img}
                                    alt="Banner"
                                    className="object-cover w-full h-full md:rounded-l-[130px]"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm md:backdrop-blur-[0px] md:group-hover:backdrop-blur-[6px] transition-all duration-300 ease-in-out md:rounded-l-[130px]" />
                                {/* Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                    <h1 className="text-2xl md:text-5xl font-bold mb-2 transition-all duration-500 md:group-hover:-translate-y-2">
                                        {x.title} <br /> Division
                                    </h1>
                                    <p className="text-[12px] lg:text-[17px] mt-2 text-start md:text-center md:hidden md:px-4 group-hover:block opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                                        {x.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-[300px]" />
                        </>
                    ) : (
                        <>
                            <div className="w-full h-[300px]" />
                            <div className="group relative w-full h-[340px] border-1 border-black rounded-r-[60px] md:rounded-r-[150px] cursor-pointer overflow-hidden bg-[black] shadow-2xl shadow-black z-20">
                                {/* Background Image */}
                                <Image
                                    src={x.img}
                                    alt="Banner"
                                    className="object-cover w-full h-full md:rounded-r-[130px]"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm md:backdrop-blur-[0px] md:group-hover:backdrop-blur-[6px] transition-all duration-300 ease-in-out md:rounded-r-[130px]" />
                                {/* Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                    <h1 className="text-2xl md:text-5xl font-bold mb-2 transition-all duration-500 md:group-hover:-translate-y-2">
                                        {x.title} <br /> Division
                                    </h1>
                                    <p className="text-[12px] lg:text-[17px] mt-2 text-start md:text-center md:hidden md:px-4 group-hover:block opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
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