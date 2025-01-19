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
      className="w-11 h-[50px] flex flex-col justify-center items-center rounded hover:translate-x-1 transition-all duration-100 "
    >
      <span className="bg-white p-[3px] rounded shadow hover:shadow-md transition-all duration-100">
        {children}
      </span>
      <span className="text-[10px] mt-1">{label}</span>
    </button>
  )
}
