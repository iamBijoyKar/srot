'use client'
import { useCallback, useEffect, useState } from 'react'
import { useOnSelectionChange } from '@xyflow/react'
import type { Node, Edge } from '@xyflow/react'
import { BsTextParagraph } from 'react-icons/bs'
import { LuListTodo } from 'react-icons/lu'
import { GoImage } from 'react-icons/go'
import { PiImageSquare } from 'react-icons/pi'
import NodePreview from './NodePreview'
import TextNodeProperties from '../Nodes/TextNodeProperties/TextNodeProperties'

type SidebarProps = {
  addNewNode: ({ type }: { type: string }) => void
}

export default function Sidebar({ addNewNode }: SidebarProps) {
  // This state is used to determine which sidebar to show
  const [sideBarType, setSideBarType] = useState<'nodes' | 'properties'>(
    'nodes'
  )
  const [propertiesOf, setPropertiesOf] = useState<
    'textNode' | 'imageNode' | null
  >(null)
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
    if (propertiesOf === 'textNode' && selectedNodes.length > 0) {
      return <TextNodeProperties nodes={selectedNodes} />
    } else {
      return <div className="motion-preset-fade">Props</div>
    }
  }

  useEffect(() => {
    if (selectedNodes.length > 0) {
      setSideBarType('properties')
      setPropertiesOf(selectedNodes[0].type as 'textNode' | 'imageNode')
      // console.log(selectedNodes[0].type)
    } else {
      setSideBarType('nodes')
      setPropertiesOf(null)
    }
  }, [selectedNodes])

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
        </ul>
      ) : (
        <div className="">{propertiesGenerator()}</div>
      )}
    </aside>
  )
}
