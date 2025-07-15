import React from 'react'
import ReviewCard from '../layouts/ReviewCard'


const Review = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#495E57] '>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 text-[#F4CE14]'>Testimonials</h1>

            <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8 ' >
                <ReviewCard
                    img='\src\images\images\phot 1.jpg'
                    title='James Paul'
                    paragraph='Tasty food, would recommend.'
                />
                <ReviewCard
                    img='\src\images\images\phot 2.jpg'
                    title='John Prutvi'
                    paragraph='The quality of the  food and service is amazing!'
                />
                <ReviewCard
                    img='\src\images\images\phot 3.jpg'
                    title='Anna Tilly'
                    paragraph='The most delicious desserts I’ve had!'
                />

            </div>
        </div>
    )
}

export default Review