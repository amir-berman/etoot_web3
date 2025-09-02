import { Metadata } from 'next'

export const siteConfig = {
  name: 'איתות - Etoot',
  description: 'ניטור טמפרטורה חכם עם התראות בזמן אמת ו-IoT לעסקים',
  url: process.env.SITE_URL || 'https://etoot.co.il',
  ogImage: '/og-image.jpg',
  links: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '972500000000',
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: 'איתות - ניטור טמפרטורה חכם | Etoot',
    template: '%s | איתות - Etoot',
  },
  description: 'איתות חוסכת לעסק זמן וכסף על ידי ניטור והתראה בזיהוי אנומליה בזמן אמת. פתרונות IoT מתקדמים לניטור טמפרטורה, התראות חכמות ובקרה מרחוק.',
  keywords: [
    'ניטור טמפרטורה',
    'IoT',
    'התראות בזמן אמת',
    'חיישני טמפרטורה',
    'בקרת טמפרטורה',
    'תעשיית המזון',
    'HACCP',
    'איתות',
    'Etoot',
  ],
  authors: [{ name: 'איתות - Etoot' }],
  creator: 'איתות - Etoot',
  publisher: 'איתות - Etoot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: siteConfig.url,
    title: 'איתות - ניטור טמפרטורה חכם | Etoot',
    description: 'איתות חוסכת לעסק זמן וכסף על ידי ניטור והתראה בזיהוי אנומליה בזמן אמת. פתרונות IoT מתקדמים לניטור טמפרטורה, התראות חכמות ובקרה מרחוק.',
    siteName: 'איתות - Etoot',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'איתות - ניטור טמפרטורה חכם',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'איתות - ניטור טמפרטורה חכם | Etoot',
    description: 'איתות חוסכת לעסק זמן וכסף על ידי ניטור והתראה בזיהוי אנומליה בזמן אמת. פתרונות IoT מתקדמים לניטור טמפרטורה, התראות חכמות ובקרה מרחוק.',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: 'איתות - Etoot',
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/logo.png`,
        },
        description: 'חברת IoT ישראלית המתמחה בניטור טמפרטורה חכם עם התראות בזמן אמת',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IL',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${siteConfig.links.whatsapp}`,
          contactType: 'customer service',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: 'איתות - Etoot',
        description: 'ניטור טמפרטורה חכם עם התראות בזמן אמת ו-IoT לעסקים',
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'איך מערכת ניטור הטמפרטורה של איתות עובדת?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'מערכת איתות כוללת חיישני טמפרטורה אלחוטיים המתחברים לנתב מאובטח. הנתונים נשלחים לאפליקציה לניהול בזמן אמת עם התראות חכמות.',
            },
          },
          {
            '@type': 'Question',
            name: 'האם אפשר לקבל התראות בזמן אמת על חריגה בטמפרטורה?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'כן, המערכת מספקת התראות מיידיות דרך האפליקציה, SMS או אימייל כאשר הטמפרטורה חורגת מהטווח המוגדר.',
            },
          },
          {
            '@type': 'Question',
            name: 'האם החיישנים אלחוטיים ומתאימים למקררים ומקפיאים תעשייתיים?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'כן, החיישנים שלנו אלחוטיים ומותאמים במיוחד לעבודה בטמפרטורות נמוכות של מקררים ומקפיאים תעשייתיים.',
            },
          },
          {
            '@type': 'Question',
            name: 'האם יש היסטוריית נתונים וגרפים לניתוח?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'כן, האפליקציה מספקת היסטוריית נתונים מלאה עם גרפים מתקדמים לניתוח מגמות וזיהוי דפוסים.',
            },
          },
          {
            '@type': 'Question',
            name: 'האם המערכת תואמת תקני HACCP ורגולציות בתעשיית המזון?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'כן, המערכת עומדת בתקני HACCP ומספקת תיעוד מלא הנדרש לעמידה ברגולציות בתעשיית המזון.',
            },
          },
        ],
      },
    ],
  }
}
