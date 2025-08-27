import Head from 'next/head'
import Hero from '@/components/Hero'
import Spark from '@/components/Spark'
import Programs from '@/components/Programs'
import ImpactStats from '@/components/ImpactStats'
import Testimonials from '@/components/Testimonials'
import DonateCTA from '@/components/DonateCTA'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>LeadWise Foundation</title>
        <meta name="description" content="Igniting leadership & driving systemic change." />
      </Head>
      <main>
        <Hero />
        <Spark />
        <Programs />
        <ImpactStats />
        <Testimonials />
        <DonateCTA />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
