import { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import MyButton from "../../components/MyButton";
import './home.css'
const Home = () => {
  const images = [
    "https://az-scientificsolutions.com/wp-content/uploads/2018/05/banner.jpg",
    "https://az-scientificsolutions.com/wp-content/uploads/2018/05/banner2.jpg",
    "https://az-scientificsolutions.com/wp-content/uploads/2018/05/banner3.jpg",
  ];

  const texts = [
    "We provide Scientific Solutions !",
    "Innovative Research Services",
    "Trusted Industrial Expertise",
  ];



  
  console.log('dsf');
  
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden section_top">
      {/* Background Image */}
      {/* <img
        src={'https://az-scientificsolutions.com/wp-content/uploads/2018/05/banner.jpg'}
        alt="Banner"
        className="absolute top-0 left-0 bottom-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      /> */}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start md:items-center justify-center text-white h-full px-4">
       
          {/* <div className="container text-2xl md:text-6xl font-bold mb-4 text-nowrap min-h-[60px]">
              <div>
                      <p className="text">We provide Scientific Solutions</p>
              </div>
          </div> */}
          <div className="container ">
             <h1 className="text text-2xl md:text-6xl font-bold mb-4 text-nowrap min-h-[60px]">We provide Scientific Solutions</h1>
          </div>
      
          {/* <span className="border-r-2 border-white animate-pulse ml-1" /> */}
     
        <p className="mb-6 text-md md:text-lg md:text-xl max-w-2xl">
          We provide reliable scientific solutions across various industries
        </p>
        <a href="#about">
          <MyButton title="Explore More" />
        </a>
      </div>
    </div>
  );
};

export default Home;
