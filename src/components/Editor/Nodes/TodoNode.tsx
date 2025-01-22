'use client'
import { useCallback, useState, useEffect } from 'react'
import {
  Handle,
  Position,
  Node,
  NodeProps,
  NodeResizeControl,
  useReactFlow,
  useNodeId
} from '@xyflow/react'

type TodoNodeProps = Node<{
  todos: [{ id: string; text: string; completed: boolean }]
}>

export default function TodoNode(props: NodeProps<TodoNodeProps>) {
  const [todos, setTodos] = useState([
    ...props.data.todos,
    { id: `${props.data.todos.length + 1}`, text: '', completed: false }
  ])

  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(50)

  const selected = props.selected

  const handleCheckboxChange = useCallback(
    (index: string) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === index ? { ...todo, completed: !todo.completed } : todo
        )
      )
    },
    [todos]
  )

  const handleInputTextChange = useCallback(
    (index: string, text: string) => {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === index ? { ...todo, text } : todo))
      )
    },
    [todos]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, id: string, text: string) => {
      if (e.key === 'Enter') {
        setTodos((prev) => [
          ...prev,
          { id: `${prev.length + 1}`, text: '', completed: false }
        ])
      } else if (e.key === 'Backspace' && text === '') {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
      }
    },
    [todos]
  )

  const reactFlow = useReactFlow()
  const nodeId = useNodeId()

  useEffect(() => {
    const nodes = reactFlow.getNodes()
    nodes.filter((node) => {
      if (node.id === nodeId) {
        node.data.todos = todos
      }
      return node
    })

    reactFlow.setNodes(nodes)
  }, [todos])

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
        className={`border p-2 rounded min-w-[240px] min-h-fit w-full relative bg-white ${
          props.selected ? 'border-blue-500' : 'border-gray-300'
        }`}
      >
        <div className="flex flex-col gap-3 w-full">
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(todo.id)}
                checked={todo.completed}
                className=""
              />
              {selected ? (
                <input
                  type="text"
                  onChange={(e) =>
                    handleInputTextChange(todo.id, e.target.value)
                  }
                  onKeyDown={(e) => handleKeyDown(e, todo.id, todo.text)}
                  value={todo.text}
                  className={`${
                    todo.completed ? 'line-through' : ''
                  } text-sm font-medium w-full outline-none block`}
                  spellCheck={false}
                />
              ) : (
                <p
                  className={`${
                    todo.completed ? 'line-through' : ''
                  } text-sm font-medium w-full h-5`}
                >
                  {todo.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  )
}
