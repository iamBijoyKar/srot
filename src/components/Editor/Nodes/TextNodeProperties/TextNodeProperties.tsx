'use client'
import { useCallback, useState } from 'react'
import type { Node } from '@xyflow/react'
import NodeColorUpdater from './NodeColorUpdater'

type TextNodePropertiesProps = {
  nodes: Node[]
}

export default function TextNodeProperties({ nodes }: TextNodePropertiesProps) {
  return (
    <div className="w-full h-full py-4 flex flex-col gap-3 motion-preset-fade-sm motion-duration-1000">
      <NodeColorUpdater nodes={nodes} />
    </div>
  )
}
