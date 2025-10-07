import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-[#ffffff]'>
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24'>About Us</h1>

        <div className='flex flex-col lg:flex-row items-center gap-5'>
            
            <div className='w-full lg:w-2/4 p-4 space-y-3'>
                <h2 className='font-semibold text-3xl'>What makes us special?</h2>
                
                <p>
                    Located in Chicago, Little Lemon is known for it’s delectable dishes made from fresh, local ingredients. Offering a cozy ambiance and attentive service. It’s an ideal destination for casual dining or memorable gatherings.
Enjoy delicious cuisine and delightful moments at Little Lemon.
                </p>

            </div>
            <div className='flex  relative '>
                <img src='\src\images\images\restaurant chef B.jpg' alt='img' className='h-48 w-42 mt-24' />
                <img src='\src\images\images\restaurant.jpg' alt='img' className='h-48 w-40 absolute top-0  right-0 left-2/3'/>

            </div>
        </div>
    </div>
  )
}

export default About