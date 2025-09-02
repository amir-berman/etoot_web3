'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#home', label: 'בית' },
  { href: '#features', label: 'תכונות' },
  { href: '#hardware', label: 'חומרה' },
  { href: '#clients', label: 'לקוחות' },
  { href: '#faq', label: 'שאלות נפוצות' },
  { href: '#contact', label: 'צור קשר' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-dark-900/90 backdrop-blur-md border-b border-dark-700'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 space-x-reverse"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-accent-neon to-accent-cyber rounded-lg flex items-center justify-center">
              <span className="text-dark-950 font-bold text-lg">א</span>
            </div>
            <span className="text-xl font-bold gradient-text">איתות</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 relative',
                  activeSection === item.href.replace('#', '')
                    ? 'text-accent-neon'
                    : 'text-dark-300 hover:text-accent-neon'
                )}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-neon"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark-300 hover:text-accent-neon transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-md border-t border-dark-700"
          >
            <nav className="container-custom px-4 py-4">
              <div className="flex flex-col space-y-4 space-y-reverse">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className={cn(
                      'text-base font-medium py-2 px-4 rounded-lg transition-colors duration-200',
                      activeSection === item.href.replace('#', '')
                        ? 'text-accent-neon bg-accent-neon/10'
                        : 'text-dark-300 hover:text-accent-neon hover:bg-dark-800'
                    )}
                    whileHover={{ x: 8 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
