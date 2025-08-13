import React from 'react';
import './nav.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bgcolor } from '@/utils';
import { Card, Tooltip } from 'antd';
import ducom from '../images/ducom.png'
import linsis from '../images/linsis.png'
import paltro from '../images/paltro.png'
import orbis from '../images/orbis.png'
import omni from '../images/omni.png'
import xos from '../images/xos.png'

const partners = [
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/ad-system.png',
        url: 'https://www.adsystems-sa.com/',
        title: 'AD Systems',
        desc: 'AD Systems specializes in the design, manufacturing, selling and servicing of unique test equipment for the evaluation of physical properties'
    },
    {
        img: xos,
        url: 'https://www.adsystems-sa.com/',
        title: 'XOS',
        desc: 'XOS specializes in the design, manufacturing, selling and servicing of unique test equipment for the evaluation of physical properties'
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/milestone.png',
        url: 'https://www.milestonesrl.com/index.php/',
        title: 'Milestone S.r.l. ',
        desc: 'Milestone Helping Chemists Milestone has been active since 1988 in the field of advanced microwave sample preparation.'
    },
    
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/5.png',
        url: 'https://www.stanhope-seta.co.uk/',
        title: ' Stanhope-Seta',
        desc: 'Stanhope-Seta design and manufacture quality control instruments used to measure the physical characteristics that determine product quality and consistency.'
    },

{
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/trace.png',
        url: 'http://teinstruments.com/',
        title: 'Trace Elemental',
        desc: 'Trace Elemental Instruments B.V., designs, develops, manufactures, markets, sells and supports a range of laboratory equipment '
    },
    {
        img: 'https://az-scientificsolutions.com/wp-content/uploads/2018/05/11.png',
        url: 'http://labtechsrl.com/#products',
        title: 'Lab Tech Srl.',
        desc: 'LabTech is a leading manufacturing company with skill and passion devoted to provide advanced laboratory solutions'
    },

    {
        img: orbis,
        url: 'https://orbisbv.com',
        title: 'ORBIS BV',
        desc: 'Develop high end laboratory equipment that saves worldwide customers time and money while producing the best achievable test results'
    },
    {
        img: omni,
        url: 'https://omnitek.nl/',
        title: 'Omni Tech',
        desc: 'OmniTek provides fully automatic kinematic viscosity instrumentation compliant with ASTM 445/446, ASTM D7279 (Houillon)'
    },
    {
        img: ducom,
        url: 'https://omnitek.nl/',
        title: 'Ducom',
        desc: 'OmniTek provides fully automatic kinematic viscosity instrumentation compliant with ASTM 445/446, ASTM D7279 (Houillon)'
    },
    {
        img: linsis,
        url: 'https://linseis.com/en/our-products/',
        title: 'Linseis Thermal  ',
        desc: 'More than 60 years ago LINSEIS started the production of thermal analysis recorders and instruments'
    },
    {
        img: paltro,
        url: 'https://omnitek.nl/',
        title: 'Paltro',
        desc: 'Paltro provides fully automatic kinematic viscosity instrumentation compliant with ASTM 445/446, ASTM D7279 (Houillon)'
    },
    
    

]

const Partner = () => {
    return (
        <div className='mx-[30px] md:mx-[100px] lg:mx-[200px]'>
            <h2 className='text-4xl md:text-5xl text-center  pt-20 pb-4 mb-10' style={{ borderBottom: `2px solid ${bgcolor}` }}>Our Partners</h2>
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
                        items: 4,
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
                    partners.map((x, i) => (
                        <div  key={i} className=''>
                            <Card
                                onClick={()=>window.open(x.url)}
                                style={{  weight:230,height: 330, border: '2px solid grey' ,margin:'10px 10px 50px 10px'}}
                                className='shadow-2xl cursor-pointer hover:scale-106 z-80 transition-transform duration-300 '
                                cover={
                                    <img
                                        alt="example"
                                       src={typeof x.img === 'string' ? x.img : x.img.src}
                                        className='p-6 h-[150px] shadow'
                                    />
                                }
                            // actions={[
                            //     <Tooltip title='Request Quotation'>
                            //         <a href={x.url} target='_black'>

                            //             <MessageOutlined key="setting" classID='' style={{ color: bgcolor, fontSize: '17px', padding: '0px 0' }} />
                            //         </a>
                            //     </Tooltip>,
                            //     <Tooltip title='View'>
                            //         <a href={x.url} target='_black'>
                            //             <EyeOutlined key="edit" classID='' style={{ color: bgcolor, fontSize: '18px', padding: '0px 0' }} />
                            //         </a>
                            //     </Tooltip>

                            // ]}
                            >
                                <h3 className='text-xl font-[500]'>{x.title}</h3>
                                <p className='text-sm mt-2 flex-grow overflow-hidden h-[80px]'>{x.desc}</p>
                                

                            </Card>
                        </div>

                    ))
                }
            </Carousel>
        </div>
    );
};

export default Partner;
