'use client'
import Link from 'next/link'
import { useCallback, useState, useRef, useEffect } from 'react'
import {
  Handle,
  Position,
  Node,
  NodeProps,
  NodeResizeControl
} from '@xyflow/react'

type LinkNodeProps = Node<{
  link: string
}>

export default function LinkNode(props: NodeProps<LinkNodeProps>) {
  const nodeRef = useRef<HTMLDivElement>(null)

  const [link, setLink] = useState(props.data.link)
  const [showInput, setShowInput] = useState(false)

  const [width, setWidth] = useState(240)
  const [height, setHeight] = useState(50)

  const handleClick = useCallback(() => {
    if (!props.selected) return
    setShowInput(true)
  }, [props])

  useEffect(() => {
    if (props.selected === false) {
      setShowInput(false)
    }
  }, [props.selected])

  return (
    <>
      <NodeResizeControl
        color="transparent"
        minWidth={width}
        minHeight={height}
        className="relative"
      >
        {props.selected ? (
          <div className="absolute -top-0 -left-0 w-2 h-2 rounded-full gradient-orb"></div>
        ) : null}
      </NodeResizeControl>

      <Handle type="target" position={Position.Top} />
      <div
        ref={nodeRef}
        onClick={handleClick}
        className={`border p-2 rounded min-w-[240px] min-h-full w-full relative bg-white ${
          props.selected ? 'border-blue-500' : 'border-gray-300'
        }`}
      >
        <div className=" min-h-[30px] h-full w-full text-blue-500 underline overflow-hidden truncate">
          {showInput ? (
            <input
              onChange={(e) => setLink(e.target.value)}
              value={link}
              type="text"
              name=""
              id=""
              className="outline-none w-full h-full text-wrap"
            />
          ) : (
            <Link
              href={link}
              className="text-blue-500 underline overflow-hidden truncate"
              target="_blank"
            >
              {link}
            </Link>
          )}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  )
}
