'use client'

import { useState, useRef, useEffect } from 'react'
import { LuMousePointerClick } from 'react-icons/lu'

export default function ProjectNameUpdater() {
  const [showInput, setShowInput] = useState(false)
  const [projectName, setProjectName] = useState('Project Name')
  const divRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input when clicked
  const hadleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    setShowInput(true)
  }

  // Close input when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setShowInput(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [divRef])

  return (
    <div ref={divRef} className="flex items-center relative ">
      {showInput ? (
        <input
          ref={inputRef}
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className=" outline-none bg-primary-bg max-w-[200px] min-w-[100px] group/input"
        />
      ) : (
        <div
          onClick={hadleClick}
          className="max-w-[200px] min-w-[100px] truncate peer"
        >
          {projectName}
        </div>
      )}
      <span className="hidden peer-hover:flex gap-1 items-center absolute top-1 -right-24 text-xs text-secondary-text cursor-pointer transition-all duration-500 motion-preset-slide-up">
        <LuMousePointerClick className="w-5 h-5 mb-[2px]" />
        <span className="">Click to edit</span>
      </span>
    </div>
  )
}
