import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import ProjectNameUpdater from './ProjectNameUpdater'
import UtilsBtns from './UtilsBtns'

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
        <ProjectNameUpdater />
      </div>
      <div className="">
        <UtilsBtns />
      </div>
    </header>
  )
}
