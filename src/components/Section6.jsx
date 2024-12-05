import React from 'react'
import { Images } from '../assets/images'


function Section6() {
  return (
    <div>
        <div className='max-w-[1280px] ml-auto mr-auto px-10 pt-20'>
            <div className='flex gap-8 justify-between items-center'>
            <div className=''>
                    <p className='text-[1.5rem] pb-4 font-bold leading-snug'>Try our FREE Process Map Generator</p>

                    <p className='pb-8 w-5/6 text-[1.2rem]'>Generate Process Flow maps and diagrams for your projects with automated AI generation of User Stories.</p>

                    <button className='bg-[#605AF5] px-6 h-[55px] rounded-lg text-[0.9rem] roboto-bold'>Try it Now For Free</button>
                </div>  

                <div className='text-center'>
                    <img src={Images.process_map} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section6