import React from 'react'
import InstagramLogo from '@/assets/social_insta.png'
import YouTubeLogo from '@/assets/social_yt.png'
import TwitterLogo from '@/assets/social_twitter.png'
import LinkedInLogo from '@/assets/social_in.png'
import Link from 'next/link'
import { Knewave } from 'next/font/google'
import { FcWorkflow } from 'react-icons/fc'

const knewave = Knewave({ weight: '400', subsets: ['latin'] })

const Footer: React.FC = () => {
  return (
    <>
      <div className="h-2  w-full px-10 mt-20 ">
        <div className="h-[50%] bg-secondary-bg w-full rounded-md"></div>
      </div>
      <div className="container mx-auto p-4 my-10">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-2 gap-y-10 md:mx-10 ">
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1 mx-5">
            <div className="flex items-center gap-2 ">
              <FcWorkflow className="w-10 h-10" />
              <span
                className={`text-2xl font-bold text-primary-text ${knewave.className}`}
              >
                Srot
              </span>
            </div>
            <p className="text-primary-text text-lg">
              Empower your creativity and bring your ideas to life with Canva
            </p>
            <div className="flex gap-6 mt-2">
              <Link
                href={'/'}
                className="text-primary-text hover:drop-shadow-[0_0_20px_rgba(73,84,100,1)] "
              >
                <img
                  src={(LinkedInLogo as { src: string }).src}
                  alt="Facebook Logo"
                  className="w-10"
                />
              </Link>
              <Link
                href={'/'}
                className="text-primary-text hover:drop-shadow-[0_0_20px_rgba(73,84,100,1)]"
              >
                <img
                  src={(InstagramLogo as { src: string }).src}
                  alt="Instagram Logo"
                  className="w-10"
                />
              </Link>
              <Link
                href={'/'}
                className="text-primary-text hover:drop-shadow-[0_0_20px_rgba(73,84,100,1)]"
              >
                <img
                  src={(YouTubeLogo as { src: string }).src}
                  alt="YouTube Logo"
                  className="w-10"
                />
              </Link>
              <Link
                href={'/'}
                className="text-primary-text hover:drop-shadow-[0_0_20px_rgba(73,84,100,1)]"
              >
                <img
                  src={(TwitterLogo as { src: string }).src}
                  alt="Twitter Logo"
                  className="w-10"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 mx-auto">
            <h3 className="text-primary-text text-2xl font-bold">Company</h3>
            <Link href={'/'} className="text-primary-text">
              About Us
            </Link>
            <Link href={'/'} className="text-primary-text">
              Security
            </Link>
            <Link href={'/'} className="text-primary-text">
              Status
            </Link>
            <Link href={'/'} className="text-primary-text">
              Terms & Privacy
            </Link>
          </div>
          <div className="flex flex-col gap-2 mx-auto">
            <h3 className="text-primary-text text-2xl font-bold">Links</h3>
            <Link href={'/'} className="text-primary-text">
              Home
            </Link>
            <Link href={'/'} className="text-primary-text">
              Services
            </Link>
            <Link href={'/'} className="text-primary-text">
              Editor
            </Link>
          </div>
          <div className="flex flex-col gap-2 mx-auto">
            <h3 className="text-primary-text text-2xl font-bold">Resources</h3>
            <Link href={'/'} className="text-primary-text">
              Help Center
            </Link>
            <Link href={'/'} className="text-primary-text">
              Community
            </Link>
            <Link href={'/'} className="text-primary-text">
              Integrations
            </Link>
            <Link href={'/'} className="text-primary-text">
              Temaplates
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
