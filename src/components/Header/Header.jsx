

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const activeStyles = {
        fontWeight: "bold",
        color: "#D87D4A"
    }

    return (
        <div className='lg:w-full h-[97px] bg-black flex justify-center items-center'>
            <div className='flex my-auto items-center justify-center border-b-[1px] border-white border-opacity-20 h-[97px] w-4/5'>
                <Link to="" className='mr-auto w-40'>
                    <img src='/assets/shared/desktop/logo.svg' alt='' className='' />
                </Link>
                <nav className='text-white flex gap-x-5 text-[13px] font-bold uppercase leading-[25px] tracking-widest justify-center'>
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
                <div className='ml-auto  w-40'>
                    <img src='/assets/shared/desktop/icon-cart.svg' alt='' className='ml-auto' />
                </div>
            </div>
        </div>
    )
}

export default Header
