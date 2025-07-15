import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/reservetable');
  };


  return (
    <div className=' min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10v bg-[#495E57]'>
      <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-12'>
        <h1 className='font-bold text-5xl  lg:text-start leading-tight text-[#F4CE14]'>Little Lemon</h1>
        <h2 className='font-semi-bold text-3xl text-[#EDEFEE]'>Chicago</h2>
        <p className='font-regular text-lg text-[#EDEFEE]'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <div>
          <button onClick={handleButtonClick} className='focus:outline-none focus:ring-2 focus:ring-[#F4CE14]-300 cursor-pointer flex bg-[#F4CE14] hover:text-[#ffffff] font-bold text-xs py-2 px-4 rounded'>Reserve a Table</button>
          <div />
        </div>
      </div>

      <div className=' relative h-65 w-65 mt-14'>
        <img src='\src\images\images\restauranfood 2.jpg' alt='restaurant food' className='rounded' />
      </div>
    </div>

  )
}


export default Home