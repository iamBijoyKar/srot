'use client'
import { useState } from 'react'
import { FaRegShareSquare } from 'react-icons/fa'
import { BiExport } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'
import { HiSaveAs } from 'react-icons/hi'

export default function UtilsBtns() {
  const [isSaving, setIsSaving] = useState(true)
  return (
    <div className="flex gap-1 justify-center items-center">
      <div className="flex items-center gap-1">
        <HiSaveAs className="w-5 h-5" />
        {isSaving ? (
          <span className="text-xs">
            Saving.
            <span className="motion-opacity-loop-0 motion-duration-500">.</span>
            <span className="motion-opacity-loop-0 motion-duration-500 motion-delay-100">
              .
            </span>
          </span>
        ) : (
          <span className="text-xs">Saved</span>
        )}
      </div>
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
  )
}
