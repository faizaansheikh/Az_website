'use client'
import React from 'react'
import { Col, Input, Row } from 'antd'
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import MyButton from '../../components/MyButton';
import img from '../../images/contact.png'
import Image from 'next/image';
import { bgcolor } from '@/utils';

const handleSubmit = () => { }
function Contact() {
    return (
        <div className=''>
            <h2 className='text-4xl md:text-5xl text-center mx-52  pt-5 pb-4 mb-20' style={{ borderBottom: `2px solid ${bgcolor}` }}>Contact</h2>
            {/* F4F4F4 */}
            <div className='bg-grey-200 w-[full] h-[auto] flex justify-around items-center flex-wrap'>

                <div className=" relative w-[550px] h-[600px] m-2" >
                    <Image
                        src={img}
                        alt="Banner"
                        fill
                        // width={'100%'}
                        // height={300}
                        className="object-cover p-0  "
                    />

                </div>






                <div className='bg-[#F4F4F4] border-2 rounded-[20px] border-black w-[680px] h-full p-6 shadow-2xl m-2'>
                    <h2 className='text-3xl'>We'd love to help</h2>
                    <p>Reach Out and we'll get in touch within 24 hours</p>
                    <form action="" onSubmit={handleSubmit}>
                        <Row gutter={12} className='mt-4'>
                            <Col span={12} xs={24} md={12} className='mb-4'>
                                <Input size="large" placeholder="Name" prefix={<UserOutlined />} required />
                            </Col>
                            <Col span={12} xs={24} md={12} className='mb-4 md:mb-0'>
                                <Input size="large" placeholder="Email" prefix={<MailOutlined />} required />
                            </Col>

                            <Col span={12} xs={24} md={12} className='mb-4 md:mb-0'>
                                <Input size="large" placeholder="Phone" prefix={<PhoneOutlined />} required />
                            </Col>
                            <Col span={12} xs={24} md={12} className='mb-4 md:mb-0'>
                                <Input size="large" placeholder="Why are you contacting us" prefix={<UserOutlined />} required />
                            </Col>
                            <Col span={24} className='mt-4'>
                                <TextArea rows={6} size="large" placeholder="Leave Us a message" maxLength={12} required />
                            </Col>
                            <Col span={24} className='mt-4'>

                                <MyButton title="Send Message" className='text-white text-center text-[16px]' type='submit' />
                            </Col>
                        </Row>
                    </form>
                </div>


            </div>
        </div >
    )
}

export default Contact