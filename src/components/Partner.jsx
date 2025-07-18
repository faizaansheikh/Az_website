import React from 'react';
import './nav.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bgcolor } from '@/utils';

const partners = [
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/ad-system.png',
        url: 'https://www.adsystems-sa.com/',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/milestone.png',
        url: 'https://www.milestonesrl.com/index.php/',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/ech.png',
        url: 'https://ech.de/index.php/en/company',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/5.png',
        url: 'https://www.stanhope-seta.co.uk/',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/6.png',
        url: 'https://www.stanhope-seta.co.uk/',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/logo12.png',
        url: 'https://linseis.com/en/our-products/',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/grsentific1.png',
        url: 'https://www.grscientific.com/',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/trace.png',
        url: 'http://teinstruments.com/',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/11.png',
        url: 'http://labtechsrl.com/#products',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/9.png',
        url: 'https://orbisbv.com/#special',
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/omnitec2.png',
        url: 'https://omnitek.nl/',
    },
];

const Partner = () => {
    return (
        <div className='mx-[30px] md:mx-[100px] lg:mx-[200px]'>
            <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-20' style={{ borderBottom: `2px solid ${bgcolor}` }}>Our Partners</h2>
            <Carousel
                arrows
                autoPlaySpeed={3000}
                infinite
                keyBoardControl
                pauseOnHover
                showDots
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 800 },
                        items: 4,
                        partialVisibilityGutter: 40
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
                {partners.map((partner, index) => (
                    <div key={index} className='border-1 hover:border-1 border-[#071E4C] transition-transform duration-300 hover:scale-90 hover:border-[black] h-[160px] flex items-center justify-center cursor-pointer rounded-[10px] mx-2 shadow-xl hover:shadow-2xl' >
                        <a  href={partner.url} target="_blank" rel="noopener noreferrer" >
                            <img
                                src={partner.img}
                                alt={`Partner ${index + 1}`}
                                className=''
                                style={{ width: '100%', height: 'auto', padding: '5px', objectFit: 'contain' }}
                            />
                        </a>
                    </div>

                ))}
            </Carousel>
        </div>
    );
};

export default Partner;
