'use client'
import type { Node } from '@xyflow/react'
import NodeColorUpdater from './NodeColorUpdater'
import TextColorUpdater from './TextColorUpdater'

type TextNodePropertiesProps = {
  nodes: Node[]
}

export default function TextNodeProperties({ nodes }: TextNodePropertiesProps) {
  return (
    <div className="w-full h-full py-4 flex flex-col gap-2 motion-preset-fade-sm motion-duration-1000">
      <span className="text-xs font-medium text-center">Color</span>
      <NodeColorUpdater nodes={nodes} />
      <TextColorUpdater nodes={nodes} />
      <hr className="h-[2px] bg-secondary-bg rounded-full" />
      <span className="text-xs font-medium text-center">Text</span>
    </div>
  )
}
