import React from 'react'
import {arrowUp } from '../assets';
import styles from '../style';
const GetStarted = ({text,link}) => {
  const handleClick=()=>{ 
    window.open(link, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className={`${styles.flexCenter} w-[200px] h-[40px]  bg-black p-[2px] cursor-pointer hover:scale-105 ease-in-out duration-300`} onClick={handleClick}>
        <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] `}>
          <div className={`${styles.flexCenter} flex-row`}>
            <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
              <span className='text-white'>{text}</span>
            </p>
            <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt='arrow'/>
          </div>
        </div>
    </div>
  )
}

export default GetStarted