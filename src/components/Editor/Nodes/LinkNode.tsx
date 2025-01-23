'use client'
import Link from 'next/link'
import { useCallback, useState, useRef, useEffect, ChangeEvent } from 'react'
import {
  Handle,
  Position,
  Node,
  NodeProps,
  NodeResizeControl,
  useReactFlow,
  useNodeId
} from '@xyflow/react'

type LinkNodeProps = Node<{
  link: string
}>

export default function LinkNode(props: NodeProps<LinkNodeProps>) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const reactFlow = useReactFlow()
  const nodeId = useNodeId()

  const [showInput, setShowInput] = useState(false)

  const [width, setWidth] = useState(240)
  const [height, setHeight] = useState(50)

  const handleClick = useCallback(() => {
    if (!props.selected) return
    setShowInput(true)
  }, [props])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    reactFlow.setNodes(
      reactFlow.getNodes().filter((node) => {
        if (node.id === nodeId) {
          node.data.link = e.target.value
        }
        return node
      })
    )
  }

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
              onChange={handleChange}
              value={props.data.link}
              type="text"
              name=""
              id=""
              className="outline-none w-full h-full text-wrap"
            />
          ) : (
            <Link
              href={props.data.link}
              className="text-blue-500 underline overflow-hidden truncate"
              target="_blank"
            >
              {props.data.link}
            </Link>
          )}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  )
}
