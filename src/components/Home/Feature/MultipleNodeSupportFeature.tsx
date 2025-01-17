'use client'
import React, { useCallback } from 'react'
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge
} from '@xyflow/react'
import TextNode from '@/components/Editor/Nodes/TextNode'

import '@xyflow/react/dist/style.css'

const nodeTypes = {
  textNode: TextNode
}

const initialNodes = [
  {
    id: '1',
    position: { x: 4, y: 10 },
    data: { text: 'Multiple Nodes Support ' },
    type: 'textNode'
  },
  {
    id: '2',
    position: { x: 20, y: 150 },
    data: { label: 'Node' }
  },
  {
    id: '3',
    position: { x: 190, y: 180 },
    data: { label: 'Node' }
  }
]
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3' }
]

export default function MultipleNodeSupportFeature() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      edges={edges}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      style={{ width: '200px', height: '100px' }}
    >
      <Background variant={BackgroundVariant.Dots} />
    </ReactFlow>
  )
}
