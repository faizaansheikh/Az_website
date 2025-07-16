'use client'
import { bgcolor } from '../utils'
import React from 'react'

function MyButton(props) {
    const { title, className, type } = props
    return (
        <button type={type || ''} style={{ backgroundColor: bgcolor }} className={`${className} py-4 px-[19px] cursor-pointer rounded-[8px] w-full`}>{title}</button>
    )
}

export default MyButton