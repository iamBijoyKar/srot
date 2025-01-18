import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { CiSettings } from 'react-icons/ci'
import { BiExport } from 'react-icons/bi'
import { FaRegShareSquare } from 'react-icons/fa'

import coloredImg from '@/assets/colored.jpg'

export default function Header() {
  return (
    <header className="h-10 px-4 py-2 w-full flex justify-between items-center bg-primary-bg text-primary-text">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full ">
          <Link href="/">
            <div className="hover:motion-preset-spin motion-duration-2000 ">
              <Image
                src={coloredImg}
                className="rounded-full  aspect-square"
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="">
          <FaChevronRight className="w-4 h-4" />
        </div>
        <div className="flex justify-center items-center">project-1</div>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <button className=" flex items-center gap-[6px] hover:bg-gradient-to-tl from-brand-purple to-brand-pink text-white px-2 py-1 rounded-full drop-shadow-[0_35px_35px_rgb(var(--brand-purple))] transition-all duration-500 ease-in-out">
          <span className="text-sm">Share</span>
          <FaRegShareSquare className="w-4 h-4" />
        </button>
        <button className=" flex items-center gap-1 hover:bg-gradient-to-tl from-brand-purple to-brand-pink text-white px-2 py-1 rounded-full drop-shadow-[0_35px_35px_rgb(var(--brand-purple))] transition-all duration-500 ease-in-out">
          <span className="text-sm">Export</span>
          <BiExport className="w-5 h-5 mb-1" />
        </button>
        <button className="active:rotate-45 transition-all duration-100 ">
          <CiSettings className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
