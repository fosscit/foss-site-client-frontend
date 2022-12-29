import React from 'react'
import styles from '../style';
import { logo } from '../assets';
import { footerLinks,socialMedia,contributors } from '../constants';
const Footer = () => {

  const handleClick=(event,link)=>{
    window.open(link, '_blank', 'noopener,noreferrer');
  }
return (
    <section className={`sm:py-8 py-3 flex-col`}>
      <div className={`flex md:flex-row flex-col my-3 py-2`}>
        
        <div className='flex-1 flex flex-col ss:w-[33%]'>
          <div className='flex justify-center items-center'>
            <a href='/'><img src={logo} alt='FOSS Logo' className='h-[10rem] object-contain '/></a>
          </div>
          <div className='flex flex-row flex-wrap mx-2 mt-20 justify-center items-center'>
            {socialMedia.map((social,index)=>(
              <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer mx-5 hover:scale-125 ease-in-out duration-300`} onClick={event => handleClick(event, social.link)} />
            ))}
          </div>
        </div>

        <div className='ss:w-[33%] flex flex-col md:mt-0 mt-5 justify-start px-10'>
          <h4 className='font-poppins font-medium text-[20px] leading-[27px] text-white mt-4'>Sitemap</h4>
          {footerLinks.map((footerLinks)=>(
            <div key={footerLinks.id} className='flex my-0 min-w-[150px] justify-start items-center'>
                <ul className='list-none mt-4 mx-3'>
                    <div className='flex'><li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-1`}>
                      <a href={`../${footerLinks.link}`}>{footerLinks.name}</a>
                    </li></div>
                </ul>
            </div>
          ))}
        </div>

        <div className={`font-poppins font-normal text-dimWhite text-[14px] leading-[30.8px] ss:w-[33%] text-justify px-10 flex flex-col`}>
          <h4 className='flex text-[20px] font-medium text-white mt-4'>Contact</h4>
          <h4 className='flex text-[18px] font-medium text-white mt-4'>Computing Block</h4>
          <span className='flex ss:mx-5 cursor-pointer ' onClick={event => handleClick(event, 'https://goo.gl/maps/GjRuMDe4MQWCrr3S8')}>Coimbatore Institute of Technology,</span>
          <span className='flex ss:mx-5'>Avinashi Road, Civil Aerodrome Post, Peelambedu, Coimbatore, Tamil Nadu 641014</span>
          <span className='flex ss:mx-5'>+91 98765 43210 </span>
          <span className='flex text-[18px] font-medium text-white mt-4'>fosscit@gmail.com </span>
        </div>

      </div>
      <div className='w-full flex flex-row flex-wrap md:mt-0 mt-5 items-center justify-center my-4'>
        <h4 className='font-poppins font-medium text-[20px] leading-[27px] text-white mt-4 '>Contributors:</h4>
        {contributors.map((footerLinks)=>(
          <div key={footerLinks.id} className='flex my-0 px-4 min-w-[150px] justify-center items-center'>
              <ul className='list-none mt-4 flex mx-4'>
                  <div className='flex'><li className={`font-poppins font-normal text-[16px] leading-[27px] text-dimWhite hover:text-secondary cursor-pointer mb-1`}>
                    <a onClick={event => handleClick(event, footerLinks.link)}>{footerLinks.name}</a>
                  </li></div>
              </ul>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center md:flex-row flex-col pt-1 border-t-[1px] border-t-[#f7f2cb] h-2'>
        <p className='font-poppins font-normal text-center text-[10px] leading-[27px] text-white'> &#169; 2022 FOSS CIT. All Rights Reserved.</p>
      </div>
    
    </section>
  )
}

export default Footer;