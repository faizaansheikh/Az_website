import { Col, Row } from 'antd'
import GlassEffect from '../../components/GlassEffect'
import { bgcolor } from '../../utils'
import React from 'react'
import Image from 'next/image'
import img from '../../images/cover.png'
function KeyClients() {
    const items2 = [
        'Pharmaceutical',
        'Oil & Gas Industry ',
        'Environmental Laboratories ',
        'Power and Utility ',
        'Universities and Research Labs ',
        'Petrochemicals ',
        'Food Safety & Health industries ',
        'Biotechnology',
        'Industrial Labs',
        'Water and Wastewater',
        'Cement',
        'Nano Technology',
        'Chemicals & Polymers',
        'Governmental Labs',
        'Public Health & Medical Sciences',
        'Forensic Toxicology',
        'Agriculture',
        'Flavors / Fragrances',
        'Clinical Toxicology Research',

    ]
    return (
       

         <div className='w-full h-[auto]  z-20 flex mb-10 py-12'>
                <Row className='flex justify-center items-center'>
                    <Col
                        md={24} lg={16} xl={14}
                    >
                        <h2 className='text-4xl md:text-5xl text-center lg:text-left py-4'>Key clients & Market <br /> coverage</h2>
                        <div className='py-6 flex  flex-wrap justify-start items-center'>
                            {
                                items2.map((x, i) => (
                                    <GlassEffect key={i} className={'text-wrap md:text-nowrap m-2 w-auto '}>
                                        <div>{x}</div>
                                    </GlassEffect>
                                ))
                            }
                        </div>
                    </Col>
                    <Col
                        md={24} lg={8} xl={10}
                        style={{display:'flex',justifyContent:'center',alignItems:'center'}}
                        className=" w-full h-[500px] overflow-hidden md:mt-[80px] lg:mt-[0px] rounded-[30px] flex justify-center items-center"
                    >
                        <Image
                            src={img}
                            alt="Banner"
                            // fill
                            className="object-cover md:object-cover w-[70%]"
                        />
                    </Col>
                </Row>
            </div>
    )
}

export default KeyClients