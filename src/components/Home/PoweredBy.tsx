import Image from 'next/image'
import AnimatedGlass from '../Utils/AnimatedGlass'

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
import stripeOriginalImg from '@/assets/Stripe/Stripe_idXemag1zN_0.svg'

export default function PoweredBy() {
  return (
    <section className="container mx-auto p-4 my-10 grid grid-cols-3 grid-rows-3 gap-4">
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
            MongoDB
          </h4>
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
            NextJs
          </h4>
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
            NextJs
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
            NextJs
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
            src={stripeWhiteImg}
            alt="Next.js"
            className="w-full absolute top-[calc(50%-45px)] left-0 opacity-100 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-500"
          />
          <Image
            src={stripeOriginalImg}
            alt="Next.js"
            className="w-full absolute top-[calc(50%-45px)] left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
          />
          <h4 className=" text-slate-300 absolute top-[80%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-sm">
            NextJs
          </h4>
        </div>
      </AnimatedGlass>
    </section>
  )
}
