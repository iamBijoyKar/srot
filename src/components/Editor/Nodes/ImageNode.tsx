'use client'
import { useCallback, useState, ChangeEvent } from 'react'
import {
  Handle,
  Position,
  Node,
  NodeProps,
  NodeResizeControl
} from '@xyflow/react'

type TextNodeProps = Node<{
  image: string
}>

export default function ImageNode(props: NodeProps<TextNodeProps>) {
  const [showImg, setShowImg] = useState(false)
  const [imgUrl, setImgUrl] = useState<ArrayBuffer | string>(props.data.image)
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(100)

  const handleImageUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) return
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.result !== null) {
          setImgUrl(reader.result)
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
          <div className="absolute -top-0 -left-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
        ) : null}
      </NodeResizeControl>

      <Handle type="target" position={Position.Top} />
      <div className="bg-white rounded w-full h-full relative border">
        {showImg ? (
          <img
            src={imgUrl as string}
            className="w-full h-full max-w-[600px] max-h-[600px] object-cover"
          />
        ) : (
          <input
            onChange={handleImageUpload}
            type="file"
            accept="image/*"
            className="w-full"
          />
        )}
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  )
}
