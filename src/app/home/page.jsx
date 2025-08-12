'use client'
import { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import MyButton from "../../components/MyButton";
import './home.css'
import { Carousel } from "antd";
import img1 from '../../images/1.jpg'
import img2 from '../../images/h2.jpg'
import img3 from '../../images/h3.jpg'
// import img4 from '../../images/h4.jpg'
import img4 from '../../images/industrial.jpg'

import Image from "next/image";
const Home = () => {
  const images = [
    {
      img: img1,
      // title: 'Scientific Solutions'
    },
    {
      img: img2,
      title: 'Innovative Research Services'
    },

    {
      img: img4,
      title: 'Trusted Industrial Expertise'
    }


  ];

  const texts = [
    "We provide Scientific Solutions !",
    "Innovative Research Services",
    "Trusted Industrial Expertise",
  ];





  const contentStyle = {
    margin: 0,
    height: '90vh',
    // color: '#fff',
    // lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
  };
  return (
    // <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden section_top">

    //   {/* Background Image */}
    // {/* <img
    //   src={'https://az-scientificsolutions.com/wp-content/uploads/2018/05/banner.jpg'}
    //   alt="Banner"
    //   className="absolute top-0 left-0 bottom-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
    // /> */}

    //   {/* Overlay */}
    //   <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

    //   <Navbar />

    //   {/* Content */}
    //   <div className="relative z-10 flex flex-col items-start md:items-center justify-center text-white h-full px-4">

    //       {/* <div className="container text-2xl md:text-6xl font-bold mb-4 text-nowrap min-h-[60px]">
    //           <div>
    //                   <p className="text">We provide Scientific Solutions</p>
    //           </div>
    //       </div> */}
    //       <div className="container ">
    //          <h1 className="text text-2xl md:text-6xl font-bold mb-4 text-nowrap min-h-[60px]">We provide Scientific Solutions</h1>
    //       </div>

    //       {/* <span className="border-r-2 border-white animate-pulse ml-1" /> */}

    // <p className="mb-6 text-md md:text-lg md:text-xl max-w-2xl">
    //   We provide reliable scientific solutions across various industries
    // </p>
    // <a href="#about">
    //   <MyButton title="Explore More" />
    // </a>
    //   </div>
    // </div>
    // className=" w-full h-[80vh] md:h-[90vh] overflow-hidden section_top"
    <div>
      <div className="z-60">
        <Navbar />
      </div>
      {/* autoplay */}
      <Carousel autoplaySpeed={2000} effect="scrollx" dots draggable arrows   >
        {
          images.map((x, i) => (
            <div key={i} className="w-full h-[80vh] relative mt-8" >
              {/* Background image */}

              <img
                src={typeof x.img === 'string' ? x.img : x.img.src}
                alt="Banner"
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                data-aos='flip-up'
              />

              {/* Optional overlay for darkening the image */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/0 z-10"></div>

              {/* Content over the image */}
              <div className="absolute top-0 left-0  w-full h-full flex flex-col justify-center items-center text-white px-4 z-20" data-aos='fade-right'>
                {i > 0 && <div>
                  <p className="text-2xl md:text-4xl py-4">We provide</p>
                </div>}

                <div className=" ">
                  <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-wrap min-h-[60px] text-center">{x.title}</h1>
                </div>
                {/* <a href="#about" className="mt-2 md:mt-6">
                  <MyButton title="Explore More" className='text-white text-[17px]' />
                </a> */}
              </div>
            </div>
          ))
        }
      </Carousel >
    </div >

  );
};

export default Home;
