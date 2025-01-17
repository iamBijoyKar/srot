import Image from 'next/image'
import type { StaticImageData } from 'next/image'

type FeatureCardProps = {
  children?: React.ReactNode
  img: StaticImageData
}

export default function FeatureCard({ children, img }: FeatureCardProps) {
  return (
    <div className="bg-ternary-bg p-4 shadow-lg rounded-lg overflow-hidden w-full h-full relative ">
      <div className="">
        <Image
          src={img}
          fill
          layout="fill"
          className="absolute left-0 top-0 rounded-xl drop-shadow-[0_35px_35px_rgb(var(--brand-light-pink))] "
          alt="drag"
        />
      </div>
      <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}
