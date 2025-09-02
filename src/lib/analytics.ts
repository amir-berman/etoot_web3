'use client'

import { useEffect } from 'react'

// Cookie consent types
export type ConsentType = 'accept' | 'decline' | null

// Analytics providers
export const ANALYTICS_PROVIDERS = {
  GA4: 'ga4',
  POSTHOG: 'posthog',
} as const

export type AnalyticsProvider = typeof ANALYTICS_PROVIDERS[keyof typeof ANALYTICS_PROVIDERS]

// Cookie consent management
export const getConsent = (): ConsentType => {
  if (typeof window === 'undefined') return null
  return (localStorage.getItem('cookie-consent') as ConsentType) || null
}

export const setConsent = (consent: ConsentType): void => {
  if (typeof window === 'undefined') return
  localStorage.setItem('cookie-consent', consent || '')
}

export const hasConsent = (): boolean => {
  return getConsent() === 'accept'
}

// GA4 Analytics
export const initGA4 = () => {
  if (typeof window === 'undefined' || !hasConsent()) return

  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID
  if (!ga4Id) return

  // Load GA4 script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`
  document.head.appendChild(script)

  // Initialize GA4
  ;(window as any).dataLayer = (window as any).dataLayer || []
  function gtag(...args: any[]) {
    ;(window as any).dataLayer.push(args)
  }
  gtag('js', new Date())
  gtag('config', ga4Id, {
    page_title: document.title,
    page_location: window.location.href,
  })

  // Make gtag available globally
  ;(window as any).gtag = gtag
}

// PostHog Analytics
export const initPostHog = () => {
  if (typeof window === 'undefined' || !hasConsent()) return

  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'
  
  if (!posthogKey) return

  // Load PostHog script
  const script = document.createElement('script')
  script.async = true
  script.src = `${posthogHost}/static/array.js`
  document.head.appendChild(script)

  script.onload = () => {
    // Initialize PostHog
    ;(window as any).posthog.init(posthogKey, {
      api_host: posthogHost,
      loaded: (posthog: any) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      },
    })
  }
}

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined') return

  // GA4 page view
  if (hasConsent() && (window as any).gtag) {
    ;(window as any).gtag('config', process.env.NEXT_PUBLIC_GA4_ID, {
      page_path: url,
    })
  }

  // PostHog page view
  if (hasConsent() && (window as any).posthog) {
    ;(window as any).posthog.capture('$pageview', {
      $current_url: url,
    })
  }
}

// Event tracking
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined' || !hasConsent()) return

  // GA4 event
  if ((window as any).gtag) {
    ;(window as any).gtag('event', eventName, properties)
  }

  // PostHog event
  if ((window as any).posthog) {
    ;(window as any).posthog.capture(eventName, properties)
  }
}

// Hook for analytics initialization
export const useAnalytics = () => {
  useEffect(() => {
    if (hasConsent()) {
      initGA4()
      initPostHog()
    }
  }, [])

  useEffect(() => {
    if (hasConsent()) {
      trackPageView(window.location.pathname)
    }
  }, [])
}

// Check if analytics providers are configured
export const hasAnalyticsProviders = (): boolean => {
  return !!(process.env.NEXT_PUBLIC_GA4_ID || process.env.NEXT_PUBLIC_POSTHOG_KEY)
}
