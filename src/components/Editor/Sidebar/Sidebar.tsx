'use client'
import { useCallback, useEffect, useState } from 'react'
import { useOnSelectionChange } from '@xyflow/react'
import type { Node, Edge } from '@xyflow/react'
import { BsTextParagraph } from 'react-icons/bs'
import { LuListTodo } from 'react-icons/lu'
import { PiImageSquare } from 'react-icons/pi'
import { HiMiniLink } from 'react-icons/hi2'
import NodePreview from './NodePreview'
import TextNodeProperties from './NodeProperties/TextNodeProperties/TextNodeProperties'

type SidebarProps = {
  addNewNode: ({ type }: { type: string }) => void
}

type PropertiesOf =
  | 'textNode'
  | 'imageNode'
  | 'todoNode'
  | 'linkNode'
  | 'edge'
  | null

export default function Sidebar({ addNewNode }: SidebarProps) {
  // This state is used to determine which sidebar to show
  const [sideBarType, setSideBarType] = useState<'nodes' | 'properties'>(
    'nodes'
  )
  const [propertiesOf, setPropertiesOf] = useState<PropertiesOf>(null)
  const [selectedNodes, setSelectedNodes] = useState<Node[]>([])
  const [selectedEdges, setSelectedEdges] = useState<Edge[]>([])

  // This function is called when the selection changes
  const onChange = useCallback(
    ({ nodes, edges }: { nodes: Node[]; edges: Edge[] }) => {
      setSelectedNodes(nodes)
      setSelectedEdges(edges)
      console.log('nodes', nodes)
    },
    []
  )
  // This hook listens for selection changes
  useOnSelectionChange({ onChange })

  // This function generates the properties sidebar based on the selected node
  const propertiesGenerator = () => {
    // console.log(propertiesOf)
    if (propertiesOf === 'textNode' && selectedNodes.length > 0) {
      return <TextNodeProperties nodes={selectedNodes} />
    } else if (propertiesOf === 'imageNode' && selectedNodes.length > 0) {
      return <div className="motion-preset-fade">Img</div>
    } else if (propertiesOf === 'todoNode' && selectedNodes.length > 0) {
      return <div className="motion-preset-fade">Todo</div>
    } else if (propertiesOf === 'linkNode' && selectedNodes.length > 0) {
      return <div className="motion-preset-fade">Link</div>
    } else if (propertiesOf === 'edge' && selectedEdges.length > 0) {
      return <div className="motion-preset-fade">Edge</div>
    } else {
      return <div className="motion-preset-fade">None</div>
    }
  }

  useEffect(() => {
    if (selectedEdges.length > 0 && selectedNodes.length > 0) return
    if (selectedNodes.length > 0) {
      setSideBarType('properties')
      setPropertiesOf(selectedNodes[0].type as PropertiesOf)
      // console.log(selectedNodes[0].type)
    } else if (selectedEdges.length > 0) {
      setSideBarType('properties')
      setPropertiesOf(
        selectedEdges[0].type ? (selectedEdges[0].type as PropertiesOf) : 'edge'
      )
    } else {
      setSideBarType('nodes')
      setPropertiesOf(null)
    }
  }, [selectedNodes, selectedEdges])

  return (
    <aside className="w-16 h-full bg-secondary-text flex flex-col items-center ">
      {sideBarType === 'nodes' ? (
        <ul className="w-full h-full flex flex-col items-center gap-2 my-4 motion-preset-fade-sm motion-duration-1000">
          <li className="">
            <NodePreview
              label="Text"
              addNewNode={addNewNode}
              nodeType="textNode"
            >
              <BsTextParagraph className="w-6 h-6 text-secondary-bg" />
            </NodePreview>
          </li>
          <li className="">
            <NodePreview
              label="Image"
              addNewNode={addNewNode}
              nodeType="imageNode"
            >
              <PiImageSquare className="w-6 h-6 text-secondary-bg" />
            </NodePreview>
          </li>
          <li className="">
            <NodePreview
              label="To-do"
              addNewNode={addNewNode}
              nodeType="todoNode"
            >
              <LuListTodo className="w-6 h-6 text-secondary-bg" />
            </NodePreview>
          </li>
          <li className="">
            <NodePreview
              label="Link"
              addNewNode={addNewNode}
              nodeType="linkNode"
            >
              <HiMiniLink className="w-6 h-6 text-secondary-bg" />
            </NodePreview>
          </li>
        </ul>
      ) : (
        <div className="">{propertiesGenerator()}</div>
      )}
    </aside>
  )
}
