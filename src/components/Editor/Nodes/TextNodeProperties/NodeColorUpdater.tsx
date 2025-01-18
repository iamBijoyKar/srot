'use client'

import { useCallback, useState, useRef, useEffect, use } from 'react'
import type { Node } from '@xyflow/react'
import { useReactFlow } from '@xyflow/react'

type NodeColorUpdaterProps = {
  nodes: Node[]
}

export default function NodeColorUpdater({ nodes }: NodeColorUpdaterProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [showMenu, setShowMenu] = useState(false)
  const nodeColor = nodes[0].data.nodeColor
  const [color, setColor] = useState<string>(
    typeof nodeColor === 'string' ? nodeColor : '#ffffff'
  )

  const reactFlow = useReactFlow()
  const nodesState = reactFlow.getNodes()
  const setNodes = reactFlow.setNodes

  //   console.log(color, nodes)

  const handleClick = useCallback(() => {
    setShowMenu((prev) => !prev)
  }, [])

  useEffect(() => {
    if (nodes.length === 0) return
    setNodes(
      nodesState.filter((node) => {
        if (node.id === nodes[0].id) {
          node.data.nodeColor = color
        }
        return node
      })
    )
  }, [color])

  useEffect(() => {
    if (nodes.length === 0) return
    const nodeColor = nodes[0].data.nodeColor
    if (typeof nodeColor === 'string') {
      setColor(nodeColor)
    }
  }, [nodes])

  return (
    <div onClick={handleClick} className="w-8 min-h-14 relative cursor-pointer">
      <div className="p-1 rounded bg-ternary-text">
        <div
          className="w-6 h-6 rounded"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <span className="text-xs text-primary-bg leading-3">Color</span>
      {showMenu ? (
        <div className="">
          <ul className="flex flex-col gap-2">
            {['#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff'].map(
              (color) => (
                <li
                  key={color}
                  onClick={() => {
                    setColor(color)
                  }}
                >
                  {' '}
                  <div className="w-full h-full flex justify-center items-center">
                    <button
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: color }}
                    ></button>
                  </div>
                </li>
              )
            )}
          </ul>
          <div className="w-full h-full flex justify-center items-center mt-2">
            <div
              onClick={() => {
                inputRef.current?.click()
              }}
              className="w-6 h-6 rounded-full bg-gradient-conic from-purple-600 via-blue-600  to-yellow-600"
            ></div>
            <input
              ref={inputRef}
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-0 h-0"
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}
