'use client'
import { useCallback, useEffect, useState, ChangeEvent, useRef } from 'react'
import {
  Handle,
  Position,
  Node,
  NodeProps,
  NodeResizeControl,
  useReactFlow,
  useNodeId
} from '@xyflow/react'
import { RiUpload2Fill } from 'react-icons/ri'

type TextNodeProps = Node<{
  image: string
}>

export default function ImageNode(props: NodeProps<TextNodeProps>) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [showImg, setShowImg] = useState(false)
  // const [imgUrl, setImgUrl] = useState<ArrayBuffer | string>(props.data.image)
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(40)
  const reactFlow = useReactFlow()
  const nodeId = useNodeId()

  const handleImageUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) return
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.result !== null) {
          reactFlow.setNodes(
            reactFlow.getNodes().filter((node) => {
              if (node.id === nodeId) {
                node.data.image = reader.result
              }
              return node
            })
          )
          console.log(reader.result)
        }
      }
      reader.readAsDataURL(file)
      setShowImg(true)
    },
    []
  )

  return (
    <>
      <NodeResizeControl
        color="transparent"
        minWidth={width}
        minHeight={height}
        maxHeight={600}
        maxWidth={600}
        className="relative"
      >
        {props.selected ? (
          <div className="absolute -top-0 -left-0 w-2 h-2 rounded-full gradient-orb"></div>
        ) : null}
      </NodeResizeControl>

      <Handle type="target" position={Position.Top} />
      <div
        className={`bg-white rounded w-full h-full relative border min-w-[200px] min-h-[40px] ${
          props.selected ? 'border-blue-500' : 'border-gray-300'
        }`}
      >
        {showImg ? (
          <img
            src={props.data.image}
            className="w-full h-full max-w-[600px] max-h-[600px] object-cover"
          />
        ) : (
          <div className="p-2 w-full h-16">
            <button
              onClick={() => inputRef.current?.click()}
              className="w-full rounded-full flex items-center gap-2 p-2 bg-secondary-text cursor-pointer"
            >
              <RiUpload2Fill className="w-8 h-8 text-gray-400" />
              <span className="text-xs">Upload Image</span>
            </button>
            <input
              ref={inputRef}
              onChange={handleImageUpload}
              type="file"
              accept="image/*"
              className="w-0 h-0 opacity-0"
            />
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  )
}
