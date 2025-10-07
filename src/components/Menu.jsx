import React from 'react'
import { MdDeliveryDining } from "react-icons/md";
import MenuCard from '../layouts/MenuCard'
const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-white'>
      <div className='flex  mt-24 mb-8 justify-evenly '>
      <h1 className='font-semibold  text-5xl '>This weeks specials!</h1>
      
        <span><button className=' text-xs cursor-pointer flex bg-[#F4CE14] hover:text-[#ffffff] font-semibold py-2 px-4 rounded'>Online Menu</button></span>
      
      </div>
      <div className='flex flex-wrap pb-8 gap-12 justify-center'>
        <MenuCard
          img='\src\images\images\greek salad.jpg'
          title='Greek Salad'
          price='$12.99'
          paragraph='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and croutons. ' />



        <MenuCard
          img='\src\images\images\bruchetta.svg'
          title='Bruchetta'
          price='$5.99'
          paragraph='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
          
          />



        <MenuCard
          img='\src\images\images\lemon dessert.jpg'
          title='Lemon Dessert'
          price='$5.00'
          paragraph='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.' />

      </div>

    </div>



  )
}

export default Menu