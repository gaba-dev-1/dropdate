import { Header } from '@/components/layout/header'
import { Hero } from '@/components/layout/hero'
import { Calendar } from '@/components/calendar/calendar'
import { ApiFeatures } from '@/components/layout/api-features'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Calendar />
        <ApiFeatures />
      </main>
      <Footer />
    </>
  )
}
