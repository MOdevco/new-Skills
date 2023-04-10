import React from 'react'

const Nav = () => {
  return (
    <div className='p-[50px] flex justify-between items-center '>
        <div className=''>
            <div className='ss:hidden block text-[25px]'>
            <i class="fa-solid fa-bars"></i>
            </div>
            <ul className='ss:flex gap-[50px] hidden'>
                <li className='hover:text-orange font-bold'>Home</li>
                <li className='hover:text-orange hover:font-bold'>Learn</li>
                <li className='hover:text-orange hover:font-bold'>About</li>
                <li className='hover:text-orange hover:font-bold'>Contact Us</li>
            </ul>
        </div>
        <div>
            <div>
                <a href="#" className='bg-purple rounded-[20px] px-[20px] py-[15px] text-white hover:bg-orange'>Get Started</a>
            </div>
        </div>
    </div>
  )
}

export default Nav