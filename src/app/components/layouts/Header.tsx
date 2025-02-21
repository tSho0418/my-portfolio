import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-sky-300 text-white py-6 px-4 md:px-20">
      <nav className="container x-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-4xl font-serif mb-4 md:mb-0">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            Portfolio
          </Link>
        </div>
        <ul className="flex flex-col md:flex-row font-serif space-y-2 md:space-y-0 md:space-x-32 items-center">
        <li>
            <Link href="/about" className="text-3xl hover:opacity-80 transition-opacity">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-3xl hover:opacity-80 transition-opacity">
              About
            </Link>
          </li>
          <li>
            <Link href="/service" className="text-3xl hover:opacity-80 transition-opacity">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/service" className="text-3xl hover:opacity-80 transition-opacity">
            Qualification
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header