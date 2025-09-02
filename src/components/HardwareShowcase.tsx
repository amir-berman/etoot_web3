'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, Maximize2 } from 'lucide-react'

export default function HardwareShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="hardware" className="section bg-dark-800/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              פתרון ה-IoT + חומרה ואפליקציה
            </h2>
            
            <p className="text-lg text-dark-300 mb-8 leading-relaxed">
              איתות חוסכת לעסק זמן וכסף על ידי ניטור והתראה בזיהוי אנומליה בזמן אמת. איתות עוזרת למנוע נזקים ומפחיתה את הסיכון לפגיעה בסחורה. המערכת שלנו קלה להתקנה, לשימוש ולשילוב עם התשתיות הקיימות. אנו מפתחים ומשווקים מגוון פתרונות חישה ויודעים להתאים את השירות למידות העסק שלך.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-accent-neon rounded-full"></div>
                <span className="text-dark-200">חיישני טמפרטורה אלחוטיים מתקדמים</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-accent-cyber rounded-full"></div>
                <span className="text-dark-200">נתב מאובטח עם הצפנה מתקדמת</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-accent-purple rounded-full"></div>
                <span className="text-dark-200">אפליקציה לניהול ובקרה מרחוק</span>
              </div>
            </div>
          </motion.div>

          {/* Hardware Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Router */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 hover:border-accent-neon transition-colors">
                  <div className="aspect-square bg-gradient-to-br from-dark-600 to-dark-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-accent-neon/20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-accent-neon rounded-md"></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">נתב IoT</h3>
                  <p className="text-sm text-dark-300">נתב מאובטח עם חיבור אלחוטי מתקדם</p>
                </div>
                
                {/* Lightbox Trigger */}
                <button className="absolute top-4 right-4 p-2 bg-dark-800/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} className="text-accent-neon" />
                </button>
              </motion.div>

              {/* Sensor */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-dark-700 rounded-xl p-6 border border-dark-600 hover:border-accent-cyber transition-colors">
                  <div className="aspect-square bg-gradient-to-br from-dark-600 to-dark-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-accent-cyber/20 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-accent-cyber rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">חיישן טמפרטורה</h3>
                  <p className="text-sm text-dark-300">חיישן אלחוטי לניטור מדויק</p>
                </div>
                
                {/* Lightbox Trigger */}
                <button className="absolute top-4 right-4 p-2 bg-dark-800/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} className="text-accent-cyber" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* App Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              אפליקציה לניהול ובקרה
            </h3>
            <p className="text-lg text-dark-300">
              ממשק נוח לניהול חיישנים, התראות וניתוח נתונים
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-dark-900 rounded-[3rem] border-8 border-dark-700 p-2 relative">
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* App Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-accent-neon/10 to-transparent"></div>
                  
                  {/* Header */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-dark-800/80 backdrop-blur-sm border-b border-dark-700 flex items-center justify-between px-6">
                    <div className="text-white font-semibold">איתות</div>
                    <div className="w-8 h-8 bg-accent-neon rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute top-16 left-0 right-0 bottom-0 p-6">
                    {/* Temperature Chart */}
                    <div className="bg-dark-700 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-medium">ניטור טמפרטורה</span>
                        <span className="text-accent-neon text-sm">-18°C</span>
                      </div>
                      <div className="h-20 bg-dark-800 rounded-lg flex items-end justify-between px-2 py-2">
                        {[...Array(7)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-6 bg-gradient-to-t from-accent-neon to-accent-cyber rounded-t"
                            style={{ height: `${20 + Math.random() * 40}%` }}
                            animate={{ height: [`${20 + Math.random() * 40}%`, `${20 + Math.random() * 40}%`] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Alerts */}
                    <div className="bg-dark-700 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-medium">התראות</span>
                        <span className="text-accent-orange text-sm">2 חדשות</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 space-x-reverse p-2 bg-dark-800 rounded-lg">
                          <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                          <span className="text-sm text-dark-200">טמפרטורה חריגה במקפיא 1</span>
                        </div>
                        <div className="flex items-center space-x-3 space-x-reverse p-2 bg-dark-800 rounded-lg">
                          <div className="w-2 h-2 bg-accent-cyber rounded-full"></div>
                          <span className="text-sm text-dark-200">חיישן 3 דורש תחזוקה</span>
                        </div>
                      </div>
                    </div>

                    {/* Device List */}
                    <div className="bg-dark-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-medium">מכשירים</span>
                        <span className="text-accent-neon text-sm">5 פעילים</span>
                      </div>
                      <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-dark-800 rounded-lg">
                            <div className="flex items-center space-x-3 space-x-reverse">
                              <div className="w-3 h-3 bg-accent-neon rounded-full"></div>
                              <span className="text-sm text-dark-200">חיישן {i + 1}</span>
                            </div>
                            <span className="text-xs text-accent-cyber">פעיל</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <motion.button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent-neon rounded-full flex items-center justify-center shadow-glow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={24} className="text-dark-950 ml-1" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
