'use client'
import React, { useState } from 'react'
import { GoGoal } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import { bgcolor } from '../utils';

function OurVision() {
    const [selected, setSelected] = useState(1)
    const arr = [
        {
            id: 1,
            icon: (id) => <MdOutlineSettings size={80}  />,
            title: 'Technical Department',
            desc: 'We are committed with our customers to provide highest level of after sales services with the team of highly qualified and experienced personnel’s which includes Ph.D’s (Analytical Chemistry) , Application & Electronic Engineers.'
        },
        {
            id: 2,
            icon: (id) => <GoGoal size={80}  />,
            title: 'Our Mission',
            desc: 'To set new standards in providing scientific solutions, based on the customer’s satisfaction through experience, knowledge and latest technology.'
        },
        {
            id: 3,
            icon: (id) => <FaRegEye size={80}  />,
            title: 'Our Vision',
            desc: 'To deliver beyond the customer’s expectation in field of Scientific Instrumentation, a platform where we grow together.'
        },
        {
            id: 4,
            icon: (id) => <LuBadgeCheck size={80}  />,
            title: 'Our Values',
            desc: 'Integrity, Honesty, Professionalism & Respect.'
        }
    ]
    // 071E4C
    return (
        <>
            <div className='w-full h-[auto]  rounded-[50px] pb-6  flex flex-col bg-[black] shadow-xl' style={{ boxShadow:'5px 5px 35px 10px black' }}>
                <div className='flex justify-evenly items-center pt-[60px] flex-wrap '>
                    {
                        arr.map((x, i) => (
                            <div key={i}
                                onClick={() => setSelected(x.id)}
                                className={`w-[300px] transition-transform duration-300 hover:scale-110 h-[200px] flex flex-col justify-center items-center shadow-black border-2 ${selected === x.id ? 'border-[lightgrey] text-white shadow-xl ' : 'border-[grey] text-[grey] shadow-lg '} rounded-[17px] p-4 cursor-pointer hover:border-[lightgrey] hover:text-[white] mb-6 `}>
                                <div>{x.icon(x.id)}</div>
                                <h2 className={`text-center text-3xl pt-2 `}>{x.title}</h2>
                            </div>
                        ))
                    }


                </div>
                <div className='backdrop-blur-xl bg-[white]/10 border border-grey/10 rounded-[50px] shadow-xl px-6 w-auto flex flex-col justify-center items-center h-[300px]  mt-12 mx-4 text-white'>
                    {arr.map((x, i) => (
                        selected === x.id &&
                        <div key={i} className='flex flex-col justify-center items-center'>
                            <h2 className='text-2xl md:text-4xl mb-4 font-bold'>   {selected === x.id ? x.title : ''}</h2>
                            <p className='text-[16px] md:text-2xl text-white text-center'>
                                {selected === x.id ? x.desc : ''}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default OurVision