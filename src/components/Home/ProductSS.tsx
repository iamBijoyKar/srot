import Image from 'next/image'
import { Barlow } from 'next/font/google'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { FaWindowMinimize } from 'react-icons/fa6'
import { TbCaretLeftRightFilled } from 'react-icons/tb'
import { FaMarkdown } from 'react-icons/fa'
import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { IoMdCloud } from 'react-icons/io'

import prductSSImg from '@/assets/product-ss.png'

const barlow = Barlow({ weight: '800', subsets: ['latin'] })

export default function ProductSS() {
  return (
    <section className="container flex flex-col mx-auto p-4 justify-between items-center my-10">
      <div
        className="rounded-xl overflow-hidden shadow-lg drop-shadow-[0_3px_10px_rgb(var(--special-color))]
      transition-all duration-100 "
      >
        <div className="w-full h-full px-4 bg-primary-bg flex justify-between items-center">
          <div className="flex gap-2 items-center py-1 bg-primary-bg group">
            <div className="w-4 h-4 flex justify-center items-center rounded-full bg-slate-700 group-hover:bg-red-500 transition-all duration-200 ">
              <IoClose className="w-4 h-4 hidden group-hover:block text-primary-bg transition-all duration-200" />
            </div>
            <div className="w-4 h-4 flex justify-center items-center rounded-full bg-slate-700 group-hover:bg-yellow-400 transition-all duration-200 ">
              <FaWindowMinimize className="w-3 h-3 mb-2 hidden group-hover:block text-primary-bg transition-all duration-200" />
            </div>
            <div className="w-4 h-4 flex justify-center items-center rounded-full bg-slate-700 group-hover:bg-green-500 transition-all duration-200 ">
              <TbCaretLeftRightFilled className="w-4 h-4 -rotate-45 hidden group-hover:block text-primary-bg transition-all duration-200" />
            </div>
          </div>
          <div className="cursor-pointer">
            <MdOutlineMoreHoriz className="text-3xl text-slate-500" />
          </div>
        </div>
        <div className="">
          <Image
            src={prductSSImg}
            className="rounded-b-xl "
            alt="Product Screenshot"
          />
        </div>
      </div>
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
    </section>
  )
}
