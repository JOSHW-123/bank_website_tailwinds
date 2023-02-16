import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

// Dependencies and libraries imported for use, along with useState hook from React library. Other data imported from directory location '../assets' & '../constants'

const Navbar = () => {

// New functional component to render Navbar on screen.

  const [toggle, setToggle] = useState(false)

// useState hook initialises new state variable 'toggle' and new function 'setToggle' 
// to update value. Initial value is false.

  return (

// Return statement renders components UI

    <nav className="w-full flex py-6
    justify-between items- center navbar">

{/* This creates a new nav element with CSS classes w-full, flex, py-6, justify-between, items-center, and navbar. These classes define the layout and styles of the navbar. */}

      <img src={logo} alt="hoobank"
        className='w-[124px] h-[32px]'/> 



        <ul className="list-none sm:flex hidden
        justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins
              font-normal cursor-pointer text-
              [16px] ${index === navLinks.Length 
              - 1 ? 'mr-0' : 'mr-10' }
              text-white`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}

        </ul> 
        <div className="sm:hidden flex flex-1
        justify-end items-center">
          <img 
          src={toggle ? close : menu} 
          alt="menu"
          className='w-[28px] h-[28px]
          object-contain'

          />
        </div>
    </nav>
  )
}

export default Navbar