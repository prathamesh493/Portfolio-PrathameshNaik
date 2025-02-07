"use client"

import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"
import { motion } from "framer-motion"
import type React from "react"
import Link from "next/link"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-300 dark:bg-gray-300 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo or Name */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Prathamesh Naik</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="hero">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="projects">Projects</NavLink>

          {/* Download Resume Button */}
          <a
          href="/PrathameshNaik-Resume-v3 (1).pdf" // Ensure the file is in the public folder
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          download="PrathameshNaik-Resume-v3 (1).pdf"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6 text-gray-900 dark:text-white" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg py-4 space-y-2 text-center"
        >
          <NavLink to="hero" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="contact" onClick={() => setIsOpen(false)}>Contact</NavLink>

          {/* Download Resume Button in Mobile Menu */}
          <a
          href="/PrathameshNaik-Resume-v3 (1).pdf" // Ensure the file is in the public folder
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          download="PrathameshNaik-Resume-v3 (1).pdf"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </header>
  )
}

/* NavLink Component for Smooth Scrolling */
const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={500}
    className="block py-2 px-4 text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition duration-200 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </ScrollLink>
)

export default Header
