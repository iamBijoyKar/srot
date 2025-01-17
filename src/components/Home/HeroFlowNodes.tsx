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
import TextNode from '../Editor/Nodes/TextNode'

import '@xyflow/react/dist/style.css'

const nodeTypes = {
  textNode: TextNode
}

const initialNodes = [
  {
    id: '1',
    position: { x: 50, y: 100 },
    data: { label: 'Workflow ' }
  },
  {
    id: '2',
    position: { x: 100, y: 300 },
    data: { label: 'Node' }
  },
  {
    id: '3',
    position: { x: 400, y: 300 },
    data: { label: 'Node' }
  }
]
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' }
]

export default function HeroFlowNodes() {
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
      style={{ width: '100%', height: '100vh' }}
    >
      <Background variant={BackgroundVariant.Dots} />
    </ReactFlow>
  )
}
