type FeatureCardProps = {
  children?: React.ReactNode
  title: string
  description: string
  position: 'top' | 'bottom'
}

export default function FeatureCard({
  children,
  title,
  description,
  position
}: FeatureCardProps) {
  return (
    <div className="bg-ternary-bg p-4 shadow-lg rounded-lg overflow-hidden w-full h-full ">
      {position === 'top' ? children : null}
      <div className=" text-center p-2">
        <h3 className="text-lg text-primary-text font-semibold mb-4">
          {title}
        </h3>
        <p className="text-ternary-text text-sm">{description}</p>
      </div>
      {position === 'bottom' ? children : null}
    </div>
  )
}
