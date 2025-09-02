# איתות - Etoot Website

אתר שיווקי מודרני לחברת איתות (Etoot) - חברת IoT ישראלית המתמחה בניטור טמפרטורה חכם עם התראות בזמן אמת.

## 🚀 תכונות

- **עיצוב מודרני ופוטוריסטי** עם אנימציות מתקדמות
- **תמיכה מלאה ב-RTL** ועברית
- **נגישות מתקדמת** עם הגדרות מותאמות אישית
- **SEO מיטבי** עם נתונים מובנים ו-meta tags
- **אנליטיקס מתקדם** עם Vercel Analytics, GA4 ו-PostHog
- **טופס יצירת קשר** עם ולידציה ושליחת אימייל
- **PWA מוכן** עם manifest ו-icons
- **ביצועים מעולים** עם Lighthouse Score גבוה

## 🛠️ טכנולוגיות

- **Next.js 15** עם App Router
- **TypeScript 5.x**
- **Tailwind CSS** עם design tokens
- **Framer Motion** לאנימציות
- **React Hook Form + Zod** לוולידציה
- **Lucide React** לאייקונים
- **Vercel Analytics & Speed Insights**

## 📦 התקנה

```bash
# Clone the repository
git clone <repository-url>
cd etoot-web3

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🔧 הגדרות סביבה

צור קובץ `.env.local` עם המשתנים הבאים:

```env
# Site Configuration
SITE_URL=https://etoot.co.il
NEXT_PUBLIC_WHATSAPP_NUMBER=972500000000

# Analytics (Optional)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_xxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# Email (Optional - for contact form)
RESEND_API_KEY=re_xxx
# OR
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@etoot.co.il
TO_EMAIL=info@etoot.co.il
```

## 📁 מבנה הפרויקט

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── layout.tsx              # Root layout with RTL
│   ├── page.tsx                # Main page
│   ├── robots.ts               # Robots.txt
│   └── sitemap.ts              # Sitemap.xml
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── HeroSection.tsx         # Hero with animated background
│   ├── FeaturesSection.tsx     # Features showcase
│   ├── HardwareShowcase.tsx    # Hardware & app demo
│   ├── Clients.tsx             # Clients & testimonials
│   ├── FAQ.tsx                # FAQ accordion
│   ├── CTASection.tsx          # Contact section
│   ├── Footer.tsx              # Footer with accessibility
│   ├── WhatsAppButton.tsx     # Floating WhatsApp button
│   ├── CookieConsent.tsx       # Cookie consent banner
│   └── ContactForm.tsx         # Contact form component
└── lib/
    ├── analytics.ts            # Analytics utilities
    ├── seo.ts                  # SEO utilities
    └── utils.ts                # General utilities
```

## 🎨 עיצוב

האתר משתמש ב-design system מותאם עם:

- **צבעים**: בסיס כהה עם אקצנטים ניאון (ירוק, כחול, סגול)
- **טיפוגרפיה**: Heebo font לעברית
- **אנימציות**: Framer Motion עם תמיכה ב-reduced motion
- **נגישות**: WCAG AA compliance עם הגדרות מותאמות אישית

## 📊 אנליטיקס

האתר כולל אנליטיקס מתקדם:

1. **Vercel Analytics** - מופעל כברירת מחדל (ללא עוגיות)
2. **Google Analytics 4** - אופציונלי עם הסכמת עוגיות
3. **PostHog** - אופציונלי עם הסכמת עוגיות

## 🚀 פריסה

### Vercel (מומלץ)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy to Netlify
```

## 📝 סקריפטים זמינים

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
npm run type-check   # TypeScript check
npm run format       # Prettier format
npm run test         # Unit tests
npm run test:e2e     # E2E tests
```

## 🎯 Lighthouse Score

האתר מתוכנן להשיג:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🔧 התאמות אישיות

### הוספת לוגו
החלף את הלוגו ב-`src/components/Header.tsx` ו-`src/components/Footer.tsx`

### הוספת תמונות חומרה
הוסף תמונות ל-`public/hardware/` ועדכן את `HardwareShowcase.tsx`

### הוספת לוגואים לקוחות
הוסף לוגואים ל-`public/clients/` ועדכן את `Clients.tsx`

### שינוי צבעים
עדכן את ה-design tokens ב-`tailwind.config.ts`

## 📞 תמיכה

לשאלות ותמיכה טכנית:
- Email: dev@etoot.co.il
- WhatsApp: +972-50-000-0000

## 📄 רישיון

MIT License - ראה קובץ LICENSE לפרטים.

---

**איתות - פתרונות IoT מתקדמים לניטור טמפרטורה חכם** 🌡️
