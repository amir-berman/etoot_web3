'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const clients = [
  { name: 'חברת מזון גדולה', logo: '🍽️' },
  { name: 'רשת סופרמרקטים', logo: '🛒' },
  { name: 'מפעל תרופות', logo: '💊' },
  { name: 'חברת לוגיסטיקה', logo: '📦' },
  { name: 'רשת בתי חולים', logo: '🏥' },
  { name: 'חברת כימיקלים', logo: '🧪' },
]

const testimonials = [
  {
    name: 'דוד כהן',
    position: 'מנהל תפעול',
    company: 'חברת מזון גדולה',
    content: 'איתות שינתה את הדרך שבה אנחנו מנהלים את ניטור הטמפרטורה. ההתראות בזמן אמת חוסכות לנו אלפי שקלים בחודש ומבטיחות את איכות המוצרים שלנו.',
    rating: 5
  },
  {
    name: 'שרה לוי',
    position: 'מנהלת איכות',
    company: 'מפעל תרופות',
    content: 'המערכת של איתות עומדת בכל התקנים הנדרשים בתעשיית התרופות. האפליקציה נוחה לשימוש והנתונים מדויקים מאוד.',
    rating: 5
  },
  {
    name: 'יוסי רוזן',
    position: 'מנהל טכני',
    company: 'רשת סופרמרקטים',
    content: 'התקנת המערכת הייתה פשוטה והשילוב עם התשתיות הקיימות שלנו היה חלק. הצוות הטכני של איתות מקצועי מאוד.',
    rating: 5
  }
]

export default function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="clients" className="section bg-dark-900/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            התקדמו לאיתות
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            מאות עסקים כבר בחרו באיתות לניטור טמפרטורה חכם ובקרה מרחוק
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-accent-neon transition-colors group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {client.logo}
                </div>
                <h3 className="text-sm font-medium text-white text-center">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text">
              מה הלקוחות שלנו אומרים
            </h3>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Testimonial Card */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="card text-center p-8 md:p-12"
            >
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-dark-200 mb-8 leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-neon to-accent-cyber rounded-full flex items-center justify-center mb-4">
                  <span className="text-dark-950 font-bold text-lg">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-dark-300 text-sm">
                  {testimonials[currentTestimonial].position} • {testimonials[currentTestimonial].company}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4 space-x-reverse">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-dark-800 rounded-full border border-dark-700 hover:border-accent-neon transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} className="text-accent-neon" />
              </motion.button>

              {/* Dots */}
              <div className="flex space-x-2 space-x-reverse">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? 'bg-accent-neon'
                        : 'bg-dark-600 hover:bg-dark-500'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-dark-800 rounded-full border border-dark-700 hover:border-accent-neon transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} className="text-accent-neon" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            הצטרף ללקוחותינו
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
