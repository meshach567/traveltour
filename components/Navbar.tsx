"use client";
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Mobile and Tablet Menu */}
      <div className={`fixed top-0 left-0 h-full w-1/4 bg-white z-20 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            
              <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
           
          </Link>
          <Image
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="w-full text-center">
              <Link href={link.href} className="text-gray-900 text-lg" onClick={toggleMenu}>
                  {link.label}
                
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href}  className="regular-16 text-gray-900 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}
            
            </Link>
          </li>
        ))}
      </ul>


      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          
          icon="/user.svg"
          variant="btn_dark_green"
          title={isMenuOpen ? 'Close' : 'Menu'}
          onClick={toggleMenu}
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
    </nav>
  )
}

export default Navbar