import GlassEffect from '../../components/GlassEffect'
import React from 'react'
import Expertise from './Expertise'
import { bgcolor } from '../../utils'
import KeyClients from './KeyClients'
import Management from './Management'
import TechnicaService from './TechnicaService'

function About() {
    return (
        <>
            <div className='h-[400px]  px-[30px] lg:px-[200px] flex justify-center items-center flex-col' > 

                <GlassEffect className='mb-4' >
                    NEED TO KNOW

                </GlassEffect>
                <h2 className='text-4xl md:text-6xl mb-2 text-center' >
                    About AZ Scientific Solutions
                </h2>
                <p className='text-start md:text-center text-sm md:text-[18px]'>
                    AZ Scientific Solutions was established in Karachi, Pakistan. We are providing services to educational institutes, research & development centers, oil & gas industry, government and private sector laboratories, food safety & environmental laboratories, local manufacturing industries etc.
                    AZ Scientific Solutions came along with vast experience of more than 20 years in the field of analytical, bio analytical & scientific research instruments.

                    We have business partnership with a number of premier manufacturers and suppliers of scientific instrumentation around the globe. We are fully capable of meeting the challenges of providing scientific solutions to laboratories with latest technology, instrumentation and services in the technical, medical and industrial fields.
                </p>
            </div>
            <div style={{ backgroundImage: 'linear-gradient(to top, #191449ff, #13223fff, #040e31ff' }}>
                <div className='mx-4 lg:mx-[120px] mb-[0px] mt-[60px] md:mt-[20px] text-white'>

                    <Expertise />

                </div>
            </div>

            <div className='mx-4 lg:mx-[120px] mb-[40px] mt-[40px] md:mt-[20px] '>
                <TechnicaService />
            </div>
            <div style={{ backgroundImage: 'linear-gradient(to top, #191449ff, #13223fff, #040e31ff' }}>
                <div className='mx-4 lg:mx-[120px] mb-[20px] md:mt-[20px] text-white'>
                    <KeyClients />
                </div>
            </div>


        </>
    )
}

export default About