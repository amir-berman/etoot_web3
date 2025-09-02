'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Thermometer, 
  Brain, 
  Zap, 
  Bell, 
  Smartphone,
  TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Thermometer,
    title: 'ניטור טמפרטורה',
    description: 'פתרון ה-IoT שלנו מאפשר לך לנטר בקלות את הטמפרטורה ולשמור על תנאים אופטימליים לעסק שלך. עם הנתב המאובטח שלנו, חיישנים אמינים ואפליקציית ניהול מותאמת, תוכלו להבטיח את הפעילות היום-יומית.',
    color: 'from-accent-neon to-accent-cyber'
  },
  {
    icon: Brain,
    title: 'חיזוי דעיכה בביצועים',
    description: 'איתות משתמשת בבינה מלאכותית כדי ללמוד את מערכות הקירור שלכם ותתאים עצמה כדי למנוע התראות שווא בשגרה — טעינת סחורות, מצבי הפשרה ועוד.',
    color: 'from-accent-purple to-accent-neon'
  },
  {
    icon: Zap,
    title: 'ניטור רשת החשמל',
    description: 'המערכת מתחברת לרשת החשמל וזו מתריעה על ניתוקים בזמן אמת. מערכת אלחוטית לניטור חיישנים לניטור מרחוק.',
    color: 'from-accent-orange to-accent-neon'
  },
  {
    icon: Bell,
    title: 'מערכת התראות חכמה',
    description: 'התראות ממוקדות, משלבות פרוטוקול אסקלציה בעלות התאמה אישית ואפשרויות הגדרה גמישות.',
    color: 'from-accent-cyber to-accent-purple'
  },
  {
    icon: Smartphone,
    title: 'אפליקציה לניהול וגיבוי נתונים',
    description: 'ממשק נוח לניהול והגדרת כל חיישן בנפרד, גיבוי מידע וגישה להיסטוריית נתונים בכל זמן. מעקב אחר בקר ניטור טמפרטורה וחיישני טמפרטורה.',
    color: 'from-accent-neon to-accent-orange'
  },
  {
    icon: TrendingUp,
    title: 'ניתוח מתקדם',
    description: 'גרפים מתקדמים לניתוח מגמות, זיהוי דפוסים וחיזוי בעיות עתידיות. דוחות מפורטים לעמידה בתקני HACCP ורגולציות.',
    color: 'from-accent-purple to-accent-cyber'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    }
  }
}

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="section bg-dark-900/50">
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
            מתקדמים לאיתות
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            פתרונות IoT מתקדמים לניטור טמפרטורה חכם עם התראות בזמן אמת ובקרה מרחוק
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:shadow-glow transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={cn(
                  "w-16 h-16 rounded-xl bg-gradient-to-r flex items-center justify-center mb-4",
                  feature.color
                )}>
                  <feature.icon size={32} className="text-dark-950" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent-neon transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-dark-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-neon/5 to-accent-cyber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
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
            התחל עכשיו
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
