import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex justify-center items-center">
      <SignIn />
    </div>
  )
}
