"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HiOutlineMenuAlt1 } from "react-icons/hi"


const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = () => {
        setIsMenuOpen(prev => !prev)
        console.log(isMenuOpen)
    }

    return (
        <div className="wrapper nav__nav">
            <div className="header__logo">
                <Link href={'/'}>
                    <Image className="h-10 md:h-[55px] w-auto" priority={true} src={'/healow-aware-logo.png'} alt="healow-aware-logo" height={55} width={282}></Image>
                </Link>
            </div>

            <nav className="header__nav">
                <ul>
                    <li>
                        <Link className="hover:text-white transition-all duration-300" href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition-all duration-300" href={'/'}>About us</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition-all duration-300" href={'/'}>Solutions for Startups</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition-all duration-300" href={'/'}>Contact Us</Link>
                    </li>
                </ul>
            </nav>

            <div className="toggle_div flex h-full items-center justify-center md:hidden">
                <button className="m-0 text-4xl text-[#333333]" onClick={handleClick}>
                    <HiOutlineMenuAlt1 />
                </button>
            </div>
        </div>
    )
}

export default Nav