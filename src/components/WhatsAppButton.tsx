'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.links.whatsapp
    const message = encodeURIComponent('שלום! אני מעוניין במידע נוסף על מערכת ניטור הטמפרטורה של איתות.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle size={24} />
      
      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-dark-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
      >
        צ&apos;אט WhatsApp
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-dark-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>
    </motion.button>
  )
}
