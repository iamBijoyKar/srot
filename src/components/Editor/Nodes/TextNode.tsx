'use client'
import { useCallback, useState, useRef, useEffect } from 'react'
import {
  Handle,
  Position,
  Node,
  NodeProps,
  NodeResizeControl,
  useReactFlow,
  useNodeId
} from '@xyflow/react'

type TextNodeProps = Node<{
  text: string
  nodeColor?: string
  textColor?: string
  fontSize?: number
  fontWeight?: string
}>

export default function TextUpdaterNode(props: NodeProps<TextNodeProps>) {
  const nodeRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [text, setText] = useState(props.data.text)
  const [showInput, setShowInput] = useState(false)
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(100)

  const textColor = props.data.textColor ? props.data.textColor : '#000'
  const fontSize = props.data.fontSize ? props.data.fontSize : 16
  const fontWeight = props.data.fontWeight ? props.data.fontWeight : 'normal'
  const reactFlow = useReactFlow()
  const nodeId = useNodeId()

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

  useEffect(() => {
    reactFlow.setNodes(
      reactFlow.getNodes().filter((node) => {
        if (node.id === nodeId) {
          node.data.text = text
        }
        return node
      })
    )
  }, [text])

  return (
    <>
      <NodeResizeControl
        color="transparent"
        minWidth={width}
        minHeight={height}
        className="relative"
      >
        {props.selected ? (
          <div className="absolute -top-0 -left-0 w-2 h-2 rounded-full gradient-orb"></div>
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
            className="nodrag outline-none w-full h-full bg-transparent resize-none"
            spellCheck="false"
            data-ms-editor="true"
            style={{
              width: width - 12,
              height: height - 12,
              color: textColor,
              fontSize,
              fontWeight
            }}
          ></textarea>
        ) : (
          <p
            className=" whitespace-normal break-words"
            style={{
              width: width - 16,
              height: height - 16,
              color: textColor,
              fontSize,
              fontWeight
            }}
          >
            {text}
          </p>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  )
}
