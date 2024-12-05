import React from 'react'
import { FEATURES_DATA } from '../data/mockData'


function Section1() {
  return (
    <div className='max-w-[1280px] ml-auto mr-auto'>
    <div className='text-center roboto-black pt-24'>
          <p className='text-[4rem] leading-none'>Pioneering Communication</p>
          <p className='text-[4rem] leading-tight'>in <span className='hero-text'>Software Delivery.</span></p>
      </div>  

      <div className='text-center pt-10'>
        <p className='text-[1.2rem]'>Accelerate development with AI-driven speed from design to delivery faster than ever before.</p>


        <form className='pt-16'>
          <label className='pr-4 w-[400px]'>
            <input type="text" placeholder='Enter your work email' name="name" className='text-white w-[400px] px-6 py-3 bg-transparent border rounded-lg roboto-medium' />
          </label>

          <input type="submit" value="Request Early Access" className='bg-[#605AF5] px-6 py-3 rounded-lg text-[1.1rem] roboto-bold' />
        </form>

        <p className='py-16 text-[1.3rem] roboto-bold tracking-wide'>Say goodbye to manual requirement building. Let Reqops speed things up.</p>
      </div>

      <div className='flex gap-8 mb-16'>
        {
          FEATURES_DATA.map((index, key) => 
            <div className=' w-1/3 h-[450px] rounded-3xl p-0.5 bg-gradient-to-r from-[#605AF5] via-[#ED66A8] to-[#f1aea8]'>
                <div className='h-full w-full bg-[#242424] pt-10 px-10 text-center flex flex-col justify-between rounded-3xl'>
                  <p className='roboto-bold text-[1.5rem]'>{index.title}</p>

                  <img src={index.image} className={`${key === 1 && "pb-10"} ${key === 2 && "pb-10"}`} />
                </div>
            </div>
          )
        }
      </div>
</div>
  )
}

export default Section1