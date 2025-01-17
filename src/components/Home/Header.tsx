import Link from 'next/link'
import { Knewave } from 'next/font/google'
import { MdOutlineCelebration } from 'react-icons/md'
import { FcWorkflow } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const knewave = Knewave({ weight: '400', subsets: ['latin'] })

export default function Header() {
  return (
    <header className="h-16 px-8 py-2 w-full flex items-center justify-between bg-primary-bg  ">
      <Link href="/">
        <div className="flex items-center gap-2">
          <FcWorkflow className="w-8 h-8 text-primary-text" />
          <span
            className={`text-2xl font-bold text-primary-text ${knewave.className}`}
          >
            Srot
          </span>
        </div>
      </Link>
      <div className="">
        <menu className="flex items-center gap-4">
          <div className=""></div>
          <Link href="/">
            <FaGithub className="w-8 h-8 text-primary-text" />
          </Link>
          <span className="h-8 w-[1px] bg-secondary-text sm:mx-2"></span>
          <Link href="/sign-in">
            <span className="text-primary-text text-lg">Login</span>
          </Link>
          <Link
            href="/sign-up"
            className="active:translate-y-1 transition-all duration-100"
          >
            <span className="sm:w-[200px] flex items-center gap-2 overflow-hidden text-primary-text px-4 py-2 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full hover:drop-shadow-[0_35px_35px_rgb(var(--brand-purple))] transition-all duration-100">
              <MdOutlineCelebration className="w-6 h-6" />
              <span className="hidden sm:block ">SignUp for Free</span>
            </span>
          </Link>
        </menu>
      </div>
    </header>
  )
}
