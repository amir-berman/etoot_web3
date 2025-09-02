'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, Calendar, CheckCircle } from 'lucide-react'
import ContactForm from './ContactForm'

const benefits = [
  {
    icon: CheckCircle,
    title: 'חיסכון',
    description: 'חיסכון משמעותי בזמן וכסף על ידי מניעת נזקים'
  },
  {
    icon: CheckCircle,
    title: 'מניעת נזקים',
    description: 'התראות בזמן אמת מונעות נזקים לסחורה'
  },
  {
    icon: CheckCircle,
    title: 'שקיפות',
    description: 'מעקב מלא וניטור שקוף של כל המערכות'
  }
]

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="section bg-dark-900/50">
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
              יצירת קשר
            </h2>
            
            <p className="text-lg text-dark-300 mb-8 leading-relaxed">
              מוכנים להתחיל? צרו איתנו קשר וקבלו פתרון מותאם אישית לניטור טמפרטורה חכם לעסק שלכם.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-center space-x-3 space-x-reverse"
                >
                  <div className="w-6 h-6 bg-accent-neon rounded-full flex items-center justify-center">
                    <benefit.icon size={16} className="text-dark-950" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                    <p className="text-sm text-dark-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-3 space-x-reverse"
              >
                <div className="w-10 h-10 bg-accent-neon/20 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-accent-neon" />
                </div>
                <div>
                  <p className="text-sm text-dark-300">טלפון</p>
                  <p className="text-white font-medium">+972-50-000-0000</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center space-x-3 space-x-reverse"
              >
                <div className="w-10 h-10 bg-accent-cyber/20 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-accent-cyber" />
                </div>
                <div>
                  <p className="text-sm text-dark-300">אימייל</p>
                  <p className="text-white font-medium">info@etoot.co.il</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-3 space-x-reverse"
              >
                <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                  <Calendar size={20} className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-sm text-dark-300">שעות פעילות</p>
                  <p className="text-white font-medium">א&apos;-ה&apos; 09:00-18:00</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                השאירו פרטים
              </h3>
              <ContactForm
                onSuccess={() => {
                  // Handle success
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-neon/10 to-accent-cyber/10 rounded-2xl p-8 border border-accent-neon/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              מוכנים להתחיל?
            </h3>
            <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
              קבלו הצעת מחיר מותאמת אישית וקביעת פגישה עם מומחה שלנו
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              קביעת פגישה
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
