import Image from 'next/image'
import { FaMarkdown } from 'react-icons/fa'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { IoMdCloud } from 'react-icons/io'
import { Barlow } from 'next/font/google'

import productShowcaseGif from '@/assets/product-showcase.gif'

const barlow = Barlow({ weight: '800', subsets: ['latin'] })

export default function KeyPoints() {
  return (
    <section className="container flex flex-col mx-auto p-4 justify-between items-center my-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full mt-10">
        <div className="flex flex-col ">
          <h1
            className={`text-5xl sm:text-6xl font-bold text-primary-text ${barlow.className}`}
          >
            Build & Manage <br />
            Workflows
          </h1>
          <p className="text-secondary-text mt-4 text-xl">
            Srot is a powerful workflow automation tool that helps you
            <br />
            streamline your project management and collaboration.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:flex-row gap-6 items-center">
          <div className="w-[150px] flex flex-col items-center gap-2">
            <div className="flex justify-center items-center ">
              <FaMarkdown className="w-20 h-20 text-primary-text rotate-6" />
            </div>
            <h2 className="text-md text-primary-text font-medium">
              Markdown Support
            </h2>
            <p className="text-secondary-text text-start text-sm">
              Write and format your workflows with Markdown.
            </p>
          </div>
          <div className="w-[150px] hidden sm:flex flex-col  gap-2">
            <div className="flex justify-center items-center ">
              <MdOutlineDashboardCustomize className="w-20 h-20 text-primary-text " />
            </div>
            <h2 className="text-md text-start text-primary-text font-medium">
              Customized Tools
            </h2>
            <p className="text-secondary-text text-start text-sm">
              Customizable nodes and tools to build your workflows.
            </p>
          </div>
          <div className="w-[150px] flex flex-col  gap-2">
            <div className="flex justify-center items-center ">
              <IoMdCloud className="w-20 h-20 text-primary-text " />
            </div>
            <h2 className="text-md text-start text-primary-text font-medium">
              Cloud Data Sync
            </h2>
            <p className="text-secondary-text text-start text-sm">
              Work on your workflows from anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-2 mb-10">
        <Image
          src={productShowcaseGif}
          alt="Product Showcase"
          className="rounded-lg mt-10 w-full h-full shadow-lg"
          priority
        />
      </div>
    </section>
  )
}
