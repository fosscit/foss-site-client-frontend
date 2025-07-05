import { useState } from 'react';
import { navLinks } from '../constants'
import { logo, menu, close, logo_optimized } from '../assets'
//import { UilUser } from '@iconscout/react-unicons'
import Cookies from 'js-cookie';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const pic = Cookies.get('pic')
  const email = Cookies.get('email')

  return (
    <div className='flex justify-center w-full '>
      <nav className='fixed bg-zinc-800/40 backdrop-blur-md rounded-xl w-[90%] sm:w-[85%] lg:w-[75%] xl:w-[70%] max-w-6xl shadow-2xl flex justify-between items-center py-2 px-4 sm:py-2 sm:px-6 lg:py-2 lg:px-6 top-4 z-50'>
        {/* Logo Section */}
        <a href='/' className='flex flex-row justify-center items-center flex-shrink-0'>
          <img src={logo_optimized} alt='FOSS-CIT Logo' className='w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12' />
          <span className='font-courier font-medium text-lg sm:text-xl lg:text-2xl px-2 text-white'>FOSS CIT</span>
        </a>

        {/* Desktop Navigation */}
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className='font-courier font-normal cursor-pointer text-sm lg:text-base px-2 lg:px-4 text-white hover:text-secondary transition-colors duration-200'>
              <a href={`${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className='sm:hidden flex justify-center items-center'>
          <img 
            src={toggle ? close : menu} 
            alt='menu' 
            className='w-6 h-6 object-contain cursor-pointer' 
            onClick={() => setToggle((prev) => !prev)} 
          />
        </div>

        {/* Mobile Navigation Menu */}
      <div className={`${toggle ? 'translate-x-0' : 'translate-x-[120%]'} fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-gradient-to-tl from-white/10 to-[#2d270e] backdrop-blur-lg z-[60] p-6 transition-transform duration-300 ease-in-out sm:hidden`}>
          {/* Close Button */}
          <div className='flex justify-end mb-8'>
            <img 
              src={close} 
              alt='close' 
              className='w-6 h-6 object-contain cursor-pointer' 
              onClick={() => setToggle(false)} 
            />
          </div>

          {/* Mobile Logo */}
          <div className='flex flex-row justify-center items-center mb-8'>
            <img src={logo_optimized} alt='FOSS-CIT Logo' className='w-12 h-12' />
            <span className='font-courier font-medium text-xl px-2 text-white'>FOSS CIT</span>
          </div>

          {/* Mobile Navigation Links */}
          <ul className='list-none flex flex-col justify-start items-center space-y-4'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className='font-courier font-medium cursor-pointer text-lg text-white hover:text-secondary transition-colors duration-200'>
                <a href={`${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Backdrop */}
        {toggle && (
          <div 
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] sm:hidden'
            onClick={() => setToggle(false)}
          />
        )}
      </nav>
    </div>
  )
}

export default Navbar;