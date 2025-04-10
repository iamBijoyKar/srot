import Image from 'next/image'
import Link from 'next/link'
import AnimatedGlass from '../Utils/AnimatedGlass'
import { FaBolt } from 'react-icons/fa'
import { FaCaretRight } from 'react-icons/fa6'

import nextJsWhiteImg from '@/assets/Next.js/nextjs.png'
import nextjsOriginalImg from '@/assets/Next.js/Next.js_Logo_0.svg'
import mongodbWhiteImg from '@/assets/MongoDB/MongoDB_idT8RnyxRp_0.svg'
import mongodbOriginalImg from '@/assets/MongoDB/MongoDB_idO6r-bq1D_0.svg'
import clerkWhiteImg from '@/assets/clerk-w-nbg.png'
import clerkOriginalImg from '@/assets/clerk.svg'
import tailwindcssWhiteImg from '@/assets/Tailwind CSS/Tailwind CSS_idRdv9feSw_0.svg'
import tailwindcssOriginalImg from '@/assets/Tailwind CSS/Tailwind CSS_idNx_0wkQY_0.svg'
import vercelWhiteImg from '@/assets/Vercel/vercel-white.svg'
import vercelOriginalImg from '@/assets/Vercel/Vercel_Logo_0.svg'
import reactFlowWhiteImg from '@/assets/ReactFlow/react-flow-w-nbg.png'
import reactFlowOriginalImg from '@/assets/ReactFlow/react-flow-o-nbg.png'
import stripeWhiteImg from '@/assets/Stripe/Stripe_idW8JhH8ft_0.svg'
import stripeOriginalImg from '@/assets/Stripe/Stripe_id7qRMcZ8P_0.svg'
import githubWhiteImg from '@/assets/GitHub/GitHub_Symbol_0.svg'
import githubOriginalImg from '@/assets/GitHub/GitHub_Symbol_1.png'

