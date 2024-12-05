import React from 'react'
import { Icons } from '../assets/icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='border-t '>
        <div className='sm:flex sm:flex-row sm:px-10 xl:px-0 items-center gap-y-4 justify-between py-8 max-w-[1280px] mx-auto flex flex-col'>
            <Link to="">
                <img src={Icons.logo} alt='Reqaps'/>
            </Link>

            <div className='flex items-center gap-12'>
                <Link to="/">
                    <p className='font-bold'>Already a member ?</p>
                </Link>

                <Link to="/" >
                    <p className='border border-white rounded-md px-8 py-2'>Log in</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer