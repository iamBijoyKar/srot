'use client'

import React, { useCallback } from 'react'
import {
  ReactFlow,
  ReactFlowProvider,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  useOnSelectionChange
} from '@xyflow/react'
import { nodeTypes } from './NodeTypes'
import Sidebar from './Sidebar/Sidebar'
import type { TextNode, ImageNode, TodoNode } from '@/types'

import '@xyflow/react/dist/style.css'

const initialNodes: (TextNode | ImageNode | TodoNode)[] = [
  {
    id: '1',
    position: { x: 0, y: 300 },
    data: {
      text: 'hello',
      nodeColor: '#fff',
      textColor: '#000',
      fontSize: 16,
      fontWeight: 'normal'
    },
    type: 'textNode'
  },
  {
    id: '2',
    position: { x: 300, y: 300 },
    data: { image: 'world' },
    type: 'imageNode'
  },
  {
    id: '3',
    position: { x: 200, y: 200 },
    data: { todos: [] },
    type: 'todoNode'
  }
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

export default function Editor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const addNewNode = useCallback(
    ({ type }: { type: string }) => {
      const newNode = {
        id: (nodes.length + 1).toString(),
        position: { x: 10, y: 10 },
        data:
          type === 'textNode'
            ? {
                text: '',
                nodeColor: '#fff',
                textColor: '#000',
                fontSize: 16,
                fontWeight: 'normal'
              }
            : { image: '' },
        type: type
      }
      setNodes((prev) => prev.concat(newNode))
    },
    [nodes, setNodes]
  )

  return (
    <ReactFlowProvider>
      <div
        style={{ width: '100%', height: 'calc(100vh - 40px)' }}
        className="flex bg-white"
      >
        <Sidebar addNewNode={addNewNode} />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  )
}
