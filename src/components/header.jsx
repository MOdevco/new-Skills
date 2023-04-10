import React from 'react'
import { imgTop } from '../images'

const Header = () => {
  return (
    <div className='md:flex justify-between items-center block text-center'>
        <div className='text-blue pl-[50px] flex flex-col gap-[60px] '>
            <h1 className='text-[40px] font-bold'>Learn   <a href="#" className='bg-pink p-[8px] rounded-[15px] hover:bg-orange'>New Skills </a><br />
                Online With Top <br />
                Educators</h1>
                <p className='text-[20px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Mi senectus at.</p>
            <div className=''>
                <a href="#" className=' text-[20px] bg-pink rounded-[30px] md:px-[50px] px-[30px] md:py-[25px] py-[15px] text-white hover:bg-orange' >Learn More</a>
            </div>
        </div>
        <div className='md:w-[550px] text-[400px] md:mt-[0px] mt-[30px] '>
            <img src={imgTop} alt="" className='w-full' />
        </div>
    </div>
  )
}

export default Header