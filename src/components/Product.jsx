import { bgcolor } from '@/utils'
import React from 'react'
import img1 from '../images/p1.jpg'
import Image from 'next/image'
import MyButton from './MyButton'
function Product() {
    const arr = [
        {
            img: img1,
            url: 'https://www.adsystems-sa.com/',
            title: 'AD Systems',
            desc: 'AD Systems specializes in the design, manufacturing, selling and servicing of unique test equipment for the evaluation of physical properties'
        },
        {
            img: img1,
            url: 'https://www.milestonesrl.com/index.php/',
            title: 'Milestone S.r.l. ',
            desc: 'Milestone Helping Chemists Milestone has been active since 1988 in the field of advanced microwave sample preparation.'
        },
        {
            img: img1,
            url: 'https://ech.de/index.php/en/company',
            title: 'ECH',
            desc: 'Assembling and marketing the scientific devices for laboratory analysis, factory process control and on-site mobile analysis'
        },
        {
            img: img1,
            url: 'https://www.stanhope-seta.co.uk/',
            title: ' Stanhope-Seta',
            desc: 'Stanhope-Seta design and manufacture quality control instruments used to measure the physical characteristics that determine product quality and consistency.'
        },


        {
            img: img1,
            url: 'https://linseis.com/en/our-products/',
            title: 'Linseis Thermal Analysis ',
            desc: 'More than 60 years ago LINSEIS started the production of thermal analysis recorders and instruments'
        },
        {
            img: img1,
            url: 'https://www.grscientific.com/',
            title: 'GR Scientific',
            desc: 'The very successful Aquamax KF takes its new place alongside the ECH AQUA 40.00 Karl Fischer product line'
        },
        {
            img: img1,
            url: 'http://teinstruments.com/',
            title: 'Trace Elemental Instruments',
            desc: 'Trace Elemental Instruments B.V., designs, develops, manufactures, markets, sells and supports a range of laboratory equipment '
        },
        {
            img: img1,
            url: 'http://labtechsrl.com/#products',
            title: 'Lab Tech Srl.',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },

        {
            img: img1,
            url: 'https://orbisbv.com/#special',
            title: 'ORBIS BV',
            desc: 'Develop high end laboratory equipment that saves worldwide customers time and money while producing the best achievable test results'
        },
        {
            img: img1,
            url: 'https://omnitek.nl/',
            title: 'Omni Tech',
            desc: 'OmniTek provides fully automatic kinematic viscosity instrumentation compliant with ASTM 445/446, ASTM D7279 (Houillon)'
        },

    ]
    return (

        <div className='mx-[30px] md:mx-[100px] lg:mx-[200px]'>
            <h2 className='text-4xl md:text-5xl text-center  pt-5 pb-4 mb-20' style={{ borderBottom: `2px solid ${bgcolor}` }}>Our Products</h2>

            <div className='flex justify-center items-center gap-10 flex-wrap'>

                {
                    arr.map((x, i) => (
                        <div
                            data-aos={i % 2 === 0 ? 'flip-left' : 'flip-right'}
                            key={i}
                            className="w-[330px] h-[400px]"
                        >
                            <div className="w-full h-full border border-black flex flex-col justify-between group overflow-hidden cursor-pointer shadow-2xl shadow-black rotate-0 hover:rotate-5 transition-all duration-700">
                                <div className="w-full h-[350px] relative">
                                    <Image
                                        src={x.img}
                                        alt="Banner"
                                        className="object-cover w-full h-full rounded-r-[130px] transition-all duration-500"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-around pb-2">
                                        <a href={x.url} target="_blank" rel="noopener noreferrer">
                                            <MyButton title="View Details" className="text-white" />
                                        </a>
                                        <MyButton title="Request a quotation" className="text-white" />
                                    </div>
                                </div>

                                <div
                                    className="w-full h-[50px] bg-black text-white text-center flex items-center justify-center text-xl"
                                    style={{ backgroundColor: bgcolor }}
                                >
                                    {x.title}
                                </div>
                            </div>
                        </div>


                    ))
                }
            </div>

        </div>
    )
}

export default Product