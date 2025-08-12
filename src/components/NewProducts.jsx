
'use client';
import Image from 'next/image'
import React from 'react'
import { EditOutlined, EllipsisOutlined, EyeOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Tooltip } from 'antd';
import { bgcolor } from '@/utils';
import Carousel from 'react-multi-carousel';
// import { bgcolor } from ''';

function NewProducts() {
    const products = [
        {
            img: 'https://orbisbv.com/wp-content/uploads/2021/05/ColdBlock2.png',
            url: 'https://www.adsystems-sa.com/',
            title: 'AD Systems',
            desc: 'AD Systems specializes in the design, manufacturing, selling and servicing of unique test equipment for the evaluation of physical properties'
        },
        {
            img: 'https://orbisbv.com/wp-content/uploads/2021/05/CFPP-Sep2.png',
            url: 'https://www.milestonesrl.com/index.php/',
            title: 'Milestone S.r.l. ',
            desc: 'Milestone Helping Chemists Milestone has been active since 1988 in the field of advanced microwave sample preparation.'
        },
        {
            img: 'https://orbisbv.com/wp-content/uploads/2021/05/CPPP-Sep2.png',
            url: 'https://ech.de/index.php/en/company',
            title: 'ECH',
            desc: 'Assembling and marketing the scientific devices for laboratory analysis, factory process control and on-site mobile analysis'
        },
        {
            img: 'https://orbisbv.com/wp-content/uploads/Micro-1.png',
            url: 'https://www.stanhope-seta.co.uk/',
            title: ' Stanhope-Seta',
            desc: 'Stanhope-Seta design and manufacture quality control instruments used to measure the physical characteristics that determine product quality and consistency.'
        },


        {
            img: 'https://orbisbv.com/wp-content/uploads/2020/08/STARDist_00002-300x300.png',
            url: 'https://linseis.com/en/our-products/',
            title: 'Linseis Thermal Analysis ',
            desc: 'More than 60 years ago LINSEIS started the production of thermal analysis recorders and instruments'
        },
        {
            img: 'https://orbisbv.com/wp-content/uploads/2021/01/AirProbe-300x300.png',
            url: 'https://www.grscientific.com/',
            title: 'GR Scientific',
            desc: 'The very successful Aquamax KF takes its new place alongside the ECH AQUA 40.00 Karl Fischer product line'
        },
        {
            img: 'https://www.milestonesrl.com/templates/yootheme/cache/98/pyro-high-throughput-98233fef.png',
            url: 'http://teinstruments.com/',
            title: 'Trace Elemental Instruments',
            desc: 'Trace Elemental Instruments B.V., designs, develops, manufactures, markets, sells and supports a range of laboratory equipment '
        },
        {
            img: 'https://www.milestonesrl.com/templates/yootheme/cache/63/duopur-6380111a.png',
            url: 'http://labtechsrl.com/#products',
            title: 'Lab Tech Srl.',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },


    ]
    return (
        <div className='mx-[30px] md:mx-[100px] lg:mx-[200px]'>
            <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-20' style={{ borderBottom: `2px solid ${bgcolor}` }}>Our Products</h2>
            {/* parent  */}
            {/* <div className='  w-full h-[auto] flex justify-center flex-wrap gap-8'> */}
            <div className='  '>
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
                            items: 3,
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
                    {
                        products.map((x, i) => (
                            <div key={i} style={{ border: '2px solid grey', borderRadius: '10px' ,margin:'0px 10px 50px 10px'}}>
                                <Card

                                    style={{  height: 380, marginBottom: '30px' }}
                                    className='shadow-2xl my-4'
                                    cover={
                                        <img
                                            alt="example"
                                            src={x.img}
                                            className='p-4 h-[190px] shadow'
                                        />
                                    }
                                    actions={[
                                        <Tooltip title='Request Quotation'>
                                            <a href={x.url} target='_black'>

                                                <MessageOutlined key="setting" classID='' style={{ color: bgcolor, fontSize: '17px', padding: '0px 0' }} />
                                            </a>
                                        </Tooltip>,
                                        <Tooltip title='View'>
                                            <a href={x.url} target='_black'>
                                                <EyeOutlined key="edit" classID='' style={{ color: bgcolor, fontSize: '18px', padding: '0px 0' }} />
                                            </a>
                                        </Tooltip>

                                    ]}
                                >
                                    <h3 className='text-xl font-[500]'>{x.title}</h3>
                                    <p className='text-sm mt-2 flex-grow overflow-hidden h-[80px]'>{x.desc}</p>
                                    <div className='w-full h-[1px] bg-[lightgrey] mt-2'></div>

                                </Card>
                            </div>

                        ))
                    }
                </Carousel>



            </div>
        </div>
    )
}

export default NewProducts