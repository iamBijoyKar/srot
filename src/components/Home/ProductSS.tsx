import Image from 'next/image'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { FaWindowMinimize } from 'react-icons/fa6'
import { TbCaretLeftRightFilled } from 'react-icons/tb'

import prductSSImg from '@/assets/product-ss.png'

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
    </section>
  )
}
