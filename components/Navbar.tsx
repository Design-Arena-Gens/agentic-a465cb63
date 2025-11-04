'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark text-white py-2 px-4 text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-primary transition">
              <Phone size={14} />
              +91 99999 99999
            </a>
            <a href="mailto:info@aayamarts.com" className="flex items-center gap-2 hover:text-primary transition">
              <Mail size={14} />
              info@aayamarts.com
            </a>
          </div>
          <div className="text-light">
            Transforming Visions into Virtual Reality
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl md:text-3xl font-bold">
              <span className={`gradient-text ${!scrolled && 'text-white'}`}>Aayam</span>
              <span className={scrolled ? 'text-dark' : 'text-white'}>Arts</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition hover:text-primary ${scrolled ? 'text-dark' : 'text-white'}`}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact">
                <button className="btn-primary">
                  Book Demo Now
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden ${scrolled ? 'text-dark' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg mt-4">
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark font-medium hover:text-primary transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <button className="btn-primary w-full">
                  Book Demo Now
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