export default function PoweredBy() {
  return (
    <section className="container mx-auto p-4 my-10">
      <div className="w-full group relative mb-14">
        <h2 className="text-center text-3xl font-bold leading-10 text-primary-text z-40">
          Srot uses some of the{' '}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            {' '}
            <span className="relative ">best tools </span>
          </span>{' '}
          to deliver
          <br />
          the best
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ">
            {' '}
            experience{' '}
          </span>
          for you.
        </h2>
        <div className="flex flex-col justify-center items-center z-40">
          <p className="text-slate-300 text-sm text-center sm:w-[500px] mt-4">
            Srot is built with the latest technologies and tools to ensure a
            smooth and efficient experience. We are constantly updating our
            stack to provide you with the best performance and reliability.
          </p>
          <div className="w-[100px]">
            <Link
              href={'/'}
              className="mt-4 text-sm text-primary-text group/link flex items-center gap-1"
            >
              <span className=" hover:text-brand-purple transition-all duration-200">
                Learn More
              </span>{' '}
              <FaCaretRight className="group-hover/link:translate-x-1 transition-all duration-200" />
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 z-10 w-8 h-8 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border opacity-0 border-gray-200/20 blur-sm  drop-shadow-[0_20px_20px_rgba(230,230,230,0.1)] group-hover:translate-x-[20vw] group-hover:opacity-100 group-hover:translate-y-[50px] transition-all duration-500 "></div>
        <div className="absolute top-1/2 left-1/2 z-10 w-12 h-12 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border opacity-0 border-gray-200/20 blur-sm drop-shadow-[0_20px_20px_rgba(230,230,230,0.1)] group-hover:-translate-x-[20vw] group-hover:opacity-100 group-hover:translate-y-[50px] transition-all duration-500 "></div>
        <div className="absolute top-1/2 left-1/2 z-10 w-9 h-9 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border opacity-0 border-gray-200/20 blur-sm  drop-shadow-[0_20px_20px_rgba(230,230,230,0.1)] group-hover:translate-x-[20vw] group-hover:opacity-100 group-hover:-translate-y-[50px] transition-all duration-500 "></div>
        <div className="absolute top-1/2 left-1/2 z-10 w-7 h-7 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border opacity-0 border-gray-200/20 blur-sm  drop-shadow-[0_20px_20px_rgba(230,230,230,0.1)] group-hover:-translate-x-[20vw] group-hover:opacity-100 group-hover:-translate-y-[50px] transition-all duration-500 "></div>
        <div className="absolute top-1/2 left-1/2 z-10 w-11 h-11 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border opacity-0 border-gray-200/20 blur-sm  drop-shadow-[0_20px_20px_rgba(230,230,230,0.1)] group-hover:translate-x-[3vw] group-hover:opacity-100 group-hover:-translate-y-[150px] transition-all duration-500 "></div>
        <div className="absolute top-1/2 left-1/2 z-10 w-7 h-7 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border opacity-0 border-gray-200/20 blur-sm  drop-shadow-[0_20px_20px_rgba(230,230,230,0.1)] group-hover:translate-x-[5vw] group-hover:opacity-100 group-hover:translate-y-[90px] transition-all duration-500 "></div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <AnimatedGlass
          colors={['#d1dbe4', '#ced3d7', '#e2e2e4', '#646f77', '#000000']}
        >
          <div className="w-[200px] h-[200px] relative z-50 ">
            <Image
              src={nextJsWhiteImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-100 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-500"
            />
            <Image
              src={nextjsOriginalImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
            />
            <h4 className=" text-slate-300 absolute top-[65%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-sm">
              NextJs
            </h4>
          </div>
        </AnimatedGlass>
        <AnimatedGlass
          colors={[
            '#006A71',
            '#48A6A7',
            '#1F7D53',
            '#66D2CE',
            '#79D7BE',
            '#638C6D'
          ]}
        >
          <div className="w-[200px] h-[200px] relative z-50 ">
            <Image
              src={mongodbWhiteImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-100 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-500"
            />
            <Image
              src={mongodbOriginalImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
            />
            <h4 className=" text-slate-300 absolute top-[65%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-sm">
              MongoDB
            </h4>
          </div>
        </AnimatedGlass>
        <AnimatedGlass
          colors={[
            '#0118D8',
            '#1B56FD',
            '#60B5FF',
            '#0A5EB0',
            '#3674B5',
            '#4635B1'
          ]}
        >
          <div className="w-[200px] h-[200px] relative z-50 ">
            <Image
              src={clerkWhiteImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-35px)] left-0 w-full opacity-100 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-500"
            />
            <Image
              src={clerkOriginalImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
            />
            <h4 className=" text-slate-300 absolute top-[70%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-sm">
              Clerk Auth
            </h4>
          </div>
        </AnimatedGlass>
        <AnimatedGlass
          colors={[
            '#F5F5F5',
            '#0D92F4',
            '#4CC9FE',
            '#08C2FF',
            '#024CAA',
            '#A1E3F9'
          ]}
        >
          <div className="w-[200px] h-[200px] relative z-50 ">
            <Image
              src={tailwindcssWhiteImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-100 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-500 scale-110"
            />
            <Image
              src={tailwindcssOriginalImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
            />
            <h4 className=" text-slate-300 absolute top-[56%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-sm">
              Tailwind Styles
            </h4>
          </div>
        </AnimatedGlass>
        <AnimatedGlass
          colors={['#FEBA17', '#F6DC43', '#FFB200', '#EB5B00', '#FFD95F']}
          className="powered-by-glass"
        >
          <div className="w-[200px] h-[200px] relative z-50 flex justify-center items-center">
            <div className="w-full h-full flex justify-center items-center flex-col gap-3 mt-8 rounded-full">
              <FaBolt className=" w-full text-slate-300 group-hover:scale-110 group-hover:text-yellow-500 group-hover:-translate-y-1 transition-all duration-500 text-[80px] " />
              <h4 className=" text-slate-300 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-xl">
                Powered By
              </h4>
            </div>
          </div>
        </AnimatedGlass>
        <AnimatedGlass
          colors={['#d1dbe4', '#ced3d7', '#e2e2e4', '#646f77', '#000000']}
        >
          <div className="w-[200px] h-[200px] relative z-50 ">
            <Image
              src={vercelWhiteImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-100 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-500"
            />
            <Image
              src={vercelOriginalImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
            />
            <h4 className=" text-slate-300 absolute top-[65%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-sm">
              Vercel
            </h4>
          </div>
        </AnimatedGlass>
        <AnimatedGlass
          colors={[
            '#d1dbe4',
            '#ced3d7',
            '#e2e2e4',
            '#646f77',
            '#FE0072',
            '#E16099'
          ]}
        >
          <div className="w-[200px] h-[200px] relative z-50 ">
            <Image
              src={reactFlowWhiteImg}
              alt="Next.js"
              className="w-[100px] absolute top-[calc(50%-45px)] left-[calc(50%-60px)] opacity-100 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-500"
            />
            <Image
              src={reactFlowOriginalImg}
              alt="Next.js"
              className="w-[100px] absolute top-[calc(50%-45px)] left-[calc(50%-60px)] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
            />
            <h4 className=" text-slate-300 absolute top-[80%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-sm">
              React Flow
            </h4>
          </div>
        </AnimatedGlass>
        <AnimatedGlass
          colors={['#865DFF', '#0A2540', '#635BFF', '#493D9E', '#4635B1']}
        >
          <div className="w-[200px] h-[200px] relative z-50 ">
            <Image
              src={stripeWhiteImg}
              alt="Next.js"
              className="w-full absolute top-[calc(50%-45px)] left-0 opacity-100 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-500"
            />
            <Image
              src={stripeOriginalImg}
              alt="Next.js"
              className="w-full absolute top-[calc(50%-45px)] left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
            />
            <h4 className=" text-slate-300 absolute top-[70%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-sm">
              Payments
            </h4>
          </div>
        </AnimatedGlass>
        <AnimatedGlass
          colors={['#d1dbe4', '#ced3d7', '#e2e2e4', '#646f77', '#000000']}
        >
          <div className="w-[200px] h-[200px] relative z-50 ">
            <Image
              src={githubWhiteImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-45px)] left-[calc(50%-50px)] w-[50%] opacity-100 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-500"
            />
            <Image
              src={githubOriginalImg}
              alt="Next.js"
              className=" absolute top-[calc(50%-45px)] left-[calc(50%-50px)] w-[50%] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
            />
            <h4 className=" text-slate-300 absolute top-[85%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-sm">
              Github
            </h4>
          </div>
        </AnimatedGlass>
      </div>
    </section>
  )
}
