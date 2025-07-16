import GlassEffect from '../../components/GlassEffect'
import React from 'react'
import img from '../../images/3.jpg'
import Image from 'next/image';
import { Col, Row } from 'antd';
import { bgcolor } from '../../utils';
function Expertise() {
    console.log('img', img);

    const items = [
        'Turnkey Lab solutions -Material Testing for Polymers, Plastics & Rubber',
        'Measuring Instruments',
        'Nano Technology',
        'General Lab Instruments, Apparatus, chemicals, Lab & Glassware',
        'Industrial Technology , Pilot plants & reactors',
        'Oil & Gas Petroleum Analyzers & Instruments',
        'Analytical & Life Sciences Technology',
        'Technical Training Instruments',
        'Laboratory Furniture, Project Management, Design & Consultancy',
    ]
     
    return (
        <>
            <div className='w-full h-[auto]  z-20 flex mb-0 py-12'>
                <Row className='flex justify-center items-center'>
                    <Col
                        md={24} lg={16} xl={14}
                    >
                        <h2 className='text-4xl md:text-5xl text-center lg:text-left py-4'>Our Areas Of <br /> Expertise</h2>
                        <div className='py-6 flex  flex-wrap justify-start items-center'>
                            {
                                items.map((x, i) => (
                                    <GlassEffect key={i} className={'text-wrap md:text-nowrap m-2 w-auto '}>
                                        <div>{x}</div>
                                    </GlassEffect>
                                ))
                            }
                        </div>
                    </Col>
                    <Col
                        md={24} lg={8} xl={10}
                        className="relative w-full h-[500px] overflow-hidden md:mt-[80px] lg:mt-[0px] rounded-[30px]"
                    >
                        <Image
                            src={img}
                            alt="Banner"
                            fill
                            className="object-cover md:object-cover"
                        />
                    </Col>
                </Row>
            </div>

           
        </>

    )
}

export default Expertise