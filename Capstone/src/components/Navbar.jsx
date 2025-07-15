import React from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll'
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useState } from 'react';


const Navbar = () => {


  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  }

  const closeMenu = () => {
    setMenu(false);
  }


  return (
    <div className='fixed w-full z-10 bg-[#ffffff]'>
      <div>

        <div className=' flex flex-row justify-between p-5 lg:px-32 px-5 gap-2'>
          <div className='flex flex-row items-center cursor-pointer gap-2'>


            <a href='/' size={25}>
              <img src='\src\images\images\Logo .svg' alt='logo' />
            </a>

          </div>


          <nav >
            <ul >
              <li className='hidden md:flex flex-row items-center text-lg font-medium gap-8' >



                {/* nav items */}

                <Link to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" group relative inline-block cursor-pointer hover:text-brightColor"
                >Home
                  <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                </Link>
                <Link to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="group relative inline-block cursor-pointer hover:text-brightColor"
                >About Us
                  <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                </Link>
                <Link to="menu"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="group relative inline-block cursor-pointer hover:text-brightColor"
                >Menu
                  <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                </Link>

                <Link to="review"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="group relative inline-block cursor-pointer hover:text-brightColor"
                >Reviews
                  <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                </Link>


              </li>
            </ul>
          </nav >
          <div className='hidden lg:flex'  >
            <button className='group relative inline-block cursor-pointer hover:text-brightColor'
            >Login
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </button>
          </div>

          <div className='md:hidden flex items-center'>
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}

          </div>





          {/* mobile navbar */}
          {/*<div>
        <FaBars />
      </div>*/}



          <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300   `}>
            <Link to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" group relative inline-block cursor-pointer hover:text-brightColor"
              onClick={closeMenu}
            >Home
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </Link>
            <Link to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
              onClick={closeMenu}
            >About Us
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </Link>
            <Link to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
              onClick={closeMenu}
            >Menu
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </Link>

            <Link to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
              onClick={closeMenu}
            >Reviews
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </Link>


            <button className='group relative inline-block cursor-pointer hover:text-brightColor'
              onClick={closeMenu}
            >Login
              <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            </button>
          </div>

        </div>

      </div >
    </div>


  )
}

export default Navbar