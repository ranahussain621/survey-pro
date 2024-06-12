// Navbar.js
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'

import HeaderLogo from '../../assets/svgs/HeaderLogo.svg?react'
import MenuBtn from '../../assets/svgs/Menu.svg?react'
import CrossBtn from '../../assets/svgs/cross.svg?react'
import { Link } from 'react-router-dom'

const HeaderSection = observer(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="bg-white text-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sticky flex h-20 items-center justify-between border-b-[1px]">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <HeaderLogo />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a
                aria-current="page"
                href="#"
                className="text-base font-[400] text-slate-700 hover:text-slate-900"
              >
                Product
              </a>
              <a href="#" className="text-base font-[400] text-slate-700 hover:text-slate-900">
                Templates
              </a>
              <a href="#" className="text-base font-[400] text-slate-700 hover:text-slate-900">
                Integrations
              </a>
              <Link to={"/pricing"} className="text-base font-[400] text-slate-700 hover:text-slate-900">
                Pricing
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="hidden md:block">
                <Link
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-slate-950 px-4 py-2 text-base font-medium text-white shadow-sm"
                  to={'/login'}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
            >
              {/* Menu icon */}
              <MenuBtn />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute right-0 top-0 h-[100vh] w-[40%] overflow-y-hidden bg-slate-100 md:hidden">
          <div className=" space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
            >
              {/* Menu icon */}
              <CrossBtn />
            </button>
            <a
              aria-current="page"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-950 hover:bg-gray-700 hover:text-white"
            >
              Product
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-950 hover:bg-gray-700 hover:text-white"
            >
              Templates
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-950 hover:bg-gray-700 hover:text-white"
            >
              Integrations
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-950 hover:bg-gray-700 hover:text-white"
            >
              Pricing
            </a>
          </div>
        </div>
      )}
    </nav>
  )
})

export default HeaderSection
