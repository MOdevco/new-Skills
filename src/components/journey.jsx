import React from 'react'
import { icon1, icon2, icon3 } from '../images'

const Journey = () => {
  return (
    <div className='bg-pink md:m-[170px] rounded-[40px] md:p-[185px] p-[150px] sm:flex justify-between items-center block  '>
        <div className='flex flex-col gap-[90px]'>
            <h1 className='md:text-[40px] text-[30px] ss:text-[30px] text-[19px] xs:text-[19px] text-[14px] font-bold text-white'>We add value to Our <br />
                studets Journey</h1>
            <div className='xs:flex hidden'>
                <a href="#" className=' ss:text-[20px]  text-[10px] text-pink rounded-[30px] md:px-[50px] px-[30px] md:py-[25px] py-[15px] bg-white hover:text-orange' >Learn More</a>
            </div>
        </div>
        <div className='flex flex-col gap-[50px] sm:mt-[0px] mt-[50px]'>
            <div className='flex gap-[40px] xs:w-[100px] w-[50px]'>
                <img src={icon1} alt="" className='w-full' />
                <img src={icon2} alt="" className='w-full' />
            </div>
            <div className='flex gap-[40px] xs:w-[100px] w-[50px]'>
                <img src={icon2} alt="" className='w-full' />
                <img src={icon3} alt="" className='w-full' />
            </div>
        </div>

    </div>
  )
}

export default Journey