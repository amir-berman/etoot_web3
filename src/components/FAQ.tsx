'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'איך מערכת ניטור הטמפרטורה של איתות עובדת?',
    answer: 'מערכת איתות כוללת חיישני טמפרטורה אלחוטיים המתחברים לנתב מאובטח. הנתונים נשלחים לאפליקציה לניהול בזמן אמת עם התראות חכמות. המערכת מתחברת לרשת החשמל ומתריעה על ניתוקים בזמן אמת.'
  },
  {
    question: 'האם אפשר לקבל התראות בזמן אמת על חריגה בטמפרטורה?',
    answer: 'כן, המערכת מספקת התראות מיידיות דרך האפליקציה, SMS או אימייל כאשר הטמפרטורה חורגת מהטווח המוגדר. התראות ממוקדות עם פרוטוקול אסקלציה בעלות התאמה אישית.'
  },
  {
    question: 'האם החיישנים אלחוטיים ומתאימים למקררים ומקפיאים תעשייתיים?',
    answer: 'כן, החיישנים שלנו אלחוטיים ומותאמים במיוחד לעבודה בטמפרטורות נמוכות של מקררים ומקפיאים תעשייתיים. הם עמידים בתנאים קשים ומספקים מדידות מדויקות.'
  },
  {
    question: 'האם יש היסטוריית נתונים וגרפים לניתוח?',
    answer: 'כן, האפליקציה מספקת היסטוריית נתונים מלאה עם גרפים מתקדמים לניתוח מגמות וזיהוי דפוסים. גיבוי מידע וגישה להיסטוריית נתונים בכל זמן.'
  },
  {
    question: 'האם המערכת תואמת תקני HACCP ורגולציות בתעשיית המזון?',
    answer: 'כן, המערכת עומדת בתקני HACCP ומספקת תיעוד מלא הנדרש לעמידה ברגולציות בתעשיית המזון. דוחות מפורטים לבדיקות רגולטוריות.'
  },
  {
    question: 'איך מתבצע חיבור לרשת החשמל והתראה על ניתוקים?',
    answer: 'המערכת מתחברת לרשת החשמל ומתריעה על ניתוקים בזמן אמת. מערכת אלחוטית לניטור חיישנים לניטור מרחוק עם גיבוי סוללות.'
  },
  {
    question: 'האם קיימת אפליקציה לניהול חיישנים, משתמשים והרשאות?',
    answer: 'כן, ממשק נוח לניהול והגדרת כל חיישן בנפרד, גיבוי מידע וגישה להיסטוריית נתונים בכל זמן. מעקב אחר בקר ניטור טמפרטורה וחיישני טמפרטורה.'
  },
  {
    question: 'איך עובדים מנגנוני חיזוי והפחתת התראות שווא?',
    answer: 'איתות משתמשת בבינה מלאכותית כדי ללמוד את מערכות הקירור שלכם ותתאים עצמה כדי למנוע התראות שווא בשגרה — טעינת סחורות, מצבי הפשרה ועוד.'
  },
  {
    question: 'האם יש API לאינטגרציה עם מערכות קיימות (ERP/WMS)?',
    answer: 'כן, המערכת מספקת API מתקדם לאינטגרציה עם מערכות ERP ו-WMS קיימות. אפשרות לשלב את הנתונים עם מערכות הניהול שלכם.'
  },
  {
    question: 'מה נדרש להתקנה וכמה זמן זה לוקח?',
    answer: 'התקנת המערכת פשוטה ומהירה. נדרש חיבור חשמל וחיבור לאינטרנט. זמן התקנה טיפוסי הוא 2-4 שעות כולל הגדרת החיישנים והאפליקציה.'
  }
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-dark-800/50">
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
            שאלות נפוצות
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            תשובות לשאלות נפוצות על מערכת ניטור הטמפרטורה של איתות
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card border border-dark-700 hover:border-accent-neon transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-right"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <ChevronUp size={24} className="text-accent-neon" />
                    ) : (
                      <ChevronDown size={24} className="text-dark-300" />
                    )}
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-dark-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-dark-300 mb-6">
            לא מצאת את התשובה שחיפשת?
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            צור קשר עם הצוות שלנו
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
