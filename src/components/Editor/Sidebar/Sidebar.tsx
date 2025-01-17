import { BsTextParagraph } from 'react-icons/bs'
import NodePreview from './NodePreview'

type SidebarProps = {
  addNewNode: ({ type }: { type: string }) => void
}

export default function Sidebar({ addNewNode }: SidebarProps) {
  return (
    <aside className="w-16 h-full bg-gray-800 text-white flex flex-col items-center ">
      <ul className="w-full h-full flex flex-col items-center  my-4">
        <li className="mb-4">
          <NodePreview label="Text" addNewNode={addNewNode} nodeType="textNode">
            <BsTextParagraph className="w-8 h-8" />
          </NodePreview>
        </li>
      </ul>
    </aside>
  )
}
