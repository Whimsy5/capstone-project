import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#EDEFEE] text-[#333333] rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
        <div className='w-full md:w-1/4'>
          <img className='pb-4' src='\src\images\images\Logo.svg' alt='logo' />
        </div>
        <div>
          <h1 className='font-medium text-l pb-4 pt-5 md:pt-0 text-[#495E57] lg:font-bold'>Doormat Navigation</h1>
          <nav className='flex flex-col gap-2 text-sm font-semibold'>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>Menu</a>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>About Us</a>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>Home</a>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>Reviews</a>

          </nav>
        </div>
        <div>
          <h1 className='font-medium text-l pb-4 pt-5 md:pt-0 text-[#495E57] lg:font-bold px-10'>Contact</h1>
          <nav className='flex flex-col gap-2 text-sm font-semibold'>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>littlelemon@gmail.com</a>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>+76 905 678 674</a>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>60490-345956</a>
          </nav>
        </div>
        <div>
          <h1 className='font-medium text-l pb-4 pt-5 md:pt-0 text-[#495E57] lg:font-bold'>Social Media Links</h1>
          <nav className='flex flex-col gap-2 text-sm font-semibold'>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>LinkedIn</a>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>GitHub</a>
            <a className='hover:text-[#EE9972] transition-all cursor-pointer' href='/'>Instagram</a>
          </nav>
        </div>

      </div>
      <div>
        <p className='text-center py-4'>
          @copyright developed by
          <span className='text-[#EE9972]'> Brenda Kinoti </span>
          | All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer