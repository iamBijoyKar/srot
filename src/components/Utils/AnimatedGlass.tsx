type AnimatedGlassProps = {
  children: React.ReactNode
  className?: string
  colors?: string[]
  orbNumber?: number
}

export default function AnimatedGlass({
  children,
  className,
  colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF'],
  orbNumber = 300
}: AnimatedGlassProps) {
  const orbGenerator = (orbNumber: number) => {
    const orbArr = []
    for (let i = 0; i < orbNumber; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const randomSize = Math.random() * 5 + 2
      const randomPositionX = Math.random() * 100 // Random position between 0 and 100%
      const randomPositionY = Math.random() * 100 // Random position between 0 and 100%
      const randomAnimationDuration = Math.random() * 2 + 1 // Random duration between 1 and 3 seconds
      let randomTransitionDelay = Math.random() * 2 // Random delay between 0 and 2 seconds
      if (
        randomPositionX > 40 &&
        randomPositionY > 40 &&
        randomPositionX < 60 &&
        randomPositionY < 60
      ) {
        randomTransitionDelay = Math.random() * 1 + 0
      } else if (
        randomPositionX > 20 &&
        randomPositionY > 20 &&
        randomPositionX < 80 &&
        randomPositionY < 80
      ) {
        randomTransitionDelay = Math.random() * 1 + 0.5
      } else if (
        randomPositionX > 10 &&
        randomPositionY > 10 &&
        randomPositionX < 90 &&
        randomPositionY < 90
      ) {
        randomTransitionDelay = Math.random() * 1 + 0.7
      } else if (
        randomPositionX > 5 &&
        randomPositionY > 5 &&
        randomPositionX < 95 &&
        randomPositionY < 95
      ) {
        randomTransitionDelay = Math.random() * 1 + 1
      } else if (
        randomPositionX > 0 &&
        randomPositionY > 0 &&
        randomPositionX < 100 &&
        randomPositionY < 100
      ) {
        randomTransitionDelay = Math.random() * 1 + 1.5
      }

      orbArr.push(
        <div
          key={i}
          className={`rounded-full absolute blur-sm animate-pulse opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-0`}
          style={{
            backgroundColor: randomColor,
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            top: `${randomPositionY}%`,
            left: `${randomPositionX}%`,
            animationDuration: `${randomAnimationDuration}s`,
            animationDelay: `${Math.random() * 2}s`,
            transitionDelay: `${randomTransitionDelay}s`
          }}
        ></div>
      )
    }
    return orbArr
  }

  return (
    <div
      className={`flex justify-center items-center w-full h-fit group bg-gray-600 hover:bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-10 border border-gray-600 hover:border-gray-500 transition-all duration-500 overflow-hidden relative ${className}`}
    >
      <div className="">{children}</div>
      {...orbGenerator(orbNumber)}
    </div>
  )
}
