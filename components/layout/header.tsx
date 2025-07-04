"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const DropdateLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Simple DD design */}
    <rect width="48" height="48" rx="8" fill="#3B82F6"/>
    
    {/* First D */}
    <path
      d="M8 12C8 10.8954 8.89543 10 10 10H18C23.5228 10 28 14.4772 28 20V28C28 33.5228 23.5228 38 18 38H10C8.89543 38 8 37.1046 8 36V12Z"
      fill="white"
    />
    <path
      d="M12 16C12 15.4477 12.4477 15 13 15H17C19.7614 15 22 17.2386 22 20V28C22 30.7614 19.7614 33 17 33H13C12.4477 33 12 32.5523 12 32V16Z"
      fill="#3B82F6"
    />
    
    {/* Second D */}
    <path
      d="M20 12C20 10.8954 20.8954 10 22 10H30C35.5228 10 40 14.4772 40 20V28C40 33.5228 35.5228 38 30 38H22C20.8954 38 20 37.1046 20 36V12Z"
      fill="white"
    />
    <path
      d="M24 16C24 15.4477 24.4477 15 25 15H29C31.7614 15 34 17.2386 34 20V28C34 30.7614 31.7614 33 29 33H25C24.4477 33 24 32.5523 24 32V16Z"
      fill="#3B82F6"
    />
  </svg>
)

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Calendar", href: "/#calendar" },
    { name: "API", href: "/#api" },
    { name: "Docs", href: "/docs" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-soft dark:bg-gray-900/95 dark:border-gray-800" 
        : "bg-transparent"
    }`}>
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group focus-ring rounded-lg px-3 py-2"
          >
            <DropdateLogo className="w-10 h-10 transition-transform duration-200 group-hover:scale-105" />
            <span className="logo-text text-primary-600">
              Dropdate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-base font-medium text-muted hover:text-gray-900 dark:hover:text-white transition-colors focus-ring rounded-lg px-3 py-2"
              >
                {item.name}
              </Link>
            ))}
            
            <Link href="/docs" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-lg text-muted hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-all focus-ring"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 backdrop-blur-sm dark:bg-gray-900/95">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block px-4 py-3 text-base font-medium text-muted hover:text-gray-900 hover:bg-gray-50 rounded-lg dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors focus-ring"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/docs"
                className="block w-full text-center mt-4 btn-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
