'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, User, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactSchema = z.object({
  fullName: z.string().min(2, 'שם מלא חייב להכיל לפחות 2 תווים'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  phone: z.string().min(9, 'מספר טלפון חייב להכיל לפחות 9 ספרות'),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  onSuccess?: () => void
  className?: string
}

export default function ContactForm({ onSuccess, className = '' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        onSuccess?.()
      } else {
        const errorData = await response.json()
        setSubmitStatus('error')
        setErrorMessage(errorData.message || 'אירעה שגיאה בשליחת ההודעה')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('אירעה שגיאה בשליחת ההודעה')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8"
        >
          <CheckCircle size={64} className="text-accent-neon mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">תודה!</h3>
          <p className="text-dark-300 mb-6">
            ההודעה נשלחה בהצלחה. נציג שלנו יצור איתך קשר בהקדם.
          </p>
          <motion.button
            onClick={() => setSubmitStatus('idle')}
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            שלח הודעה נוספת
          </motion.button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
              שם מלא *
            </label>
            <div className="relative">
              <User size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
              <input
                {...register('fullName')}
                type="text"
                id="fullName"
                className="w-full pr-12 pl-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-neon transition-colors"
                placeholder="הכנס את שמך המלא"
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              אימייל *
            </label>
            <div className="relative">
              <Mail size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full pr-12 pl-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-neon transition-colors"
                placeholder="הכנס את כתובת האימייל שלך"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              טלפון *
            </label>
            <div className="relative">
              <Phone size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full pr-12 pl-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-neon transition-colors"
                placeholder="הכנס את מספר הטלפון שלך"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              הודעה (אופציונלי)
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-accent-neon transition-colors resize-none"
              placeholder="ספר לנו על הצרכים שלך..."
            />
          </div>

          {/* Error Message */}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 space-x-reverse p-4 bg-red-900/20 border border-red-500 rounded-lg"
            >
              <AlertCircle size={20} className="text-red-400" />
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center space-x-2 space-x-reverse disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>שולח...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>שלח הודעה</span>
              </>
            )}
          </motion.button>
        </form>
      )}
    </div>
  )
}
