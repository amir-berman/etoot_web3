'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Settings, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'x-large'
  highContrast: boolean
  reducedMotion: boolean
  underlineLinks: boolean
}

export default function Footer() {
  const [showAccessibility, setShowAccessibility] = useState(false)
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('accessibility-settings')
      return saved ? JSON.parse(saved) : {
        fontSize: 'normal',
        highContrast: false,
        reducedMotion: false,
        underlineLinks: false
      }
    }
    return {
      fontSize: 'normal',
      highContrast: false,
      reducedMotion: false,
      underlineLinks: false
    }
  })

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updated = { ...settings, ...newSettings }
    setSettings(updated)
    localStorage.setItem('accessibility-settings', JSON.stringify(updated))
    
    // Apply settings
    document.documentElement.style.fontSize = 
      updated.fontSize === 'large' ? '1.1rem' : 
      updated.fontSize === 'x-large' ? '1.2rem' : '1rem'
    
    document.documentElement.classList.toggle('high-contrast', updated.highContrast)
    document.documentElement.classList.toggle('reduced-motion', updated.reducedMotion)
    document.documentElement.classList.toggle('underline-links', updated.underlineLinks)
  }

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-neon to-accent-cyber rounded-lg flex items-center justify-center">
                <span className="text-dark-950 font-bold text-lg">א</span>
              </div>
              <span className="text-xl font-bold gradient-text">איתות</span>
            </div>
            <p className="text-dark-300 mb-4 max-w-md">
              פתרונות IoT מתקדמים לניטור טמפרטורה חכם עם התראות בזמן אמת ובקרה מרחוק לעסקים.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-dark-400 hover:text-accent-neon transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-dark-400 hover:text-accent-neon transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-dark-400 hover:text-accent-neon transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-dark-300 hover:text-accent-neon transition-colors">בית</a></li>
              <li><a href="#features" className="text-dark-300 hover:text-accent-neon transition-colors">תכונות</a></li>
              <li><a href="#hardware" className="text-dark-300 hover:text-accent-neon transition-colors">חומרה</a></li>
              <li><a href="#clients" className="text-dark-300 hover:text-accent-neon transition-colors">לקוחות</a></li>
              <li><a href="#faq" className="text-dark-300 hover:text-accent-neon transition-colors">שאלות נפוצות</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">משפטי</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-dark-300 hover:text-accent-neon transition-colors">תקנון שימוש</a></li>
              <li><a href="/privacy" className="text-dark-300 hover:text-accent-neon transition-colors">הצהרת פרטיות</a></li>
              <li><a href="/cookies" className="text-dark-300 hover:text-accent-neon transition-colors">מדיניות עוגיות</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">
            © 2024 איתות - Etoot. כל הזכויות שמורות.
          </p>
          
          {/* Accessibility Button */}
          <motion.button
            onClick={() => setShowAccessibility(!showAccessibility)}
            className="flex items-center space-x-2 space-x-reverse mt-4 md:mt-0 px-4 py-2 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings size={16} className="text-accent-neon" />
            <span className="text-sm text-white">נגישות</span>
          </motion.button>
        </div>
      </div>

      {/* Accessibility Panel */}
      {showAccessibility && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:w-80 bg-dark-900 border border-dark-700 rounded-lg shadow-lg z-50"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">הגדרות נגישות</h3>
              <button
                onClick={() => setShowAccessibility(false)}
                className="text-dark-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {/* Font Size */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">גודל טקסט</label>
                <div className="flex space-x-2 space-x-reverse">
                  {(['normal', 'large', 'x-large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSettings({ fontSize: size })}
                      className={cn(
                        "px-3 py-1 rounded text-sm transition-colors",
                        settings.fontSize === size
                          ? "bg-accent-neon text-dark-950"
                          : "bg-dark-800 text-dark-300 hover:text-white"
                      )}
                    >
                      {size === 'normal' ? 'רגיל' : size === 'large' ? 'גדול' : 'גדול מאוד'}
                    </button>
                  ))}
                </div>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">ניגודיות גבוהה</span>
                <button
                  onClick={() => updateSettings({ highContrast: !settings.highContrast })}
                  className={cn(
                    "w-12 h-6 rounded-full transition-colors",
                    settings.highContrast ? "bg-accent-neon" : "bg-dark-700"
                  )}
                >
                  <div className={cn(
                    "w-4 h-4 bg-white rounded-full transition-transform",
                    settings.highContrast ? "translate-x-6" : "translate-x-1"
                  )} />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">הפחתת אנימציות</span>
                <button
                  onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
                  className={cn(
                    "w-12 h-6 rounded-full transition-colors",
                    settings.reducedMotion ? "bg-accent-neon" : "bg-dark-700"
                  )}
                >
                  <div className={cn(
                    "w-4 h-4 bg-white rounded-full transition-transform",
                    settings.reducedMotion ? "translate-x-6" : "translate-x-1"
                  )} />
                </button>
              </div>

              {/* Underline Links */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">קו תחתון לקישורים</span>
                <button
                  onClick={() => updateSettings({ underlineLinks: !settings.underlineLinks })}
                  className={cn(
                    "w-12 h-6 rounded-full transition-colors",
                    settings.underlineLinks ? "bg-accent-neon" : "bg-dark-700"
                  )}
                >
                  <div className={cn(
                    "w-4 h-4 bg-white rounded-full transition-transform",
                    settings.underlineLinks ? "translate-x-6" : "translate-x-1"
                  )} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </footer>
  )
}
