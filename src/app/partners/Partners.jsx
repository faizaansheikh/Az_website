import React from 'react'
import img from '../../images/home.jpg'
import Image from 'next/image';
import { bgcolor } from '../../utils';
function Partners() {
    const partners = [
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/ad-system.png',
            url: 'https://www.adsystems-sa.com/'
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/milestone.png',
            url: 'https://www.milestonesrl.com/index.php/',
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/ech.png',
            url: 'https://ech.de/index.php/en/company'
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
            url: 'https://linseis.com/en/our-products/'
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
            url: 'http://labtechsrl.com/#products'
        },

        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/9.png',
            url: 'https://orbisbv.com/#special',
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/omnitec2.png',
            url: 'https://omnitek.nl/'
        },

    ]
    return (
        <div className=''>
            <h2 className='text-4xl md:text-6xl mb-4 text-center '>
                Our Partners
            </h2>
            <div className='mt-12 flex justify-center items-center flex-wrap gap-10 md:mx-[200px]'>
                {
                    partners.map((x, i) => (
                        <div key={i} className='relative w-[320px]  h-[150px] border-2 border-[grey] rounded-[10px] transition-transform duration-300 hover:scale-110 shadow-xl'>
                            <a href={x.url} target='_blank'>
                                <img
                                    src={x.img}
                                    alt="Banner"
                                    className="shadow-2xl p-2"
                                    style={{objectFit:'contain',width:'100%',height:'100%',position:'absolute',top:0,left:0}}
                                    // style="object-fit: cover; width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
                                />

                            </a>
                        </div>
                    ))
                }


            </div>

        </div>
    )
}

export default Partners