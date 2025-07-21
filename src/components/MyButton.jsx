'use client'
import { bgcolor } from '../utils'
import React from 'react'

function MyButton(props) {
    const { title, className, type } = props
    return (
        <button type={type || ''} className={`${className} py-4 px-[19px] cursor-pointer rounded-[8px] bg-[#0b275fff] hover:bg-[#071E4C]`}>{title}</button>
    )
}

export default MyButton