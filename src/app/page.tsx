import Link from 'next/link'
import { RiArtboardLine } from 'react-icons/ri'
import { LuWorkflow } from 'react-icons/lu'
import { PiNotePencilBold } from 'react-icons/pi'
import { Barlow } from 'next/font/google'
import Header from '@/components/Home/Header'
import HeroFlowNodes from '@/components/Home/HeroFlowNodes'
import FeatureSection from '@/components/Home/Feature/FeatureSection'
import ProductSS from '@/components/Home/ProductSS'
import KeyPoints from '@/components/Home/KeyPoints'
import PoweredBy from '@/components/Home/PoweredBy'
import Footer from '@/components/Home/Footer'

const barlow = Barlow({ weight: '800', subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className="bg-primary-bg">
      <Header />
      <section className="container mx-auto px-4 flex justify-between items-center">
        <div className="">
          <h1
            className={`text-6xl leading-[5rem] font-bold text-primary-text pt-2 ${barlow.className}`}
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
          <div className="w-full h-full mt-10">
            <h3 className="text-md text-start font-medium text-slate-300 mb-2">
              Use Srot to build
            </h3>
            <div className="w-full flex items-center gap-2 mb-4">
              <div className="flex w-fit justify-center items-center gap-2 border border-slate-500/50 rounded-lg pr-2 py-1">
                <RiArtboardLine className="w-6 h-6 text-primary-text rotate-6 ml-2" />
                <p className="text-primary-text text-sm">Moodboard</p>
              </div>
              <div className="flex w-fit justify-center items-center gap-2 border border-slate-500/50 rounded-lg pr-2 py-1">
                <LuWorkflow className="w-6 h-6 text-primary-text ml-2" />
                <p className="text-primary-text text-sm">Flow Diagram</p>
              </div>
              <div className="flex w-fit justify-center items-center gap-2 border border-slate-500/50 rounded-lg pr-2 py-1">
                <PiNotePencilBold className="w-6 h-6 scale-95 text-primary-text ml-2" />
                <p className="text-primary-text text-sm">Notes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50vw] h-[75vh] text-slate-500 hidden lg:block">
          <HeroFlowNodes />
        </div>
      </section>
      <ProductSS />
      <FeatureSection />
      <KeyPoints />
      <PoweredBy />
      <Footer />
    </div>
  )
}
