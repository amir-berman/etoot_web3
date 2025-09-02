import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HardwareShowcase from '@/components/HardwareShowcase'
import ClientsSection from '@/components/Clients'
import FAQSection from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import CookieConsent from '@/components/CookieConsent'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HardwareShowcase />
      <ClientsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </main>
  )
}
