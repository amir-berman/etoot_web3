'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import { getConsent, setConsent, hasAnalyticsProviders } from '@/lib/analytics'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show banner if analytics providers are configured and no consent given
    if (hasAnalyticsProviders() && !getConsent()) {
      setShowBanner(true)
      // Small delay to ensure smooth animation
      setTimeout(() => setIsVisible(true), 100)
    }
  }, [])

  const handleAccept = () => {
    setConsent('accept')
    setShowBanner(false)
    setIsVisible(false)
    // Reload page to initialize analytics
    window.location.reload()
  }

  const handleDecline = () => {
    setConsent('decline')
    setShowBanner(false)
    setIsVisible(false)
  }

  const handleClose = () => {
    setShowBanner(false)
    setIsVisible(false)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-dark-900 border-t border-dark-700 shadow-lg"
        >
          <div className="container-custom px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
              {/* Content */}
              <div className="flex items-start space-x-3 space-x-reverse">
                <Cookie size={24} className="text-accent-neon flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    עוגיות ופרטיות
                  </h3>
                  <p className="text-dark-300 text-sm max-w-2xl">
                    אנו משתמשים בעוגיות כדי לשפר את החוויה שלך באתר ולנתח את השימוש בו. 
                    הנתונים נאספים באופן אנונימי ומשמשים לשיפור השירות שלנו.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3 space-x-reverse">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-sm text-dark-300 hover:text-white transition-colors"
                >
                  דחה
                </button>
                <motion.button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-accent-neon text-dark-950 font-medium rounded-lg hover:bg-accent-neon/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  קבל
                </motion.button>
                <button
                  onClick={handleClose}
                  className="p-2 text-dark-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
