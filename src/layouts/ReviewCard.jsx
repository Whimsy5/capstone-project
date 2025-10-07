import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FaQuoteRight } from 'react-icons/fa'


const ReviewCard = (props) => {
    return (
        <div className='flex flex-col w-full lg:w-2/6 bg-[#ffffff] p-3 rounded-lg gap-5'>
            <div className='flex flex-row items-center lg:justify-start justify-center'>
                <div className='w-1/4'>
                    <img src={props.img} alt='img' className='rounded-full' />
                </div>
                <div className='mx-3'>
                    <h2 className='font-semibold text-lg'>{props.title} </h2>
                    <div className='flex'>
                        <BsStarFill className='text-[#F4CE14]' />
                        <BsStarFill className='text-[#F4CE14]' />
                        <BsStarFill className='text-[#F4CE14]' />
                        <BsStarFill className='text-[#F4CE14]' />
                        <BsStarHalf className='text-[#F4CE14]' />
                    </div>
                </div>
                <span className='ml-16'>
                    <FaQuoteRight className='text-[#495E57]' size={42} />
                </span>
            </div>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default ReviewCard