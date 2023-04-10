import React from 'react'
import { img } from '../images'

const Design1 = () => {
  return (
    <div className='ss:flex justify-evenly items-center block ss:pr-[0px] pr-[20px]'>
        <div className=''>
            <img src={img} alt="" className='w-full'/>
        </div>
        <div className='text-blue flex flex-col sm:gap-[40px] gap-[40px] pl-[50px] pt-[30px]'>
            <h1 className='sm:text-[40px] text-[25px] font-bold'>Design & Business <br />
                For Better Solution</h1>
                <p className='w-[350px] sm:text-[19px] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi senectus at habitant. amet, consectetur adipiscing elit. Mi senectus at habitant. amet, consectetur adipiscing elit</p>
               <div className='bg-pink h-1.5 w-[250px]'>
                <hr />
               </div>
        </div>
    </div>
  )
}

export default Design1