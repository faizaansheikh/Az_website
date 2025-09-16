import React from 'react'
import { Card } from 'antd'
import Image from 'next/image';
import { bgcolor } from '../../utils';
function Management() {
    const management = [
        {
            title: 'Mr. Muhammad Zeeshan Uddin',
            deignation: 'Director marketing and Operations',
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/zeshan-192x192.png',
            description: 'Served for 19 years in various organizations (trading and service provider) as a Branch Manager in one of the leading companies of Pakistan, Area Manager sales and Turn Key Project Manager in Saudi Arabia. Specialized in business development, technical sales and marketing for high tech QA/QC and research instrumentation.'
        },
        {
            title: 'Mr. Syed Rizwan Ali',
            deignation: 'Director Technical Sales and Services',
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/rizwan-192x192.png',
            description: 'Served for 10 years in various organizations,(food, petrochemicals and pharmaceutical industries) as a Project Manager , Q.A /Q.C Manager in Saudia Arabia, Assistant Manager Q.A & development in Pakistan.'
        },

        {
            title: 'Mr. Muhammad Sharjeel Uddin ',
            deignation: 'Director Admin & Finance',
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/Sharjeel-192x192.png',
            description: 'Served for 13 years in various organizations, (Real State business, Construction & Service Providing agencies) as a Director Finance & Operations, Project Manager , Site Supervisor, Purchasing Officer. in Pakistan.'
        },
        
    ]
    return (
        <>
            <h2 className='text-4xl md:text-5xl text-center py-4 mb-4'>Our Management Team</h2>
            <div className='flex justify-center flex-row items-center gap-8 flex-wrap '>
                {
                    management.map((x, i) => (
                        <div key={i} className='w-[300px] md:w-[500px] h-[200px] flex border border-gray-600                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ' >
                            <div className='relative overflow-hidden w-[130px] md:w-[170px] h-full'>
                                <Image
                                    src={x.img || '/fallback.jpg'}
                                    alt="Banner"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div  className='w-[120px] md:w-[330px] h-full' style={{backgroundColor:bgcolor}}>
                                <h2 style={{color:'white'}} className="text-xl text-start text-white mt-4 pl-4">{x.title}</h2>
                                <p className="text-sm text-start text-white mt-0 pl-4">{`(${x.deignation})`}</p>
                                <p className="text-xs text-start text-white mt-2 px-4">
                                    {x.description}
                                </p>
                            </div>
                        </div>
                        // <div
                        //     key={i}
                        //     className="w-[300px] h-[300px] flex-col border border-black flex justify-center items-center bg-[#F9F9F9] hover:shadow-2xl rounded-[10px] cursor-pointer"
                        // >
                        //     <div
                        //         className="relative w-[200px] h-[200px] rounded-full overflow-hidden flex justify-center items-center border border-gray-600 bg-white/70 backdrop-blur-xl "
                        //     >
                        // <Image
                        //     src={x.img || '/fallback.jpg'}
                        //     alt="Banner"
                        //     fill
                        //     className="object-cover"
                        // />
                        //     </div>
                        //     <h2 className="text-2xl text-center text-white mt-4">{x.title}</h2>
                        // </div>


                        // <Card
                        //     key={i}
                        //     hoverable
                        //     style={{ width: 300, height:'430px',border: '1px solid black',padding:'30px' }}
                        //     cover={<Image
                        //         src={x.img || ''}
                        //         alt="Banner"
                        //         // fill
                        //         width={100}
                        //         height={100}
                        //         className="  "
                        //     />}
                        // >
                        //     <h2 className='text-2xl'>{x.title}</h2>
                        //     <p className='text-lg'>{x.deignation}</p>
                        // </Card>
                    ))
                }


            </div>
        </>
    )
}

export default Management;
