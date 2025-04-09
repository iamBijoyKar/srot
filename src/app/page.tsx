import Link from 'next/link'
import Image from 'next/image'
import { Barlow, Knewave } from 'next/font/google'
import Header from '@/components/Home/Header'
import HeroFlowNodes from '@/components/Home/HeroFlowNodes'
import FeatureSection from '@/components/Home/Feature/FeatureSection'
import ProductSS from '@/components/Home/ProductSS'
import KeyPoints from '@/components/Home/KeyPoints'
import PoweredBy from '@/components/Home/PoweredBy'
import Footer from '@/components/Home/Footer'

const barlow = Barlow({ weight: '800', subsets: ['latin'] })
const knewave = Knewave({ weight: '400', subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className="">
      <Header />
      <section className="container mx-auto p-4 flex justify-between items-center">
        <div className="mt-8">
          <h1
            className={`text-6xl leading-[5rem] font-bold text-primary-text ${barlow.className}`}
          >
            Design Workflows <br /> Effortlessly
          </h1>
          <p className="text-secondary-text mt-4 text-xl">
            Transform complex processes into simple, visual workflows <br />{' '}
            with our intuitive drag-and-drop editor.
          </p>
          <div className="flex flex-col gap-0 sm:flex-row sm:gap-4 items-center mt-4 text-primary-text text-xl">
            <Link
              href={'/'}
              className="mt-8 px-8 py-4 bg-brand-purple text-white bg-gradient-to-r  from-brand-pink to-brand-purple rounded-full hover:drop-shadow-[0_35px_35px_rgb(var(--brand-purple))] transition-all duration-100"
            >
              Get Started
            </Link>
            <Link
              href={'/'}
              className=" mt-8 px-8 py-4 text-primary-text rounded-full hover:text-brand-purple border border-[rgba(0,0,0,0)] hover:border-brand-pink hover:drop-shadow-[0_35px_35px_rgb(var(--brand-light-pink))] transition-all duration-100"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-[50vw] h-[80vh] text-slate-500 hidden lg:block">
          <HeroFlowNodes />
        </div>
      </section>
      <FeatureSection />
      <ProductSS />
      <KeyPoints />
      <PoweredBy />
      <Footer />
    </div>
  )
}
