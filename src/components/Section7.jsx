import React from 'react'

function Section7() {
  return (
    <div>
        <div className='max-w-[1280px] ml-auto mr-auto'>
          <div className='text-center roboto-black pt-24'>
                <p className='text-[2.5rem] leading-snug'>Join us in revolutionizing global business growth<br/>through AI-driven innovation today</p>
            </div>  

            <div className='text-center pt-10'>
              <p className='text-[1.2rem]'>Get early access to our free features.</p>


              <form className='pt-12'>
                <label className='pr-4 w-[400px]'>
                  <input type="text" placeholder='Enter your work email' name="name" className='text-white w-[400px] px-6 h-[55px] bg-transparent border rounded-lg roboto-medium' />
                </label>

                <input type="submit" value="Get Early Access" className='bg-[#605AF5] px-6 h-[55px] rounded-lg text-[0.9rem] roboto-bold mb-60' />
              </form>

            </div>
      </div>
    </div>
  )
}

export default Section7