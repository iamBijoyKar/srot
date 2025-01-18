import { BsTextParagraph } from 'react-icons/bs'
import { GoImage } from 'react-icons/go'
import NodePreview from './NodePreview'

type SidebarProps = {
  addNewNode: ({ type }: { type: string }) => void
}

export default function Sidebar({ addNewNode }: SidebarProps) {
  return (
    <aside className="w-16 h-full bg-secondary-text flex flex-col items-center ">
      <ul className="w-full h-full flex flex-col items-center gap-3 my-4">
        <li className="">
          <NodePreview label="Text" addNewNode={addNewNode} nodeType="textNode">
            <BsTextParagraph className="w-8 h-8 text-secondary-bg" />
          </NodePreview>
        </li>
        <li className="">
          <NodePreview
            label="Image"
            addNewNode={addNewNode}
            nodeType="imageNode"
          >
            <GoImage className="w-8 h-8 text-secondary-bg" />
          </NodePreview>
        </li>
      </ul>
    </aside>
  )
}
