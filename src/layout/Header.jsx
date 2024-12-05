import React, { useState } from 'react'
import { Icons } from '../assets/icons'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";
import { GiHidden } from 'react-icons/gi';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <div className='py-8 px-5 xl:px-0'>
            <div className='flex justify-between max-w-[1280px] mx-auto'>
                <div className='flex gap-12 items-center'>
                    <Link to="/">
                        <img src={Icons.logo} alt='Reqaps'/>
                    </Link>

                    <nav className='hidden lg:block'>
                        <ul className='flex gap-12'>
                            <li><NavLink to="/" title='Features'>Features</NavLink></li>
                            <li><NavLink to="/" title='Features'>Benefits</NavLink></li>
                            <li><NavLink to="/" title='Features'>Free Generator</NavLink></li>
                        </ul>
                    </nav>
                </div>


                <div className='gap-12 items-center hidden lg:flex'>
                    <Link to="*" className='font-bold'>Already a member ?</Link>
                    <Link to="#" className='border border-white-500 border-spacing-5 rounded-md'>
                        <p className='px-8 py-2'>Log in</p>
                    </Link>
                </div>
                
                {/* 
                <button className='lg:hidden' onClick={() => setIsMenuOpen(prev => !prev)}>
                    <RiMenu4Fill fontSize="2rem" />
                </button> */}

                    
                <button className='lg:hidden' onClick={toggleMenu}>
                    <RiMenu4Fill fontSize="2rem" />
                </button>



                

         
                <div className={`lg:hidden w-screen h-screen md:w-[300px] md:left-auto md:right-0 pt-8 bg-primary absolute top-0 left-0 right-0 transition-transform duration-1000 ${isMenuOpen ? 'menu-close' : 'menu-open'}`}>
                    
                    <div className='flex justify-end pr-5'>
                        <button onClick={toggleMenu}>
                            <RiCloseLine fontSize="2rem" />
                        </button>
                    </div>

                    <nav className='pt-12'>
                            <ul className='text-center space-y-5'>
                                <li><NavLink to="/" title='Features'>Features</NavLink></li>
                                <li><NavLink to="/" title='Features'>Benefits</NavLink></li>
                                <li><NavLink to="/" title='Features'>Free Generator</NavLink></li>
                            </ul>
                    </nav>

                    <div className='space-y-5 pt-8 px-6 flex flex-col items-center'>
                        <Link to="*" className='font-bold'>Already a member ?</Link>
                        <Link to="#" className='w-full text-center'>
                            <p className='px-8 py-2 border rounded-md'>Log in</p>
                        </Link>
                    </div>
                </div>
                


            </div>
        </div>

    )
}

export default Header