import Link from 'next/link'
import Image from 'next/image'
import { Barlow, Knewave, Chela_One, Press_Start_2P } from 'next/font/google'
import { FaArrowPointer } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineCelebration } from 'react-icons/md'
import FeatureCard from '@/components/Home/Feature/FeatureCard'
import FeatureBgCard from '@/components/Home/Feature/FeatureBgCard'
import MultipleNodeSupportFeature from './MultipleNodeSupportFeature'

import dragImg from '@/assets/drag-and-drop.png'
import spiralImg from '@/assets/spiral.png'
import trianglesImg from '@/assets/triangles.png'
import exportImg from '@/assets/export.png'

const barlow = Barlow({ weight: '800', subsets: ['latin'] })
const knewave = Knewave({ weight: '400', subsets: ['latin'] })
const chelaOne = Chela_One({ weight: '400', subsets: ['latin'] })
const pressStart2P = Press_Start_2P({ weight: '400', subsets: ['latin'] })

export default function FeatureSection() {
  return (
    <section className="container mx-auto p-4">
      <h1
        className={`text-5xl text-center my-4 font-bold text-primary-text mb-8 ${barlow.className}`}
      >
        Why Choose{' '}
        <span className={`text-brand-purple ${knewave.className}`}>Srot</span> ?
      </h1>
      <div className="grid grid-cols-6 grid-rows-3 xl:grid-rows-2 gap-3 h-[125vh] sm:h-full">
        <div className="col-span-1 row-span-1 hidden lg:block lg:col-span-3 xl:col-span-1 ">
          <FeatureCard
            title="Drag and Drop Editor"
            description="Create workflows with an easy-to-use drag-and-drop interface—no coding required."
            position="top"
          >
            <div className="flex justify-center items-center">
              <Image
                src={dragImg}
                width={100}
                height={100}
                className="rounded-xl motion-preset-seesaw drop-shadow-[0_35px_35px_rgb(var(--brand-light-pink))] transition-all duration-100"
                alt="drag"
              />
            </div>
          </FeatureCard>
        </div>
        <div className="col-start-1 col-span-6 row-span-1 sm:col-span-3 sm:row-span-1 lg:col-span-3 xl:col-span-2">
          <FeatureCard
            title="Collaboration Made Simple, With Real-Time Updates"
            description="Invite team members, share workflows, and manage tasks together in real time. Workflows are always up-to-date. Collaborate with your team in real time."
            position="bottom"
          >
            <div className="flex justify-center gap-4 items-center h-20">
              <div className="text-brand-purple motion-translate-x-loop-100 motion-translate-y-loop-50 motion-duration-2000 drop-shadow-[0_35px_35px_rgb(var(--brand-purple))] transition-all duration-100">
                <FaArrowPointer className="w-8 h-8 " />
                <span className="text-[9px] font-medium px-1 bg-slate-100 rounded-full">
                  Peter Jones
                </span>
              </div>
              <div className="text-brand-pink motion-translate-x-loop-75 motion-translate-y-loop-100 motion-duration-[4s] drop-shadow-[0_35px_35px_rgb(var(--brand-purple))] transition-all duration-100">
                <FaArrowPointer className="w-8 h-8 " />
                <span className="text-[9px] font-medium px-1 bg-slate-100 rounded-full">
                  John Doe
                </span>
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="hidden md:block col-span-3 row-span-1 xl:col-span-2">
          <FeatureCard title="" description="" position="top">
            <div className=" w-full h-full ">
              <MultipleNodeSupportFeature />
            </div>
          </FeatureCard>
        </div>
        <div className=" row-start-2 row-span-1 col-start-1 col-span-3 sm:col-span-3 sm:row-span-1 xl:col-span-1">
          <FeatureBgCard img={spiralImg}>
            <h2
              className={`text-2xl md:text-4xl text-center text-primary-text font-bold mb-4 ${chelaOne.className}`}
              style={{ textShadow: '0 0 5px rgba(0,0,0,0.3)' }}
            >
              Customizable Workflows
            </h2>
          </FeatureBgCard>
        </div>
        <div className="col-span-2 row-span-1 hidden sm:block sm:col-span-6 md:col-span-3 xl:col-span-2">
          <FeatureBgCard img={trianglesImg}>
            <div className="flex flex-col justify-center items-center">
              <h2
                className={`text-3xl text-center text-primary-text font-bold mb-4 motion-preset-typewriter-[11] motion-duration-[3s] ${pressStart2P.className}`}
                style={{ textShadow: '0 0 5px rgba(0,0,0,0.3)' }}
              >
                Open Source
              </h2>
              <Link href="/">
                <div className="flex flex-col justify-center items-center p-2 rounded-lg hover:bg-slate-900 hover:drop-shadow-[0_35px_35px_rgb(var(--brand-light-pink))] transition-all duration-100 motion-preset-seesaw">
                  <FaGithub className="w-16 h-16 text-primary-text" />
                </div>
              </Link>
            </div>
          </FeatureBgCard>
        </div>

        <div className=" row-start-2 row-span-1 col-start-4 col-span-3 sm:col-span-3 sm:row-span-1 xl:col-span-2">
          <FeatureCard
            title="Export Yours Workflows in Multiple Formats"
            description="Export your workflows in multiple formats like PNG, SVG, and PDF. Share your workflows with anyone, anywhere."
            position="top"
          >
            <div className="flex justify-center items-center motion-preset-stretch">
              <Image
                src={exportImg}
                width={100}
                height={100}
                className="rounded-xl transition-all duration-100"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(117, 78, 26, 0.5))'
                }}
                alt="drag"
              />
            </div>
          </FeatureCard>
        </div>

        <div className=" row-start-3 row-span-1 col-start-1 col-span-6 sm:col-span-3 sm:row-span-1 lg:col-start-2 lg:col-span-4 xl:col-span-2">
          <FeatureCard
            title="Get Started Quickly without Spending Any Money"
            description="Get started with Srot for free. No credit card required. Sign up for free and start creating workflows in minutes."
            position="bottom"
          >
            <div className="flex justify-center items-center mt-4">
              <Link
                href="/sign-up"
                className="active:translate-y-1 transition-all duration-100"
              >
                <span className=" flex items-center gap-2 overflow-hidden text-xl text-white px-6 py-4 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full hover:drop-shadow-[0_35px_35px_rgb(var(--brand-purple))] transition-all duration-100">
                  <MdOutlineCelebration className="w-6 h-6" />
                  <span className="">SignUp for Free</span>
                </span>
              </Link>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
