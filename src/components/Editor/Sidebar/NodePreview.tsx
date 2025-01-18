type NodePreviewProps = {
  addNewNode: ({ type }: { type: string }) => void
  nodeType: string
  children?: React.ReactNode
  label: string
}

export default function NodePreview({
  addNewNode,
  nodeType,
  children,
  label
}: NodePreviewProps) {
  const handleClick = () => {
    addNewNode({ type: nodeType })
  }
  return (
    <button
      onClick={handleClick}
      className="w-11 h-15 flex flex-col justify-center items-center rounded py-1 bg-white shadow hover:shadow-md transition-all duration-100"
    >
      <span className="">{children}</span>
      <span className="text-xs">{label}</span>
    </button>
  )
}
