import Link from 'next/link'
import Image from 'next/image'
import { Barlow, Knewave, Chela_One, Press_Start_2P } from 'next/font/google'
import { FaArrowPointer } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import FeatureCard from '@/components/Home/Feature/FeatureCard'
import FeatureBgCard from '@/components/Home/Feature/FeatureBgCard'

import dragImg from '@/assets/drag-and-drop.png'
import textBoxImg from '@/assets/text-box.png'
import imgboxImg from '@/assets/imgbox.png'
import spiralImg from '@/assets/spiral.png'
import trianglesImg from '@/assets/triangles.png'

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
      <div className="grid grid-cols-6 grid-rows-6 gap-3">
        <div className="col-span-1 row-span-1">
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
        <div className="col-span-2 row-span-1">
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
        <div className="col-span-2 row-span-1">
          <FeatureCard
            title="Multiple Node Support"
            description="Multiple types of nodes to support different types of workflows. Notes, Images, Videos, and more."
            position="top"
          >
            <div className="relative w-full h-[100px]">
              <span className=" absolute top-1/3 right-1/2">
                <Image src={textBoxImg} width={50} height={40} alt="drag" />
              </span>
              <span className="absolute top-4 left-5 p-[2px] rounded bg-slate-200">
                <Image src={imgboxImg} width={70} height={70} alt="drag" />
              </span>
            </div>
          </FeatureCard>
        </div>
        <div className="col-span-1 row-span-1">
          <FeatureBgCard img={spiralImg}>
            <h2
              className={`text-4xl text-center text-primary-text font-bold mb-4 ${chelaOne.className}`}
              style={{ textShadow: '0 0 5px rgba(0,0,0,0.3)' }}
            >
              Customizable Workflows
            </h2>
          </FeatureBgCard>
        </div>
        <div className="col-span-2 row-span-1">
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

        <div className="col-span-2 row-span-1">
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
                className="rounded-xl drop-shadow-[0_35px_35px_rgb(var(--brand-light-pink))] transition-all duration-100"
                alt="drag"
              />
            </div>
          </FeatureCard>
        </div>

        <div className="col-span-2 row-span-1">
          <FeatureCard
            title="Customizable Workflows"
            description="Create workflows that fit your needs. Customize your workflows with different types of nodes, colors, and more."
            position="top"
          >
            <div className="flex justify-center items-center">
              <Image
                src={spiralImg}
                width={100}
                height={100}
                className="rounded-xl drop-shadow-[0_35px_35px_rgb(var(--brand-light-pink))] transition-all duration-100"
                alt="drag"
              />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
