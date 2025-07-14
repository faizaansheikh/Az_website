import { bgcolor } from '../utils'
import React from 'react'

function MyButton(props) {
    const { title } = props
    return (
        <div style={{backgroundColor:bgcolor}} className='py-4 px-[19px] cursor-pointer rounded-[8px]'>{title}</div>
    )
}

export default MyButton