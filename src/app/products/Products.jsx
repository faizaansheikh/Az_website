
import Image from 'next/image'
import React from 'react'
import { EditOutlined, EllipsisOutlined, EyeOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Tooltip } from 'antd';
import { BsChatLeftQuoteFill } from "react-icons/bs";
import { bgcolor } from '../../utils';
const { Meta } = Card;
function Products() {
    const products = [
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/ad-system.png',
            url: 'https://www.adsystems-sa.com/',
            title: 'AD Systems',
            desc: 'AD Systems specializes in the design, manufacturing, selling and servicing of unique test equipment for the evaluation of physical properties'
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/milestone.png',
            url: 'https://www.milestonesrl.com/index.php/',
            title: 'Milestone S.r.l. ',
            desc: 'Milestone Helping Chemists Milestone has been active since 1988 in the field of advanced microwave sample preparation.'
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/ech.png',
            url: 'https://ech.de/index.php/en/company',
            title: 'ECH',
            desc: 'Assembling and marketing the scientific devices for laboratory analysis, factory process control and on-site mobile analysis'
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/5.png',
            url: 'https://www.stanhope-seta.co.uk/',
            title: ' Stanhope-Seta',
            desc: 'Stanhope-Seta design and manufacture quality control instruments used to measure the physical characteristics that determine product quality and consistency.'
        },


        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/logo12.png',
            url: 'https://linseis.com/en/our-products/',
            title: 'Linseis Thermal Analysis ',
            desc: 'More than 60 years ago LINSEIS started the production of thermal analysis recorders and instruments'
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/grsentific1.png',
            url: 'https://www.grscientific.com/',
            title: 'GR Scientific',
            desc: 'The very successful Aquamax KF takes its new place alongside the ECH AQUA 40.00 Karl Fischer product line'
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/trace.png',
            url: 'http://teinstruments.com/',
            title: 'Trace Elemental Instruments',
            desc: 'Trace Elemental Instruments B.V., designs, develops, manufactures, markets, sells and supports a range of laboratory equipment '
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/11.png',
            url: 'http://labtechsrl.com/#products',
            title: 'Lab Tech Srl.',
            desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
        },

        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/9.png',
            url: 'https://orbisbv.com/#special',
            title: 'ORBIS BV',
            desc: 'Develop high end laboratory equipment that saves worldwide customers time and money while producing the best achievable test results'
        },
        {
            img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/omnitec2.png',
            url: 'https://omnitek.nl/',
            title: 'Omni Tech',
            desc: 'OmniTek provides fully automatic kinematic viscosity instrumentation compliant with ASTM 445/446, ASTM D7279 (Houillon)'
        },

    ]
    return (
        <div className='bg-[lightgrey] p-4'>
            <h2 className='text-4xl md:text-6xl mb-12 mt-8 text-center '>
                Our Products
            </h2>
            {/* parent  */}
            <div className='  w-full h-[auto] flex justify-center flex-wrap gap-10  '>
                {
                    products.map((x, i) => (
                        <Card
                            key={i}
                            style={{ width: 330, height: 380, border: '3px solid grey' }}
                            cover={
                                <img
                                    alt="example"
                                    src={x.img}
                                    className='p-4 h-[150px] '
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
                            <div className='w-full h-[1px] bg-[lightgrey] mt-4'></div>

                        </Card>

                    ))
                }


            </div>
        </div>
    )
}

export default Products