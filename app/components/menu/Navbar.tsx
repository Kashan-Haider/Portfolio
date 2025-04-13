'use client'
import React from 'react'
import { Link } from 'react-scroll'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className="absolute w-screen overflow-hidden">
        <div className="fixed w-full z-50 flex items-center justify-between p-5 md:p-10">
          <Link
            to={"home"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer text-xs md:text-base backdrop-blur-3xl px-5 py-3 rounded-3xl"
          >
            The Portfolio
          </Link>
          <Menu />
        </div>
      </div>
  )
}

export default Navbar