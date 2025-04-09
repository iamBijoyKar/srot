import Image from 'next/image'
import AnimatedGlass from '../Utils/AnimatedGlass'

import nextJsWhiteImg from '@/assets/Next.js/nextjs.png'
import nextjsOriginalImg from '@/assets/Next.js/Next.js_Logo_0.svg'
import mongodbWhiteImg from '@/assets/MongoDB/MongoDB_idT8RnyxRp_0.svg'
import mongodbOriginalImg from '@/assets/MongoDB/MongoDB_idO6r-bq1D_0.svg'
import clerkOriginalImg from '@/assets/clerk.svg'

export default function PoweredBy() {
  return (
    <section className="container mx-auto p-4 my-10 grid grid-cols-2 grid-rows-2 gap-4">
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
          <h4 className=" absolute top-[65%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-xl">
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
          <h4 className=" absolute top-[65%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-xl">
            MongoDB
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
            src={clerkOriginalImg}
            alt="Next.js"
            className=" absolute top-[calc(50%-25px)] left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.6)] group-hover:-translate-y-2"
          />
          <h4 className=" absolute top-[65%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-xl">
            MongoDB
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
          <h4 className=" absolute top-[65%] left-1/3 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 text-xl">
            MongoDB
          </h4>
        </div>
      </AnimatedGlass>
    </section>
  )
}
