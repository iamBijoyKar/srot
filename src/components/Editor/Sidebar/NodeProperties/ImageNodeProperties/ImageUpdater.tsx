'use client'
import { useCallback, useRef, ChangeEvent } from 'react'
import type { Node } from '@xyflow/react'
import { useReactFlow } from '@xyflow/react'
import { RiUpload2Fill } from 'react-icons/ri'

type ImageUpdaterProps = {
  selectedNodes: Node[]
}
export default function ImageUpdater({ selectedNodes }: ImageUpdaterProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const reactFlow = useReactFlow()

  const handleImageUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) return
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.result !== null) {
          const id = selectedNodes[0].id
          reactFlow.setNodes(
            reactFlow.getNodes().filter((node) => {
              if (node.id === id) {
                node.data.image = reader.result
              }
              console.log('change')
              return node
            })
          )
          //   console.log(reader.result)
        }
      }
      reader.readAsDataURL(file)
    },
    [selectedNodes, reactFlow]
  )

  return (
    <div className="motion-preset-fade">
      <div
        onClick={() => inputRef.current?.click()}
        className="flex justify-center items-center bg-white p-[3px] rounded shadow hover:shadow-lg hover:translate-x-1 transition-all duration-100"
      >
        <RiUpload2Fill className="w-6 h-6 text-secondary-bg" />
      </div>
      <p className="text-[10px] mt-1">Source</p>
      <input
        ref={inputRef}
        onChange={handleImageUpload}
        type="file"
        name=""
        id=""
        className="w-0 h-0 opacity-0"
      />
    </div>
  )
}
