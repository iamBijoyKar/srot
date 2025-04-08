import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex justify-center items-center">
      <SignUp />
    </div>
  )
}
