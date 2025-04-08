export default function Tooltip({
  children,
  text,
  className = ''
}: {
  children: React.ReactNode
  text: string
  className?: string
}) {
  return (
    <div className={`relative group ${className}`}>
      {children}
      <div
        className={`absolute hidden group-hover:block whitespace-nowrap bg-gray-600 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-200`}
      >
        {text}
      </div>
    </div>
  )
}
