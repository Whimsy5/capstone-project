import React from 'react'
import { MdDeliveryDining } from "react-icons/md";


const MenuCard = (props) => {
  return (
    <div className='w-full lg:w-1/4  p-3 bg-white m-2 shadow-lg'>


      <div className='h-40 w-56 '>
        <img src={props.img} alt='img' className='rounded-t-lg '  />
      </div>

      <div className=' px-4 h-47 w-56 mt-2 '>
        <div className='flex flex-row justify-between mb-3'>
          <h3 className='font-semibold text-l mt-2'>{props.title}</h3>
          <h3 className='font-semibold text-xl'>{props.value}</h3>
          <span className='text-[#EE9972] font-semibold text-l mt-2'>{props.price}</span>
        </div>

        <div className='text-sm  leading-[1.5] '>
          <p> {props.paragraph}  </p>

        </div>
        <div className='flex gap-2 mt-2'>
          <button className='hover:text-[#EE9972] text-sm font-semibold mb-4 cursor-pointer'>Order a delivery</button>
          <MdDeliveryDining size={20} />
        </div>


      </div>




    </div >
  )
}

export default MenuCard