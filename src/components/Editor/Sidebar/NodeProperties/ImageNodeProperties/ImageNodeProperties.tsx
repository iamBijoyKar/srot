'use client'
import type { Node } from '@xyflow/react'
import ImageUpdater from './ImageUpdater'

type ImageNodePropertiesProps = {
  nodes: Node[]
}

export default function ImageNodeProperties({
  nodes
}: ImageNodePropertiesProps) {
  return (
    <div className="w-full h-full py-4 flex flex-col gap-2 motion-preset-fade-sm motion-duration-1000">
      <ImageUpdater selectedNodes={nodes} />
    </div>
  )
}
