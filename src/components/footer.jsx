import React from 'react'

const Footer = () => {
  return (
    <div className='text-blue md:flex justify-evenly items-center gap-[200px] block'>
        <div className='flex flex-col gap-[30px]'>
            <h1 className='ss:text-[40px] text-[25px] text-bold'>Join Now With Us <br />
                    Contact us</h1>
                    <p className='w-[400px] text-[20px]'>Find out everything you need to know about our creativity process and find the best freelancers with us.</p>
            </div>
       <div className='flex flex-col gap-[40px] mt-[30px]'>
       <div className='flex gap-[90px]'>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='font-bold'>Partnership</h1>
                <ul className='leading-[30px]'>
                    <li>Website</li>
                    <li>Work</li>
                    <li>Agency</li>
                </ul>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='font-bold'>About</h1>
                <ul className='leading-[30px]'>
                    <li>Our Skill</li>
                    <li>Job</li>
                </ul>
            </div>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='font-bold'>Support</h1>
                <ul className='leading-[30px]'>
                    <li>Support Request</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div>
            <h1 className='font-bold'>All Right Reserved 2022</h1>
        </div>
       </div>

    </div>
  )
}

export default Footer