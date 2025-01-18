'use client'
import { useCallback, useState, useRef, useEffect } from 'react'
import {
  Handle,
  Position,
  Node,
  NodeProps,
  NodeResizeControl
} from '@xyflow/react'

type TextNodeProps = Node<{
  text: string
  nodeColor?: string
}>

export default function TextUpdaterNode(props: NodeProps<TextNodeProps>) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [text, setText] = useState(props.data.text)
  const [showInput, setShowInput] = useState(false)
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(100)

  const onChange = useCallback((event: any) => {
    setText(event.target.value)
  }, [])

  const handleNodeClick = useCallback(() => {
    if (props.selected) {
      setShowInput(true)
      inputRef.current?.focus()
    }
  }, [props.selected])

  useEffect(() => {
    if (props.selected === false) {
      setShowInput(false)
    }
  }, [props.selected])

  return (
    <>
      <NodeResizeControl
        color="transparent"
        minWidth={width}
        minHeight={height}
        className="relative"
      >
        {props.selected ? (
          <div className="absolute -top-0 -left-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
        ) : null}
      </NodeResizeControl>

      <Handle type="target" position={Position.Top} />
      <div
        ref={nodeRef}
        onClick={handleNodeClick}
        className={`border p-2 rounded w-full h-full relative ${
          props.selected ? 'border-blue-500' : 'border-gray-300'
        }`}
        style={{
          backgroundColor: props.data.nodeColor ? props.data.nodeColor : 'white'
        }}
      >
        {showInput ? (
          <textarea
            ref={inputRef}
            id="text"
            name="text"
            onChange={onChange}
            value={text}
            className="nodrag outline-none w-full h-full resize-none"
            spellCheck="false"
            data-ms-editor="true"
          ></textarea>
        ) : (
          <p
            className=" whitespace-normal break-words"
            style={{ width: width - 16, height: height - 16 }}
          >
            {text}
          </p>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  )
}
