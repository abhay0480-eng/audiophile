

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const activeStyles = {
        fontWeight: "bold",
        color: "#D87D4A"
    }

    return (
        <div className='lg:w-full h-[97px] bg-black flex justify-center items-center'>
            <div className='flex my-auto items-center justify-between lg:justify-center border-b-[1px] border-white border-opacity-20 h-[97px] w-4/5'>
                <div className='lg:hidden block'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <rect width="16" height="3" fill="white"/>
                    <rect y="6" width="16" height="3" fill="white"/>
                    <rect y="12" width="16" height="3" fill="white"/>
                    </svg>
                </div>
                <Link to="" className='lg:mr-auto lg:w-40 text-center'>
                    <img src='/assets/shared/desktop/logo.svg' alt='' className='' />
                </Link>
                <nav className='text-white lg:flex gap-x-5 text-[13px] font-bold uppercase hidden leading-[25px] tracking-widest justify-center'>
                    <NavLink
                        to=""
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="headphone"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        HEADPHONES
                    </NavLink>
                    <NavLink
                        to="speakers"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        SPEAKERS
                    </NavLink>
                    <NavLink
                        to="earphones"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >
                        EARPHONES
                    </NavLink>
                </nav>
                <div className='ml-auto  lg:w-40'>
                    <img src='/assets/shared/desktop/icon-cart.svg' alt='' className='ml-auto' />
                </div>
            </div>
        </div>
    )
}

export default Header
