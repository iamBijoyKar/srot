'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { FaWindowMinimize } from 'react-icons/fa6'
import { TbCaretLeftRightFilled } from 'react-icons/tb'
import Tooltip from '../Utils/Tooltip'

import prductSSImg from '@/assets/product-ss.png'
import prductSSImg2 from '@/assets/product-ss2.png'
import canvasImg from '@/assets/canvas.png'
import treeDiagramImg from '@/assets/tree-diagram.png'
import tableImg from '@/assets/table.png'
import chartImg from '@/assets/chart.png'
import collabImg from '@/assets/collab.png'
import edgesImg from '@/assets/edges.png'

const productSSArr = [
  prductSSImg,
  prductSSImg2,
  prductSSImg,
  prductSSImg,
  prductSSImg,
  prductSSImg
]
const buttonImgArr = [
  canvasImg,
  treeDiagramImg,
  tableImg,
  chartImg,
  collabImg,
  edgesImg
]

const buttonTextArr = [
  'Canvas',
  'Tree Diagram',
  'Table',
  'Chart',
  'Collaboration',
  'Edges'
]

export default function ProductSS() {
  const [isHoveredOuter, setIsHoveredOuter] = useState(false) // for the outer div which is full width
  const [isHoveredInner, setIsHoveredInner] = useState(false) // for the inner div which is the app bar
  const [currentSSIndex, setCurrentSSIndex] = useState(0) // for the current screenshot index

  return (
    <section className="container flex flex-col mx-auto p-4 justify-between items-center my-10">
      <div className="rounded-xl overflow-hidden shadow-lg shadow-gray-400/30 drop-shadow-[0_20px_20px_rgba(230,230,230,0.1)] ">
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
        <div className="relative">
          {/* <Image
            src={productSSArr[currentSSIndex]}
            className={`rounded-b-xl motion-opacity-in-0 motion-translate-y-in-100 motion-scale-in-100`}
            alt="Product Screenshot"
          /> */}
          {productSSArr.map((img, index) => (
            <div
              key={index}
              className={`w-full h-full rounded-b-xl ${
                currentSSIndex === index ? 'block' : 'hidden'
              }`}
            >
              <Image
                src={img}
                className={`rounded-b-xl motion-opacity-in-0 `}
                alt="Product Screenshot"
              />
            </div>
          ))}
          <div
            onMouseOver={() => setIsHoveredOuter(true)}
            onMouseLeave={() => setIsHoveredOuter(false)}
            className="absolute bottom-0 left-0 w-full h-12 "
          ></div>
          {isHoveredInner || isHoveredOuter ? (
            <div
              onMouseOver={() => setIsHoveredInner(true)}
              onMouseLeave={() => setIsHoveredInner(false)}
              className={`absolute bottom-0 left-[calc(50%-190px)] justify-around items-center w-[380px] h-16 mb-3 gap-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-200 px-3 py-2 rounded-lg shadow-lg motion-opacity-in-0 motion-translate-y-in-100 motion-scale-in-100  ${
                isHoveredInner || isHoveredOuter ? 'flex' : 'hidden'
              } `}
            >
              {buttonImgArr.map((img, index) => (
                <Tooltip text={buttonTextArr[index]} key={index}>
                  <div
                    key={index}
                    id={`button-${index}`}
                    onClick={() => {
                      setCurrentSSIndex(index)
                    }}
                    className={`w-10 h-10 rounded-full flex justify-center items-center cursor-pointer dock transition-all duration-100 hover:scale-125 hover:-translate-y-2 ${
                      currentSSIndex === index ? '' : ''
                    }`}
                  >
                    <Image src={img} alt="Product Screenshot" />
                  </div>
                </Tooltip>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
