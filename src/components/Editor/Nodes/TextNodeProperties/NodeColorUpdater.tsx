'use client'

import { useCallback, useState, useRef, useEffect, useMemo } from 'react'
import type { Node, ReactFlowState } from '@xyflow/react'
import { useStore } from '@xyflow/react'

type NodeColorUpdaterProps = {
  nodes: Node[]
}

export default function NodeColorUpdater({ nodes }: NodeColorUpdaterProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [showMenu, setShowMenu] = useState(false)
  const [color, setColor] = useState<string>(
    nodes[0].data.nodeColor ? nodes[0].data.nodeColor : '#ffffff'
  ) // ignore error

  const getSetNodes = useCallback((state: ReactFlowState) => {
    return state.setNodes
  }, [])
  const getNodes = useCallback((state: ReactFlowState) => {
    return state.nodes
  }, [])

  const setNodes = useStore(getSetNodes)
  const nodesState = useStore(getNodes)

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

  return (
    <div onClick={handleClick} className="w-8 min-h-14 relative">
      <div className="p-1 rounded bg-ternary-text">
        <div
          className="w-6 h-6 rounded"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <span className="text-xs text-primary-bg leading-3">Color</span>
      {showMenu ? (
        <div className="">
          <ul className="flex flex-col gap-1">
            {['#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff'].map(
              (color) => (
                <li
                  key={color}
                  onClick={() => {
                    setColor(color)
                  }}
                >
                  {' '}
                  <div className="">
                    <button
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: color }}
                    ></button>
                  </div>
                </li>
              )
            )}
          </ul>
          <div className="">
            <input
              ref={inputRef}
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-0 h-0"
            />
            <span
              onClick={() => {
                inputRef.current?.click()
              }}
              className="w-6 h-6 rounded-full bg-gradient-conic from-purple-600 via-blue-600  to-yellow-600"
            ></span>
          </div>
        </div>
      ) : null}
    </div>
  )
}
